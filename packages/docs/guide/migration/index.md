# Миграция с Vue 2 %{#migrating-from-vue-2}%

Большая часть Vue Router API осталась неизменной при переписывании с версии 3 (для Vue 2) на версию 4 (для Vue 3). Однако всё равно существуют несколько изменений без обратной совместимости, с которыми вы можете столкнуться при миграции вашего приложения. Это руководство предназначено, чтобы помочь вам понять, почему произошли эти изменения, и как адаптировать ваше приложение, чтобы оно работало с Vue Router 4.

## Критические изменения %{#breaking-changes}%

Изменения расположены в порядке их использования. Поэтому рекомендуется следовать этому списку по порядку.

### createRouter заместо new Router %{#new-router-becomes-createrouter}%

Vue Router больше не является классом, а представляет собой набор функций. Вместо того чтобы писать `new Router()`, теперь нужно вызывать `createRouter`:

```js
// раньше было
// import Router from 'vue-router'
import { createRouter } from 'vue-router'

const router = createRouter({
  // ...
})
```

### Новая опция `history` для замены `mode` %{#new-history-option-to-replace-mode}%

Опция `mode: 'history'` была заменена на более гибкую с названием `history`. В зависимости от того, какой режим вы использовали, вам придется заменить его на соответствующую функцию:

- `"history"`: `createWebHistory()`
- `"hash"`: `createWebHashHistory()`
- `"abstract"`: `createMemoryHistory()`

Полный пример:

```js
import { createRouter, createWebHistory } from 'vue-router'
// существуют также createWebHashHistory и createMemoryHistory

createRouter({
  history: createWebHistory(),
  routes: [],
})
```

При рендеринге на стороне сервера (SSR) необходимо вручную передать соответствующий history:

```js
// router.js
let history = isServer ? createMemoryHistory() : createWebHistory()
let router = createRouter({ routes, history })
// где-то в файле server-entry.js
router.push(req.url) // url запроса
router.isReady().then(() => {
  // разрешенный запрос
})
```

**Причина**: включение оптимизации встряхивания дерева (tree shaking) неиспользуемых history режимов, а также реализация пользовательских историй для сложных сценариев, таких как нативные решения.

### Опция `base` была перемещена %{#moved-the-base-option}%

Опция `base` теперь передается в качестве первого аргумента функции `createWebHistory` (и других history):

```js
import { createRouter, createWebHistory } from 'vue-router'
createRouter({
  history: createWebHistory('/base-directory/'),
  routes: [],
})
```

### Удаление опции `fallback` %{#removal-of-the-fallback-option}%

Опция `fallback` больше не поддерживается при создании маршрутизатора:

```diff
-new VueRouter({
+createRouter({
-  fallback: false,
// другие опции...
})
```

**Причина**: Все браузеры, поддерживаемые Vue, поддерживают [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API), что позволяет нам избежать хаков с модификацией `location.hash` и напрямую использовать `history.pushState()`.

### Удалены маршруты `*` (звездочка или все) %{#removed-star-or-catch-all-routes}%

Теперь все маршруты (`*`, `/*`) должны определяться с помощью параметра с регулярным выражением:

```js
const routes = [
  // pathMatch - это имя параметра, например, переход на /not/found даст
  // { params: { pathMatch: ['not', 'found'] }}
  // это происходит благодаря последнему *, означающему повторение params, и необходимо, если вы
  // планируете напрямую перейти к маршруту not-found, используя его имя
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  // если опустить последний `*`, то символ `/` в параметрах будет
  // закодирован при resolve или push
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
]
// плохой пример при использовании именованных маршрутов:
router.resolve({
  name: 'bad-not-found',
  params: { pathMatch: 'not/found' },
}).href // '/not%2Ffound'
// хороший пример:
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'
```

:::tip Совет
Вам не нужно добавлять `*` для повторяющихся параметров, если вы не планируете напрямую переходить на несуществующий маршрут, используя его имя. Если вы вызываете `router.push('/not/found/url')`, то он предоставит правильный параметр `pathMatch`.
:::

