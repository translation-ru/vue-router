# Именованные представления %{#named-views}%

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-named-views"
  title="Узнайте, как использовать именованные представления"
/>

Иногда вам нужно отображать несколько представлений одновременно, а не вкладывать их друг в друга, например, создавать макет с представлением `sidebar` и `main`. В этом случае именованные представления пригодятся. Вместо одного единственного выхода в вашем представлении, вы можете иметь несколько и дать каждому из них имя. `router-view` без имени будет иметь имя `default`.

```vue-html
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

Представление рендерится с помощью компонента, поэтому для нескольких представлений требуется
несколько компонентов для одного и того же маршрута. Обязательно используйте опцию `components` (с окончанием
**s**):

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // сокращение для LeftSidebar: LeftSidebar
        LeftSidebar,
        // они соответствуют атрибуту `name` на `<router-view>`
        RightSidebar,
      },
    },
  ],
})
```

Рабочее демо этого примера можно найти [здесь](https://codesandbox.io/s/named-views-vue-router-4-examples-rd20l).

## Вложенные именованные представления %{#nested-named-views}%

Можно создавать сложные макеты, используя именованные представления вместе со вложенными. При этом вложенному `router-view` также необходимо присвоить имя. Рассмотрим пример с панелью настроек:

```
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
```

- `Nav` является обычным компонентом
- `UserSettings` - родительский компонент представления
- `UserEmailsSubscriptions`, `UserProfile`, `UserProfilePreview` - вложенные компоненты представления

**Примечание**: _Давайте забудем о том, как должен выглядеть HTML/CSS для представления такого макета, и сосредоточимся на используемых компонентах._

Секция `<template>` для компонента `UserSettings` в приведенном выше макете будет выглядеть примерно так:

```vue-html
<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <NavBar />
  <router-view />
  <router-view name="helper" />
</div>
```

Затем вы можете создать макет, как показано выше, с помощью этой конфигурации маршрута:

```js
{
  path: '/settings',
  // Также можно иметь именованные представления в корне
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```

Рабоче демо этого примера можно найти [здесь](https://codesandbox.io/s/nested-named-views-vue-router-4-examples-re9yl?&initialpath=%2Fsettings%2Femails).
