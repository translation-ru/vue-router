# Динамическая маршрутизация %{#dynamic-routing}%

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-dynamic-routing"
  title="Узнайте, как добавлять маршруты в рантайме"
/>

Добавление маршрутов в ваш маршрутизатор обычно выполняется с помощью опции `routes`, но в некоторых ситуациях вы можете захотеть добавлять или удалять маршруты, когда приложение уже запущено. Приложения с расширяемыми интерфейсами, такие как [Vue CLI UI](https://cli.vuejs.org/dev-guide/ui-api.html), могут использовать это для расширения функциональности приложения.

## Добавление маршрутов %{#adding-routes}%

Динамическая маршрутизация в основном достигается с помощью двух функций: `router.addRoute()` и `router.removeRoute()`. Они **только** регистрируют новый маршрут, и если новый маршрут соответствует текущему местоположению, вам потребуется **вручную выполнить переход навигаци** с использованием `router.push()` или `router.replace()`, чтобы отобразить этот новый маршрут. Давайте посмотрим на пример:

Представьте себе маршрутизатор с одним единственным маршрутом:

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:articleName', component: Article }],
})
```

Перейдите на любую страницу, например, `/about`, `/store` или `/3-tricks-to-improve-your-routing-code`. Переход навигации закончится отрисовкой компонента `Article`. Если мы находимся на странице `/about` и добавляем новый маршрут:

```js
router.addRoute({ path: '/about', component: About })
```

Страница все равно будет показывать компонент `Article`. Нужно вручную вызвать `router.replace()` для изменения текущего местоположения и перезаписи предыдущего (вместо добавления новой записи и двойного попадания в одно и тоже местоположение в истории):

```js
router.addRoute({ path: '/about', component: About })
// мы также могли бы использовать this.$route или useRoute()
router.replace(router.currentRoute.value.fullPath)
```

Помните, что вы можете сделать `await router.replace()`, если вам необходимо дождаться отображения нового маршрута.

## Добавление маршрутов внутри навигационных хуков %{#adding-routes-inside-navigation-guards}%

Если вы решите добавить или удалить маршруты внутри защиты навигации, не вызывайте `router.replace()`, а инициируйте перенаправление, вернув новый адрес:

```js
router.beforeEach(to => {
  if (!hasNecessaryRoute(to)) {
    router.addRoute(generateRoute(to))
    // инициализировать перенаправление
    return to.fullPath
  }
})
```

Приведенный выше пример предполагает две вещи: во-первых, новая запись о маршруте будет соответствовать местоположению `to`, что фактически приведет к другому местоположению, отличному от того, к которому мы пытались получить доступ. Во-вторых, после добавления нового маршрута функция `hasNecessaryRoute()` возвращает `false`, чтобы избежать бесконечного перенаправления.

Поскольку мы выполняем перенаправление, мы заменяем текущий переход навигации и фактически ведем себя так же, как в приведенном ранее примере. В реальных сценариях добавление маршрутов скорее всего будет происходить за пределами навигационных хуков, например, когда компонент маршрута будет смонтирован, он зарегистрирует новые маршруты.

## Удаление маршрутов %{#removing-routes}%

Существует несколько способов удаления существующих маршрутов:

- Добавление маршрута с конфликтующим именем. Если вы добавите маршрут с именем, совпадающим с существующим маршрутом, он будет удален, а затем добавлен заново:

  ```js
  router.addRoute({ path: '/about', name: 'about', component: About })
  // это приведет к удалению ранее добавленного маршрута,
  // поскольку они имеют одно и то же имя,
  // а имена уникальны для всех маршрутов
  router.addRoute({ path: '/other', name: 'about', component: Other })
  ```

- Вызвав коллбек, возвращаемый функцией `router.addRoute()`:

  ```js
  const removeRoute = router.addRoute(routeRecord)
  removeRoute() // удаляет маршрут, если он существует
  ```

  Это удобно, когда маршруты не имеют имени

- С помощью `router.removeRoute()` можно удалить маршрут по его имени:

  ```js
  router.addRoute({ path: '/about', name: 'about', component: About })
  // удаление маршрута
  router.removeRoute('about')
  ```

  Примечание: если вы хотите использовать эту функцию, но хотите избежать конфликтов в именах, вы можете использовать `Symbol` для имен маршрутов.

При удалении маршрута вместе с ним удаляются **все его псевдонимы и дочерние элементы**.

## Добавление вложенных маршрутов %{#adding-nested-routes}%

Чтобы добавить вложенные маршруты, вы можете передать имя родительского маршрута в качестве первого параметра в `router.addRoute()`. Это позволит добавить маршрут так, как если бы он был добавлен через `children`:

```js
router.addRoute({ name: 'admin', path: '/admin', component: Admin })
router.addRoute('admin', { path: 'settings', component: AdminSettings })
```

Это эквивалентно:

```js
router.addRoute({
  name: 'admin',
  path: '/admin',
  component: Admin,
  children: [{ path: 'settings', component: AdminSettings }],
})
```

## Проверка существования маршрутов %{#looking-at-existing-routes}%

Vue Router предоставляет две функции для просмотра существующих маршрутов:

- [`router.hasRoute()`](/api/interfaces/Router.md#hasRoute): проверка на существования маршрута.
- [`router.getRoutes()`](/api/interfaces/Router.md#getRoutes): получение массива всех маршруты.
