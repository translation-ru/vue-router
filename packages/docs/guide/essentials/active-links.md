# Активные ссылки %{#Active-links}%

Часто в приложениях есть компонент навигации, который отображает список компонентов RouterLink. Внутри этого списка мы можем хотеть стилизовать ссылки на текущий активный маршрут по-другому, чем остальные.

Компонент RouterLink добавляет два CSS-класса к активным ссылкам: `router-link-active` и `router-link-exact-active`. Чтобы понять разницу между ними, сначала мы должны рассмотреть, как Vue Router определяет, что ссылка _активна_.

## Когда ссылка считается активной? %{#When-are-links-active}%

Ссылка RouterLink считается **_активной_**, если:

1. Она соответствует той же записи маршрута (т.е. настроенному маршруту), что и текущее расположение.
2. Она имеет те же значения для `params`, что и текущее расположение.

Если вы используете [вложенные маршруты](./nested-routes), то любые ссылки на родительские маршруты также будут считаться активными, если соответствующие `params` совпадают.

Другие свойства маршрута, такие как [`query`](../../api/interfaces/RouteLocationBase.html#query), не учитываются.

Путь не обязательно должен быть полностью совпадать. Например, при использовании [`alias`](./redirect-and-alias#Alias) он все равно будет считаться совпадением, если он разрешается к той же записи маршрута и к тем же `params`.

Если у маршрута есть свойство [`redirect`](./redirect-and-alias#Redirect), он не будет выполняться при проверке, активна ли ссылка.

## Точное совпадение активныx ссылок %{#Exact-active-links}%

**_Точное_** совпадение не включает родительские маршруты.

Допустим, у нас есть следующие маршруты:

```js
const routes = [
  {
    path: '/user/:username',
    component: User,
    children: [
      {
        path: 'role/:roleId',
        component: Role,
      },
    ],
  },
]
```

Теперь рассмотрим эти две ссылки:

```vue-html
<RouterLink to="/user/erina">
  User
</RouterLink>
<RouterLink to="/user/erina/role/admin">
  Role
</RouterLink>
```

Если текущий путь расположения - `/user/erina/role/admin`, то обе эти ссылки будут считаться активными, поэтому класс `router-link-active` будет применен к обеим ссылкам. Но только вторая ссылка будет считаться _точной_, поэтому только у этой второй ссылки будет класс `router-link-exact-active`.

## Настройка классов %{#Configuring-the-classes}%

Компонент RouterLink имеет два свойства, `activeClass` и `exactActiveClass`, которые можно использовать для изменения имен классов, которые применяются:

```vue-html
<RouterLink
  activeClass="border-indigo-500"
  exactActiveClass="border-indigo-700"
  ...
>
```

Имена классов по умолчанию также можно изменить глобально, передав параметры `linkActiveClass` и `linkExactActiveClass` в `createRouter()`:

```js
const router = createRouter({
  linkActiveClass: 'border-indigo-500',
  linkExactActiveClass: 'border-indigo-700',
  // ...
})
```

См. [Расширение RouterLink](../advanced/extending-router-link) для более продвинутых способов настройки с использованием `v-slot` API.
