# Именованные маршруты %{#named-routes}%

<VueSchoolLink
  href="https://vueschool.io/lessons/named-routes"
  title="Узнайте всё об именованных маршрутах"
/>

Параллельно с `path`, вы можете указать `name` для любого маршрута. Это имеет следующие преимущества:

- Нет жестко закодированных URL
- Автоматическое кодирование/декодирование `params`
- Помогает избежать ошибок в URL
- Обход ранжирования пути (например, для отображения a)

```js
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```

Для связи с именованным маршрутом можно передать объект в качестве входного парамета `to` компонента `router-link`:

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

Это точно такой же объект, который используется программно с помощью `router.push()`:

```js
router.push({ name: 'user', params: { username: 'erina' } })
```

В обоих случаях маршрутизатор будет переходить по пути `/user/erina`.

Полный пример можно посмотреть [здесь](https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js).

Каждое имя **должно быть уникальным** для всех маршрутов. Если вы добавите одно и то же имя в несколько маршрутов, маршрутизатор сохранит только последний из них. Подробнее об этом можно прочитать в разделе [Динамическая маршрутизация](../advanced/dynamic-routing.md#Removing-routes).
