# Именованные маршруты %{#named-routes}%

<VueSchoolLink
  href="https://vueschool.io/lessons/named-routes"
  title="Узнайте всё об именованных маршрутах"
/>

При создании маршрута вы можете опционально задать ему `name`:

```js
const routes = [
  {
    path: '/user/:username',
    name: 'profile', // [!code highlight]
    component: User
  },
]
```

При таком подходе можно использовать `name` вместо `path` при передаче параметра `to` в `<router-link>`:

```vue-html
<router-link :to="{ name: 'profile', params: { username: 'erina' } }">
  User profile
</router-link>
```

В приведенном выше примере будет создана ссылка на `/user/erina`.

- [Посмотреть в песочнице](https://play.vuejs.org/#eNqtVVtP2zAU/itWNqlFauNNIB6iUMEQEps0NjH2tOzBtKY1JLZlO6VTlP++4+PcelnFwyRofe7fubaKCiZk/GyjJBKFVsaRiswNZ45faU1q8mRUQUbrko8yuaPwlRfK/LkV1sHXpGHeq9JxMzScGmT19t5xkMaUaR1vOb9VBe+kntgWXz2Cs06O1LbCTwvRW7knGnEm50paRwIYcrEFd1xlkpBVyCQ5lN74ZOJV0Nom5JcnCFRCM7dKyIiOJkSygsNzBZiBmivAI7l0SUipRvuhCfPge7uWHBiGZPctS0iLJv7T2/YutFFPIt+JjgUJPn7DZ32CtWg7PIZ/4BASg7txKE6gC1VKNx69gw6NTqJJ1HQK5iR1vNA52M+8Yrr6OLuD+AuCtbQpBQYK9Oy6NAZAhLI1KKuKvEc69jSp65Tqw/oh3V7f00P9MsdveOWiecE75DDNhXwhiVMXWVRttYbUWdRpE2xOZ0sHxq1v2jl/a5jQyZ042Mv/HKjvt2aGFTCXFWmnAsTcCMkAxw4SHIjG9E2AUtpUusWyFvyVUGCltBsFmJB2W/dHZCHWswdYLwJ/XiulnrNr323zcQeodthDuAHTgmm4aEqCH1zsrBHYLIISheyyqD9Nnp1FK+e0TSgtpX5ZxrBBtNe4PItP4w8Q07oBN+a2mD4a9erPzDN4bzY1iy5BiS742imV2ynT4l8h9hQvz+Pz+COU/pGCdyrkgm/Qt3ddw/5Cms7CLXsSy50k/dJDT8037QTcuq1kWZ6r1y/Ic6bkHdD5is9fDvCf7SZA/m44ZLfmg+QcM0vugvjmxx3fwLsTFmpRwlwdE95zq/LSYwxqn0q5ANgDPUT7GXsm5PLB3mwcl7ZNygPFaqA+NvL6SOo93NP4bFDF9sfh+LThtgxvkF80fyxxy/Ac7U9i/RcYNWrd).

Использование `name` имеет определенные преимущества:

- Никаких жестко заданных URL-адресов.
- Автоматическое кодирование `params`.
- Избегание опечаток в URL.
- Обход ранжирования путей, например, для отображения маршрута с более низким приоритетом, который соответствует тому же пути.

Каждое имя **должно быть уникальным** для всех маршрутов. Если вы добавите одно и то же имя в несколько маршрутов, маршрутизатор сохранит только последний из них. Подробнее об этом можно прочитать [в разделе Динамическая маршрутизация](../advanced/dynamic-routing#removing-routes).

Есть и другие части Vue Router, которым можно передать описание пути, например, методы `router.push()` и `router.replace()`. Более подробно мы рассмотрим эти методы в руководстве по [программной навигации](./navigation). Как и входной параметр `to`, эти методы также поддерживают передачу местоположения при помощи `name`:

```js
router.push({ name: 'profile', params: { username: 'erina' } })
```
