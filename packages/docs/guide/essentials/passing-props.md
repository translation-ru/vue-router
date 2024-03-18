# Передача входных параметров компонентам маршрута %{#passing-props-to-route-components}%

<VueSchoolLink
  href="https://vueschool.io/lessons/route-props"
  title="Узнайте, как передавать входные параметры компонентам маршрута"
/>

Использование `$route` или `useRoute()` в компоненте создает тесную связь с маршрутом, что ограничивает гибкость компонента, так как его можно использовать только на определенных URL-адресах. Хотя это не обязательно плохо, мы можем изменить это поведение с помощью опции `props`:

Давайте вернемся к нашему предыдущему примеру:

```vue
<!-- User.vue -->
<template>
  <div>User {{ $route.params.id }}</div>
</template>
```

маршрутизатор:

```js
import User from './User.vue'

// передается в  `createRouter`.
const routes = [{ path: '/users/:id', component: User }]
```

Мы можем устранить прямую зависимость от `$route` в `User.vue`, объявив вместо этого входной параметр:

::: code-group

```vue [Composition API]
<!-- User.vue -->
<script setup>
defineProps({
  id: String
})
</script>

<template>
  <div>User {{ id }}</div>
</template>
```

```vue [Options API]
<!-- User.vue -->
<script>
export default {
  props: {
    id: String
  },
}
</script>

<template>
  <div>User {{ id }}</div>
</template>
```

:::

Затем мы можем настроить маршрут на передачу параметра `id` в качестве входного параметра, установив `props: true`:

```js
const routes = [{ path: '/user/:id', component: User, props: true }]
```

Это позволяет использовать компонент в любом месте, что облегчает его повторное использование и тестирование.

## Логический режим %{#boolean-mode}%

Если `props` имеет значение `true`, то в качестве входных параметров компонента будут установлены `route.params`.

## Именованные представления %{#named-views}%

Для маршрутов с именованными представлениями необходимо определить опцию `props` для каждого именованного представления:

```js
const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false }
  }
]
```

## Объектный режим %{#object-mode}%

Если `props` является объектом, то именно его свойства будут установлены как входные параметры компонента. Полезно для случаев, когда входной параметр статичен.

```js
const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
```

## Функциональный режим %{#function-mode}%

Можно создать функцию, возвращающую входные параметры. Это позволяет приводить параметры к другим типам, комбинировать статические значения со значениями, основанными на маршрутах, и т.д.

```js
const routes = [
  {
    path: '/search',
    component: SearchUser,
    props: route => ({ query: route.query.q })
  }
]
```

URL `/search?q=vue` будет передавать `{query: 'vue'}` в качестве входных параметров компоненту `SearchUser`.

Постарайтесь, чтобы функция `props` не имела состояния (была stateless), поскольку она выполняется только при изменении маршрута. Если для определения входных параметров требуется состояние, используйте компонент-обертку, тогда Vue сможет реагировать на изменения состояния.

## Через RouterView %{#Via-RouterView}%

Вы также можете передать любые входные параметры через [слот `<RouterView>`](../advanced/router-view-slot):

```vue-html
<RouterView v-slot="{ Component }">
  <component
    :is="Component"
    view-prop="value"
   />
</RouterView>
```

::: warning Предупреждение
В этом случае **все компоненты представления** получат `view-prop`. Обычно это не очень хорошая идея, поскольку означает, что все компоненты представления объявили у себя входной параметр `view-prop`, что не всегда верно. По возможности, используйте один из вышеуказанных вариантов.
:::
