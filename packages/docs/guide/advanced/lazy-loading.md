# Ленивая загрузка маршрутов %{#lazy-loading-routes}%

<VueSchoolLink
  href="https://vueschool.io/lessons/lazy-loading-routes-vue-cli-only"
  title="Узнайте всё о ленивой загрузке маршрутов"
/>

Если вы собираете ваше приложение при помощи инструментов сборки, итоговый размер Javascript приложения может стать довольно большим, тем самым влиять на время загрузки страницы. Было бы более эффективныее, если бы мы могли разделить компоненты каждого маршрута на отдельные части и загружать их только при посещении маршрута.

Vue Router поддерживает [динамические импорты](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) из коробки, что дает возможность замены статических импортов на динамические:

```js
// замените
// import UserDetails from './views/UserDetails'
// на это
const UserDetails = () => import('./views/UserDetails.vue')

const router = createRouter({
  // ...
  routes: [
    { path: '/users/:id', component: UserDetails }
    // или используйте напрямую в определении маршрута
    { path: '/users/:id', component: () => import('./views/UserDetails.vue') },
  ],
})
```

Опция `component` (и `components`) принимает функцию, которая возвращает Promise компонента, Vue Router **загрузит его только при первом посещении страницы**, а затем будет использовать закешированную версию. Также вы можете использовать более сложные функции, при условии, что они возвращают Promise:

```js
const UserDetails = () =>
  Promise.resolve({
    /* определение компонентоа */
  })
```

В общем случае целесообразно **всегда использовать динамический импорт** для всех маршрутов.

::: tip Совет
**Не** используйте [асинхронные компоненты](https://vuejs.org/guide/components/async.html) для маршрутов. Асинхронные компоненты могут все еще использоваться внутри компонентов маршрута, но сами компоненты маршрута - это просто динамические импорты.
:::

При использовании инструментов сборки, например webpack, это автоматически позволит использовать [разделение кода](https://webpack.js.org/guides/code-splitting/).

При использовании Babel необходимо добавить плагин [syntax-dynamic-import](https://babeljs.io/docs/plugins/syntax-dynamic-import/), чтобы Babel мог правильно анализировать синтаксис.

## Группировка компонентов в одном чанке %{#grouping-components-in-the-same-chunk}%

### С webpack %{#with-webpack}%

Иногда мы можем захотеть сгруппировать все компоненты, вложенные в один маршрут, в один асинхронный чанк (chunk). Для этого необходимо использовать [именованные чанки](https://webpack.js.org/guides/code-splitting/#dynamic-imports), указав имя чанка с помощью специального синтаксиса комментариев (требуется webpack > 2.4):

```js
const UserDetails = () =>
  import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () =>
  import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () =>
  import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
```

webpack сгруппирует все асинхронные модули с одинаковым именем чанка в один асинхронный.

### С Vite %{#with-vite}%

В Vite вы можете определить чанки в разделе [`rollupOptions`](https://vitejs.dev/config/#build-rollupoptions):

```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-user': [
            './src/UserDetails',
            './src/UserDashboard',
            './src/UserProfileEdit',
          ],
        },
      },
    },
  },
})
```