**Причина**: Vue Router больше не использует `path-to-regexp`, вместо этого он реализует собственную систему парсинга, которая позволяет ранжировать маршруты и обеспечивает динамическую маршрутизацию. Поскольку мы обычно добавляем всего один универсальный маршрут на проект, нет большой выгоды в поддержке специального синтаксиса для `*`. Кодирование параметров применяется ко всем маршрутам без исключений, чтобы упростить прогнозируемость поведения.

### Свойство `currentRoute` теперь является `ref()` %{#the-currentroute-property-is-now-a-ref}%

Раньше доступ к свойствам объекта [`currentRoute`](https://v3.router.vuejs.org/api/#router-currentroute) на экземпляре маршрутизатора можно было получить напрямую.

С появлением vue-router v4 базовый тип объекта `currentRoute` у экземпляра маршрутизатора изменился на `Ref<RouteLocationNormalizedLoaded>`, что следует из более новых [основ реактивности](https://vuejs.org/guide/essentials/reactivity-fundamentals.html), представленных во Vue 3.

Хотя это ничего не меняет, если вы читаете маршрут с помощью `useRoute()` или `this.$route`, если вы обращаетесь к нему напрямую через экземпляр маршрутизатора, то вам нужно будет обращаться к фактическому объекту маршрута через `currentRoute.value`:

```ts
const { page } = router.currentRoute.query // [!code --]
const { page } = router.currentRoute.value.query // [!code ++]
```

### `onReady` заменена на `isReady` %{#replaced-onready-with-isready}%

Существующая функция `router.onReady()` была заменена на `router.isReady()`, которая не принимает никаких аргументов и возвращает Promise:

```js
// была заменена
router.onReady(onSuccess, onError)
// на
router.isReady().then(onSuccess).catch(onError)
// или с использованием await:
try {
  await router.isReady()
  // onSuccess
} catch (err) {
  // onError
}
```

### Изменения `scrollBehavior` %{#scrollbehavior-changes}%

Объект, возвращаемый в `scrollBehavior`, теперь аналогичен [`ScrollToOptions`](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions): `x` переименован в `left`, а `y` - в `top`. См. [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0035-router-scroll-position.md).

**Причина**: сделать объект похожим на `ScrollToOptions`, чтобы он был более привычен к нативному JS API и потенциально позволял использовать новые опции в будущем.

### `<router-view>`, `<keep-alive>` и `<transition>` %{#-router-view-keep-alive-and-transition-}%

Теперь `transition` и `keep-alive` должны использоваться **внутри** `RouterView` через `v-slot` API:

```vue
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

**Причина**: Это было необходимое изменение. См. [связанный RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0034-router-view-keep-alive-transitions.md).

### Удаление свойства `append` в `<router-link>` %{#removal-of-append-prop-in-router-link-}%

Свойство `append` было удалено из `<router-link>`. Вместо этого можно вручную конкатенировать значение c существующим `path`:

```html
замените
<router-link to="child-route" append>to relative child</router-link>
на это
<router-link :to="append($route.path, 'child-route')">
  to relative child
</router-link>
```

Вы должны определить глобальную функцию `append` для своего экземпляра _App_:

```js
app.config.globalProperties.append = (path, pathToAppend) =>
  path + (path.endsWith('/') ? '' : '/') + pathToAppend
```

**Причина**: `append` использовался нечасто, его легко воспроизвести в пользовательской среде.

### Удаление входных параметорв `event` и `tag` из `<router-link>` %{#removal-of-event-and-tag-props-in-router-link-}%

Входные параметры `event` и `tag` были удалены из `<router-link>`. Для полной настройки `<router-link>` можно использовать [`v-slot`](/guide/advanced/composition-api#uselink) API:

```html
замените
<router-link to="/about" tag="span" event="dblclick">About Us</router-link>
на это
<router-link to="/about" custom v-slot="{ navigate }">
  <span @click="navigate" @keypress.enter="navigate" role="link">About Us</span>
</router-link>
```

**Причина**: Эти свойства часто использовались вместе для создания чего-то, отличного от тега `<a>`, но они были введены до появления `v-slot` API и используются недостаточно часто, чтобы оправдать добавление их в размер бандла для всех.

### Удаление входного параметра `exact` из `<router-link>`. %{#removal-of-the-exact-prop-in-router-link-}%

Входной параметр `exact` был удален, потому что проблема, которую он решал, больше не существует, поэтому его можно безопасно убрать. Однако есть две вещи, о которых стоит знать:

- Теперь маршруты активны на основе записей о маршрутах, которые они представляют, а не на основе сгенерированных объектов местоположения маршрута и их свойств `path`, `query` и `hash`
- Сопоставляется только секция `path`, `query` и `hash` больше не учитываются

Если вы хотите настроить это поведение, например, учесть секцию `hash`, то для расширения `<router-link>` следует воспользоваться [`v-slot` API](/guide/advanced/composition-api#useLink).

**Причина**: Подробнее см. изменения в [RFC о сопоставлении активных маршрутов](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0028-router-active-link.md#summary).

### Навигационные хуки в миксинах игнорируются %{#navigation-guards-in-mixins-are-ignored}%

На данный момент навигационные хуки в миксинах не поддерживаются. Отслеживать поддержку можно тут: [vue-router#454](https://github.com/vuejs/router/issues/454).

### Удаление `router.match` и изменение `router.resolve` %{#removal-of-router-match-and-changes-to-router-resolve}%

И `router.match`, и `router.resolve` были объединены в `router.resolve` с несколько иной сигнатурой. [Более подробная информация приведена в API] (/api/interfaces/Router.md#resolve).

**Причина**: Объединение нескольких методов, которые использовались для одной и той же цели.

### Функция `router.getMatchedComponents()` была удалена %{#removal-of-router-getMatchedComponents-}%

Метод `router.getMatchedComponents` теперь удален, поскольку совпадающие компоненты могут быть получены из `router.currentRoute.value.matched`:

```js
router.currentRoute.value.matched.flatMap(record =>
  Object.values(record.components)
)
```

**Причина**: Данный метод использовался только в SSR и является одноразовым и может быть написан пользователем.

### Записи перенаправления не могут использовать специальные пути %{#redirect-records-cannot-use-special-paths}%

Ранее не документированная возможность позволяла установить запись перенаправления на специальный путь типа `/events/:id` и при этом повторно использовать существующий параметр `id`. Теперь это невозможно, и есть два варианта:

- Использование имени маршрута без параметра: `redirect: { name: 'events' }`. Обратите внимание, что это не будет работать, если параметр `:id` является необязательным
- Использование функции для воссоздания нового местоположения на основе цели: `redirect: to => ({ name: 'events', params: to.params })`.

**Причина**: Этот синтаксис использовался редко и был _другим способом выполнения задач_, который не был достаточно коротким по сравнению с версиями выше, при этом вносил некоторую сложность и делал маршрутизатор более тяжелым.

### **Все** переходы навигации теперь всегда асинхронные %{#all-navigations-are-now-always-asynchronous}%

Все переходы навигации, включая первую, теперь асинхронные, то есть при использовании `transition` может потребоваться дождаться, пока маршрутизатор будет _готов_ перед монтированием приложения:

```js
app.use(router)
// Примечание: на стороне сервера необходимо вручную указать начальный маршрут
router.isReady().then(() => app.mount('#app'))
```

В противном случае анимация перехода будет выполнена, как если бы вы предоставили свойство `appear` для `transition`, потому что маршрутизатор отображает своё начальное положение (ничего) и затем отображает первое положение.

Обратите внимание, что **если при начальной навигации у вас есть навигационные хуки**, то блокировать рендеринг приложения до их разрешения, возможно, не стоит, если только вы не используете рендеринг на стороне сервера. В этом случае, монтируйте приложение, не дожидаясь готовности маршрутизатора , чтобы получить тот же результат, что и в Vue 2.

### `router.app` был удален %{#removal-of-router-app}%

`router.app` используется для обозначения последнего корневого компонента (экземпляра Vue), который внедрил маршрутизатор. Теперь Vue Router может безопасно использоваться несколькими приложениями Vue одновременно. При использовании маршрутизатора его по-прежнему можно добавлять:

```js
app.use(router)
router.app = app
```

Вы также можете расширить TypeScript определение интерфейса `Router` для добавления свойства `app`.

**Причина**: Приложения Vue 3 не существуют во Vue 2, и теперь мы должным образом поддерживаем несколько приложений, использующих один экземпляр Router, поэтому наличие свойства `app` вводило бы в заблуждение, поскольку вместо корневого экземпляра использовалось бы приложение.

### Передача контента в `<slot>` компонентов маршрута %{#passing-content-to-route-components-slot-}%

Раньше можно было напрямую передать шаблон для отображения через `<slot>` компонентов маршрута , вложив его в компонент `<router-view>`:

```html
<router-view>
  <p>In Vue Router 3, I render inside the route component</p>
</router-view>
```

В связи с введением `v-slot` api для `<router-view>`, необходимо передавать его в `<component>`, используя `v-slot` API:

```html
<router-view v-slot="{ Component }">
  <component :is="Component">
    <p>In Vue Router 3, I render inside the route component</p>
  </component>
</router-view>
```

### Удаление `parent` из местоположений маршрутов %{#removal-of-parent-from-route-locations}%

Свойство `parent` было удалено из нормализованных местоположений маршрутов (`this.$route` и объекта, возвращаемого функцией `router.resolve`). Доступ к нему по-прежнему можно получить через массив `matched`:

```js
const parent = this.$route.matched[this.$route.matched.length - 2]
```

**Причина**: Наличие `parent` и `children` создает ненужные круговые ссылки, в то время как эти свойства могут быть уже получены через `matched`.

### Свойство `pathToRegexpOptions` было удалено %{#removal-of-pathtoregexpoptions}%

Свойства `pathToRegexpOptions` и `caseSensitive` записей маршрутов были заменены на опции `sensitive` и `strict` для `createRouter()`. Теперь они также могут передаваться напрямую при создании маршрутизатора с помощью `createRouter()`. Любые другие опции, специфичные для `path-to-regexp`, были удалены, поскольку `path-to-regexp` больше не используется для парсинга путей.

### Удаление неименованных параметров %{#removal-of-unnamed-parameters}%

В связи с удалением `path-to-regexp`, неименованные параметры больше не поддерживаются:

- `/foo(/foo)?/suffix` становится `/foo/:_(foo)?/suffix`
- `/foo(foo)?` становится `/foo:_(foo)?`
- `/foo/(.*)` становится `/foo/:_(.*)`

:::tip Совет
Обратите внимание, что вместо `_` для параметра можно использовать любое имя. Главное, чтобы оно было одно.
:::

### Использование `history.state` %{#usage-of-history-state}%

Vue Router сохраняет информацию в `history.state`. Если у вас есть код, вручную вызывающий `history.pushState()`, то, скорее всего, вам следует отказаться от него или отрефакторить его с помощью обычного `router.push()` и `history.replaceState()`:

```js
// замените
history.pushState(myState, '', url)
// на это
await router.push(url)
history.replaceState({ ...history.state, ...myState }, '')
```

Аналогично, если вы вызывали `history.replaceState()` без сохранения текущего состояния, то вам нужно будет передать текущее `history.state`:

```js
// замените
history.replaceState({}, '', url)
// на это
history.replaceState(history.state, '', url)
```

**Причина**: Мы используем состояние history для сохранения информации о навигации, такой как позиция прокрутки, предыдущее местоположение и т.д.

### Опция `routes` обязательна в `options` %{#routes-option-is-required-in-options}%

Свойство `routes` теперь обязательно в `options`.

```js
createRouter({ routes: [] })
```

**Причина**: Маршрутизатор предназначен для создания маршрутов, хотя вы можете добавить их позже. В большинстве сценариев требуется хотя бы один маршрут, и в общем случае он пишется один раз для каждого приложения.

### Несуществующие именованные маршруты %{#non-existent-named-routes}%

При push или resolve несуществующего именованного маршрута возникает ошибка:

```js
// Упс, мы допустили опечатку в имени
router.push({ name: 'homee' }) // выбросит ошибку
router.resolve({ name: 'homee' }) // выбросит ошибку
```

**Причина**: Ранее маршрутизатор переходил по адресу `/`, но ничего не отображал (вместо главной страницы). Выброс ошибки имеет смысл, поскольку мы не можем создать корректный URL для перехода.

### Отсутствие обязательных `params` в именованных маршрутах %{#missing-required-params-on-named-routes}%

При push или resolve именованного маршрута без необходимых параметров будет выдана ошибка:

```js
// задан следующий маршрут:
const routes = [{ path: '/users/:id', name: 'user', component: UserDetails }]

// Отсутствие параметра `id` приведет к ошибке
router.push({ name: 'user' })
router.resolve({ name: 'user' })
```

**Причина**: Та же, что и выше.

### Именованные дочерние маршруты с пустым `path` больше не добавляют слэш %{#Named-children-routes-with-an-empty-path-no-longer-appends-a-slash}%

Предположим, у нас есть вложенный именованный маршрут с пустым `path`:

```js
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard-parent',
    component: DashboardParent,
    children: [
      { path: '', name: 'dashboard', component: DashboardDefault },
      {
        path: 'settings',
        name: 'dashboard-settings',
        component: DashboardSettings,
      },
    ],
  },
]
```

При переходе или разрешении на именованный маршрут `dashboard` теперь будет выдаваться URL **без завершающего слэша**:

```js
router.resolve({ name: 'dashboard' }).href // '/dashboard'
```

Это имеет важный побочный эффект в отношении подобных дочерних `redirect` записей:

```js
const routes = [
  {
    path: '/parent',
    component: Parent,
    children: [
      // теперь это будет перенаправление на `/home`, а не на `/parent/home`.
      { path: '', redirect: 'home' },
      { path: 'home', component: Home },
    ],
  },
]
```

Обратите внимание, что это будет работать, если `path` был `/parent/`, так как относительное расположение `home` к `/parent/` действительно `/parent/home`, но относительное расположение `home` к `/parent` - `/home`.

<!-- Learn more about relative links [in the cookbook](../../cookbook/relative-links.md). -->

**Причина**: Это сделано для того, чтобы сделать поведение с слэшем единообразным: по умолчанию все маршруты допускают слэш. Это можно отключить, используя опцию `strict` и вручную добавляя (или не добавляя) слэш к маршрутам.

<!-- TODO: maybe a cookbook entry -->

### Кодировка параметров `$route` %{#-route-properties-Encoding}%

Декодированные значения в `params`, `query` и `hash` теперь совпадают независимо от того, где инициирована навигация (в старых браузерах по-прежнему будут выдаваться некодированные `path` и `fullPath`). Начальная навигация должна давать те же результаты, что и навигация в приложении.

Дано любюе [нормализованное расположение маршрута](/api/interfaces/RouteLocationNormalized.md):

- Значения в `path`, `fullPath` больше не декодируются. Они будут отображаться в том виде, в каком их предоставляет браузер (большинство браузеров предоставляют их в кодированном виде). Например, при прямой записи в адресной строке `https://example.com/hello world` будет получена кодированная версия: `https://example.com/hello%20world`, а `path` и `fullPath` будут иметь вид `/hello%20world`.
- Теперь `hash` декодирован, что позволяет скопировать его: `router.push({ hash: $route.hash })` и использовать напрямую в опции `el` в [scrollBehavior](/api/interfaces/RouterOptions.md#scrollBehavior).
- При использовании `push`, `resolve` и `replace` и указании в объекте местоположения `string` или свойства `path`, **они должны быть закодированы** (как и в предыдущей версии). С другой стороны, `params`, `query` и `hash` должны предоставляться в некодированном виде.
- Теперь символ слэша (`/`) корректно декодируется внутри `params`, при этом в URL сохраняется его кодированная версия: `%2F`.

**Причина**: Это позволяет легко копировать существующие свойства местоположения при вызове `router.push()` и `router.resolve()`, а также сделать результирующее местоположение маршрута согласованным в разных браузерах. `router.push()` теперь является идемпотентным, то есть вызов `router.push(route.fullPath)`, `router.push({ hash: route.hash })`, `router.push({ query: route.query })` и `router.push({ params: route.params })` не будет создавать лишней кодировки.

### Изменения для TypeScript %{#typescript-changes}%

Чтобы сделать типизацию более последовательной и выразительной, некоторые типы были переименованы:

| `vue-router@3` | `vue-router@4`          |
| -------------- | ----------------------- |
| RouteConfig    | RouteRecordRaw          |
| Location       | RouteLocation           |
| Route          | RouteLocationNormalized |

## Новые возможности %{#new-features}%

Среди новых возможностей Vue Router 4 следует отметить следующие:

- [Динамическая маршрутизация](../advanced/dynamic-routing.md)
- [Composition API](../advanced/composition-api.md)
<!-- - Custom History implementation -->
