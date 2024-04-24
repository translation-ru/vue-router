# Загрузка данных %{#data-fetching}%

Иногда при активации маршрута требуется получить данные с сервера. Например, перед отображением профиля пользователя необходимо получить данные о нем с сервера. Этого можно добиться двумя различными способами:

- **Получение данных после перехода**: сначала перейти к новому маршруту, а затем получить данные в хуке жизненного цикла компонента маршрута. По мере загрузки данных отображать индикатор состояния загрузки.

- **Получение данных перед переходом**: Получение данных перед переходом в навигационном хуке маршрутаи и завершение навигации уже когда они будут получены.

С технической точки зрения, оба варианта являются правильными - в конечном итоге все зависит от того, какой UX (user expirience) вы хотите получить.

## Получение данных после перехода %{#fetching-after-navigation}%

При таком подходе мы сразу же осуществляем переход и рендеринг компонента маршрута, а данные получаем в самом компоненте. Это дает нам возможность отображать состояние загрузки, пока данные пересылаются по сети, а также по-разному обрабатывать загрузку для каждого представления.

Предположим, что у нас есть компонент `Post`, которому необходимо получить данные для поста на основе `route.params.id`:

::: code-group

```vue [Composition API]
<template>
  <div class="post">
    <div v-if="loading" class="loading">Загрузка...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPost } from './api.js'

const route = useRoute()

const loading = ref(false)
const post = ref(null)
const error = ref(null)

// наблюдение за  параметром маршрута, чтобы снова получить данные
// watch the params of the route to fetch the data again
watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  error.value = post.value = null
  loading.value = true

  try {
    // замените `getPost` на вашу утилиту для получения данных / обертку API
    post.value = await getPost(id)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>
```

```vue [Options API]
<template>
  <div class="post">
    <div v-if="loading" class="loading">Загрузка...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { getPost } from './api.js'

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    // следить за изменениями параметров маршрута
    // для повторной загрузки данных
    this.$watch(
      () => this.$route.params.id,
      this.fetchData,
      // получать данные, когда представление создано и данные
      // уже реактивно отслеживаются
      { immediate: true }
    )
  },
  methods: {
    async fetchData(id) {
      this.error = this.post = null
      this.loading = true

      try {
        // замените `getPost` на вашу утилиту для получения данных / доступа к API
        this.post = await getPost(id)
      } catch (err) {
        this.error = err.toString()
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
```

:::

## Получение данных перед переходом %{#fetching-before-navigation}%

При этом подходе мы запрашиваем данные до завершения перехода к новому маршруту. Получение данных выполняется в навигационном хуке `beforeRouteEnter` в компоненте маршрута, который вызывает метод `next`, когда данные получены. Коллбек, передаваемый в `next`, будет вызван **после монтирования компонента**:

```js
export default {
  data() {
    return {
      post: null,
      error: null,
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const post = await getPost(to.params.id)
      // `setPost` - это метод, определенный ниже
      next(vm => vm.setPost(post))
    } catch (err) {
      // `setError` - это метод, определенный ниже
      next(vm => vm.setError(err))
    }
  },
  // когда маршрут изменяется, а этот компонент уже отрисован,
  // логика будет несколько иной.
  beforeRouteUpdate(to, from) {
    this.post = null
    getPost(to.params.id).then(this.setPost).catch(this.setError)
  },
  methods: {
    setPost(post) {
      this.post = post
    },
    setError(err) {
      this.error = err.toString()
    }
  }
}
```

Пользователь останется на предыдущем представлении, пока данные будут загружаться на новом. Поэтому рекомендуется отображать индикатор загрузки или какой-либо другой индикатор, пока данные загружаются. Если получение данных завершается неудачей, необходимо отображать какое-либо глобальное предупреждение.

<!-- ### Using Composition API -->

<!-- TODO: -->
