# Vue Router и Composition API %{#vue-router-and-the-composition-api}%

<VueSchoolLink
  href="https://vueschool.io/lessons/router-and-the-composition-api"
  title="Узнайте, как использовать Vue Router с Composition API"
/>

## Доступ к маршрутизатору и текущему маршруту внутри `setup` функции %{#accessing-the-router-and-current-route-inside-setup}%

Поскольку внутри `setup` функции у нас нет доступа к `this`, мы больше не можем напрямую обращаться к `this.$router` или `this.$route`. Вместо этого вы должны использовать composables `useRouter` и `useRoute`:

```vue
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function pushWithQuery(query) {
  router.push({
    name: 'search',
    query: {
      ...route.query,
      ...query,
    },
  })
}
</script>
```

Объект `route` является реактивным объектом. В большинстве случаев следует **избегать наблюдения за всем объектом `route`**. Вместо этого вы можете напрямую отслеживать свойства, которые вам нужны:

```vue
<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const userData = ref()

// запрос на получение информации о пользователе при изменении params
watch(
  () => route.params.id,
  async newId => {
    userData.value = await fetchUser(newId)
  }
)
</script>
```

Обратите внимание, что доступ к `$router` и `$route` все еще имеется в шаблонах, поэтому нет необходимости использовать `useRouter` или `useRoute`, если вам нужны только эти объекты в шаблоне.

## Навигационные хуки %{#navigation-guards}%

Vue Router предоставляет навигационныехуки update и leave в виде функций Composition API:

```vue
<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

// то же самое, что и опция beforeRouteLeave без доступа к `this`
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!'
  )
  // отменить переход и остаться на той же странице
  if (!answer) return false
})

const userData = ref()

// то же самое, что и опция beforeRouteUpdate без доступа к `this`
onBeforeRouteUpdate(async (to, from) => {
  // получаем пользователя только в том случае, если изменился id, так как
  // вероятно, что изменился только query или хэш
  if (to.params.id !== from.params.id) {
    userData.value = await fetchUser(to.params.id)
  }
})
</script>
```

Хуки в Composition API могут быть использованы в любом компоненте, отображаемом с помощью `<router-view>`, их не нужно использовать напрямую в компоненте маршрута, как навигационные хуки внутри компонентов.

## `useLink` %{#uselink}%

Vue Router раскрывает внутреннее поведение RouterLink как composable. Он принимает реактивный объект, подобный входному параметру компонента `RouterLink`, и раскрывает низкоуровневые свойства для создания собственного компонента `RouterLink` или генерации пользовательских ссылок:

```vue
<script setup>
import { RouterLink, useLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  // добавьте @ts-ignore если используете TypeScript
  ...RouterLink.props,
  inactiveClass: String,
})

const {
  // разрешенный объект маршрута
  route,
  // href для использования в ссылке
  href,
  // boolean ref-ссылка, указывающая, активен ли текущая ссылка адреса
  isActive,
  // boolean ref-ссылка, указывающая, активна ли ссылка "по точному совпадению"
  isExactActive,
  // функция для перехода по ссылке
  navigate
} = useLink(props)

const isExternalLink = computed(
  () => typeof props.to === 'string' && props.to.startsWith('http')
)
</script>
```

Заметим, что `v-slot` компонента RouterLink дает доступ к тем же свойствам, что и composable `useLink`.
