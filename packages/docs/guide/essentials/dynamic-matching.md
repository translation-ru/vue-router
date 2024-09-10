# Сопоставление динамических маршрутов с параметрами %{#dynamic-route-matching-with-params}%

<VueSchoolLink
  href="https://vueschool.io/lessons/dynamic-routes"
  title="Узнайте о сопостаставлении динамических маршрутов с помощью параметров"
/>

Очень часто нам придется сопоставлять маршруты с заданным шаблоном с одним и тем же компонентом. Например, у нас может быть компонент `User`, который должен отображаться для всех пользователей, но с разными ID пользователей. Во Vue Router мы можем использовать динамический сегмент в маршруте, чтобы достичь этого, Этот сегмент называется _параметром (param)_:

```js
import User from './User.vue'

// маршруты передаются в `createRouter`.
const routes = [
  // динамические сегменты начинаются с двоеточия
  { path: '/users/:id', component: User },
]
```

Теперь URL-адреса типа `/users/johnny` и `/users/jolyne` будут сопоставляться с одним и тем же маршрутом.

_Параметр_ обозначается двоеточием `:`. Когда маршрут найден, значение его _параметров_ будет раскрываться как `route.params` в каждом компоненте. Таким образом, мы можем вывести ID текущего пользователя, обновив шаблон `User` на следующий:

```vue
<template>
  <div>
    <!-- The current route is accessible as $route in the template -->
    User {{ $route.params.id }}
  </div>
</template>
```

В одном маршруте может быть несколько _параметров_, которые будут сопоставлены с соответствующими полями в `route.params`. Примеры:

| шаблон                         | сопоставленный путь      | route.params                             |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

Помимо `route.params`, объект `route` также предоставляет другую полезную информацию, такую как `route.query` (если есть query в URL), `route.hash` и так далее. Вы можете ознакомиться с полными деталями в [справочнике по API](../../api/#RouteLocationNormalized).

Рабочую демонстрацию этого примера можно найти [здесь](https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&initialpath=%2Fusers%2Feduardo%2Fposts%2F1).

<!-- <iframe
  src="https://codesandbox.io/embed//route-params-vue-router-examples-mlb14?fontsize=14&theme=light&view=preview&initialpath=%2Fusers%2Feduardo%2Fposts%2F1"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Route Params example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Реагирование на изменение параметров %{#reacting-to-params-changes}%

<VueSchoolLink
  href="https://vueschool.io/lessons/reacting-to-param-changes"
  title="Узнайте, как реагировать на изменение параметров"
/>

Следует отметить, что при использовании маршрутов с параметрами, когда пользователь переходит с `/users/johnny` на `/users/jolyne`, будет использоваться тот же экземпляр компонента. Поскольку оба маршрута отображают один и тот же компонент, это более эффективно, чем уничтожение старого экземпляра и создание нового. **Однако это также означает, что хуки жизненного цикла компонента не будут вызваны**.

Для реагирования на изменения параметров в том же компоненте, вы можете просто следить за любым свойством объекта `route`, в данном случае за `route.params`:

::: code-group

```vue [Composition API]
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    // обработка изменения параметров маршрута...
  }
)
</script>
```

```vue [Options API]
<script>
export default {
  created() {
    this.$watch(
      () => this.$route.params.id,
      (newId, oldId) => {
        // обработка изменения параметров маршрута...
      }
    )
  },
}
</script>
```

:::

Или воспользуйтесь [хуком навигации](../advanced/navigation-guards.md) `beforeRouteUpdate`, который также позволяет вам отменить навигацию:

::: code-group

```vue [Composition API]
<script setup>
import { onBeforeRouteUpdate } from 'vue-router'
// ...

onBeforeRouteUpdate(async (to, from) => {
  // обработка изменения параметров маршрута...
  userData.value = await fetchUser(to.params.id)
})
</script>
```

```vue [Options API]
<script>
export default {
  async beforeRouteUpdate(to, from) {
    // обработка изменения параметров маршрута...
    this.userData = await fetchUser(to.params.id)
  },
  // ...
}
</script>
```

:::

## Страница ошибки 404 / отслеживание ненайденных маршрутов %{#сatch-all-404-not-found-route}%

<VueSchoolLink
  href="https://vueschool.io/lessons/404-not-found-page"
  title="Узнайте, как сделать маршрута для отслеживания ненайденных путей/404"
/>

Обычные параметры будут соответствовать только символам между фрагментами URL, разделенными символом `/`. Если вы хотите сопоставить **любые** символы, вы можете использовать пользовательское регулярное выражение для _параметра_, добавив его в скобках сразу после _параметра_:

```js
const routes = [
  // будет сопоставляться всем маршрутам и будет помещено в `route.params.pathMatch`.
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // будет сопоставляться всему, что начинается с `/user-`, и будет помещено в `route.params.afterUser`.
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```

В данном конкретном случае мы используем [пользовательское регулярное выражение](./route-matching-syntax.md#custom-regexp-in-params), заключенное в круглые скобки, и помечаем параметр `pathMatch` как [опционально повторяемый](./route-matching-syntax.md#optional-parameters). Это позволяет нам при необходимости перейти прямо к этому маршруту, разбив `path` на массив:

```js
router.push({
  name: 'NotFound',
  // сохранить текущий путь и удалить первый символ, чтобы целевой URL не начинался с `//`.
  params: { pathMatch: route.path.substring(1).split('/') },
  // сохраняем существующий запрос и хэш, если таковой имеется
  query: route.query,
  hash: route.hash,
})
```

Подробнее см. в разделе [повторяющиеся параметры](./route-matching-syntax.md#repeatable-params).

Если вы используете [History mode](./history-mode.md), обязательно следуйте инструкциям по правильной настройке вашего сервера.

## Продвинутые возможности сопоставления %{#advanced-matching-patterns}%

Vue Router использует свой собственный синтаксис сопоставления путей, вдохновленный синтаксисом, используемым в `express`, поэтому он поддерживает множество продвинутых шаблонов сопоставления, таких как опциональные динамические сегменты и регулярные выражения. Пожалуйста, ознакомьтесь с документацией по [продвинутому сопоставлению](./route-matching-syntax.md), чтобы изучить их подробнее.
