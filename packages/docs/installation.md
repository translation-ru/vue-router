# Установка %{#installation}%

<VueMasteryLogoLink></VueMasteryLogoLink>

## Пакетные менеджеры %{#Package-managers}%

Если у вас уже есть проект, использующий менеджер пакетов JavaScript, вы можете установить Vue Router из реестра npm:

::: code-group

```bash [npm]
npm install vue-router@4
```

```bash [yarn]
yarn add vue-router@4
```

```bash [pnpm]
pnpm add vue-router@4
```

:::

Если вы начинаете новый проект, вам может быть удобнее воспользоваться инструментом для создания структуры проекта [create-vue](https://github.com/vuejs/create-vue), который создает проект на основе Vite с возможностью включения Vue Router:

::: code-group

```bash [npm]
npm create vue@latest
```

```bash [yarn]
yarn create vue
```

```bash [pnpm]
pnpm create vue
```

:::

Вам будет предложено ответить на несколько вопросов о том, какой проект вы хотите создать. Если вы решите установить Vue Router, пример приложения также продемонстрирует некоторые из основных возможностей Vue Router.

Проекты, использующие менеджеры пакетов, обычно используют ES-модули для доступа к Vue Router, например, `import { createRouter } from 'vue-router'`.

## Прямое скачивание / CDN %{#direct-download-cdn}%

[https://unpkg.com/vue-router@4](https://unpkg.com/vue-router@4)

<!--email_off-->

[Unpkg.com](https://unpkg.com) предоставляет ссылки на CDN, основанные на npm. Ссылка выше всегда будет указывать на последний релиз на npm. Вы также можете использовать конкретную версию/тег с помощью URL-адресов, например https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js.

<!--/email_off-->

Это предоставит доступ к Vue Router через глобальный объект `VueRouter`, например, `VueRouter.createRouter(...)`.
