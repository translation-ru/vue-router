# Отображение другого маршрута %{#displaying-a-different-route}%

<!-- <RuleKitLink /> -->

По умолчанию `<RouterView>` отображает текущий маршрут. Передайте проп `route`, чтобы вместо него отобразить другое местоположение маршрута, при этом URL останется прежним:

```vue-html
<RouterView :route="someOtherRoute" />
```

Значение должно быть разрешённым местоположением маршрута, например результатом `router.resolve()`. Если компоненты маршрута загружаются лениво, сначала загрузите их с помощью `loadRouteLocation()`. Когда проп `route` равен `undefined`, `<RouterView>` наследует маршрут, предоставленный родительским представлением. Только `<RouterView>` верхнего уровня откатывается к текущему маршруту из URL.

## Модальные окна с собственным URL %{#modals-with-their-own-url}%

Наиболее распространённый случай использования — модальное окно, у которого есть собственный URL, при этом страница, открывшая его, остаётся видимой на заднем плане. Например, открытие сведений о пользователе в модальном окне ведёт на `/users/1`, но главная страница по-прежнему отображается за ним.

```ts
router.push({
  name: 'user',
  params: { id },
  state: { backgroundView: router.currentRoute.value.fullPath },
})
```

Затем отобразите фоновую страницу с помощью пропа `route`, а модальное окно отобразите **рядом с ней** с помощью второго `<RouterView>`, который показывает текущий маршрут:

```vue
<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const historyState = shallowRef(history.state)
router.afterEach(() => {
  historyState.value = history.state
})

const backgroundRoute = computed(() =>
  historyState.value?.backgroundView
    ? router.resolve(historyState.value.backgroundView)
    : undefined
)
</script>

<template>
  <RouterView :route="backgroundRoute" />

  <dialog v-if="backgroundRoute" open>
    <RouterView />
    <button @click="router.back()">Close</button>
  </dialog>
</template>
```

Тот же самый компонент маршрута отображается в модальном окне, когда пользователь открывает его со страницы, и как полноценная страница, когда пользователь заходит напрямую на `/users/1` или перезагружает страницу. Если фоновая страница использует лениво загружаемые компоненты, загрузите их до завершения навигации:

```ts
router.beforeResolve(async () => {
  const { backgroundView } = history.state ?? {}
  if (backgroundView) {
    await loadRouteLocation(router.resolve(backgroundView))
  }
})
```

## Чтение маршрута внутри представления %{#reading-the-route-inside-the-view}%

Вложенные `<RouterView>`, `useRoute()` и активные классы ссылок `<RouterLink>` внутри `<RouterView>` с пропом `route` используют этот маршрут. Таким образом, фоновая страница и её дочерние элементы ведут себя так, как если бы пользователь всё ещё находился на этой странице: их параметры, query и наблюдатели (watchers) не меняются при открытии модального окна.

Некоторые значения по-прежнему используют текущий маршрут (URL):

- `$route`, что совпадает с текущим маршрутом `useRouter().currentRoute.value`.
- Относительные местоположения, такие как `{ query: { tab: 'posts' } }` в `router.push()` и `<RouterLink>`. Они разрешаются относительно текущего маршрута, а не отображаемого.

Если компоненту нужен текущий маршрут, разместите этот компонент вне `<RouterView>`, получающего проп `route`, как модальное окно выше, или читайте `useRouter().currentRoute`.

::: warning
В версии 5.4 и более ранних `useRoute()` и `<RouterLink>` игнорировали проп `route` и всегда использовали текущий маршрут. Если компонент внутри представления полагается на это, например модальное окно, размещённое _внутри_ фоновой страницы и читающее параметры маршрута модального окна, переместите его рядом с `<RouterView>`, как показано выше.
:::
