# Анимация переходов %{#transitions}%

<VueSchoolLink
  href="https://vueschool.io/lessons/route-transitions"
  title="Узнайте все об анимациях перехода"
/>

Для того чтобы использовать transitions в компонентах маршрута и анимировать навигацию, необходимо использовать v-slot API:

```html
<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
```

[Всё transition API](https://v3.vuejs.org/guide/transitions-enterleave.html) применимо и здесь.

## Анимация перехода для конкретных маршрутов %{#per-route-transition}%

В приведенном выше случае для всех маршрутов будет применяться один и тот же переход анимации. Если необходимо, чтобы каждый компонент маршрута имел разные переходы, можно вместо этого использовать сочетание [meta полей](./meta.md) и динамического входного параметра`name` на компоненте `<transition>`:

```js
const routes = [
  {
    path: '/custom-transition',
    component: PanelLeft,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/other-transition',
    component: PanelRight,
    meta: { transition: 'slide-right' },
  },
]
```

```html
<router-view v-slot="{ Component, route }">
  <!-- Используйте пользовательский переход анимации или `fade` -->
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
```

## Динамическая анимация для маршрутов %{#route-based-dynamic-transition}%

Вы можете динамически определять используемый переход анимации, основываясь на связи между целевым и текущим маршрутами. Для этого используется фрагмент, очень похожий на предыдущий:

```html
<!-- использование динамического имени перехода -->
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition">
    <component :is="Component" />
  </transition>
</router-view>
```

Мы можем добавить [хуки завершения перехода](./navigation-guards.md#Global-After-Hooks) для динамического добавления информации в `meta` поле в зависимости от глубины маршрута

```js
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})
```

## Принудительная анимация перехода между повторно используемыми представлениями %{#forcing-a-transition-between-reused-views}%

Vue может автоматически повторно использовать компоненты, когда это возможно, избегая каких-либо переходов анимации. К счастью, есть возможность [добавить атрибут `key`](https://v3.vuejs.org/api/special-attributes.html#key) для принудительного перехода анимации. Это также позволяет вызывать переходы, оставаясь на том же маршруте с разными параметрами:

```vue
<router-view v-slot="{ Component, route }">
  <transition name="fade">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
```

<!-- TODO: interactive example -->
<!-- See full example [here](https://github.com/vuejs/vue-router/blob/dev/examples/transitions/app.js). -->
