# Vue Router и Composition API %{#vue-router-and-the-composition-api}%

<VueSchoolLink
  href="https://vueschool.io/lessons/router-and-the-composition-api"
  title="Узнайте, как использовать Vue Router с composition API"
/>

Введение `setup` функции и Vue [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) открывают новые возможности, но для того, чтобы полностью использовать потенциал Vue Router, нам необходимо использовать несколько новых функций для замены доступа к `this` и навигационным хукам в компонентах.

## Доступ к маршрутизатору и текущему маршруту внутри `setup` функции %{#accessing-the-router-and-current-route-inside-setup}%

Поскольку внутри `setup` функции у нас нет доступа к `this`, мы больше не можем напрямую обращаться к `this.$router` или `this.$route`. Вместо этого мы используем функции `useRouter` и `useRoute`:

```js
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
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
  },
}
```

Объект `route` является реактивным объектом, поэтому можно наблюдать за любым его свойством, при этом следует **избегать наблюдения за всем объектом `route`**. В большинстве сценариев следует следить только за параметром, изменение которого ожидается

```js
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const userData = ref()

    // получение информации о пользователе при изменении параметров
    watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )
  },
}
```

Обратите внимание, что мы по-прежнему имеем доступ к `$router` и `$route` в шаблонах, поэтому нет необходимости возвращать `router` или `route` внутри `setup` функции.

## Навигационные хуки %{#navigation-guards}%

Хотя вы по-прежнему можете использовать навигационные хуки внутри компонентов внутри `setup` функции, Vue Router раскрывает хуки update и leave как Composition API функции:

```js
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    // то же самое, что и опция beforeRouteLeave без доступа к `this`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // отменить переход и остаться на той же странице
      if (!answer) return false
    })

    const userData = ref()

    // то же самое, что и опция beforeRouteUpdate без доступа к `this`.
    onBeforeRouteUpdate(async (to, from) => {
      // получаем пользователя только в том случае, если изменился id, так как
      // вероятно, что изменился только query или хэш
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
```

Хуки в Composition API могут быть использованы в любом компоненте, отображаемом с помощью `<router-view>`, их не нужно использовать напрямую в компоненте маршрута, как навигационные хуки внутри компонентов.

## `useLink` %{#uselink}%

Vue Router раскрывает внутреннее поведение RouterLink как composable. Он принимает реактивный объект, подобный входному параметру компонента `RouterLink`, и раскрывает низкоуровневые свойства для создания собственного компонента `RouterLink` или генерации пользовательских ссылок:

```js
import { RouterLink, useLink } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'AppLink',

  props: {
    // добавьте @ts-ignore, если используете TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },

  setup(props) {
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

    return { isExternalLink, href, navigate, isActive }
  },
}
```

Заметим, что `v-slot` компонента RouterLink дает доступ к тем же свойствам, что и composable `useLink`.
