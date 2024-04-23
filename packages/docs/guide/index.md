# Начало работы %{#getting-started}%

<VueSchoolLink
href="https://vueschool.io/courses/vue-router-4-for-everyone"
title="Узнайте, как создавать мощные одностраничные приложения с помощью Vue Router в Vue School">Смотреть бесплатный видеокурс по Vue Router</VueSchoolLink>

Vue Router - это официальное решение для маршрутизации на стороне клиента для Vue.

Маршрутизация на стороне клиента используется в одностраничных приложениях (SPA), чтобы связать URL браузера с контентом, отображаемым пользователю. При перемещении пользователей по приложению URL соответствующим образом обновляется, но страница не перезагружается с сервера.

Vue Router основан на системе компонентов Vue. Вы настраиваете маршруты, чтобы сообщить Vue Router, какие компоненты отображать для каждого пути URL.

::: tip Требования
Это руководство предполагает, что вы уже знакомы с Vue. Вам не обязательно быть экспертом по Vue, но иногда вам может потребоваться обратиться к [основной документации Vue](https://vuejs.org/) для получения дополнительной информации о некоторых функциях.
:::

## Пример

Чтобы показать некоторые из основных идей, мы рассмотрим этот пример:

- [Песочница с примером на Vue](https://play.vuejs.org/#eNqFVVtv2zYU/itn6gArmC05btEHTXXTFcWyYZeiLfYy7UGWji02EsmRlOPA8H/fIambnaRD4Fg61++c7yN9DJqc8eirDpKANVIoA0coFOYG30kJJ9gq0cBs3+Is412AEq1B1Xmi2L+ObpvX+3IpI5+b8aFqSJ+rjANErcbQp/v3RrTchLMXlDa7CuZBl07YUoONrCl/bQPT6np9i3UtbLPv0phenVm6L3rQRgm+W79vlULeIQaZmypJ484HxyN87xzRtq3rj+SE08mViX2dlOf7vuAnh/I3xu/AiDdZEGfB+mdBz3ArGkzj0f9sRr4hy5D2zr49ykvjvmdqeTmv9RfDe4i7uM6dxsNiaF9+l0+y+Ts2Qj3cMm3oa94Zfd0py4uBzYFPO6Br3ZPaGzpme9rtQGdxg2WUgOC6Y0PDG/jbjnL0vMAsnhEsQcU4UZaMbU/z8zC3x/PYsbcN/ueilaJW03nDoy1Y+VUkT+0nvHI9PVB6PJE8M44HN2iJ27yt+9q09ek+rFR1oZg0RM5FgmvboKlEqRP/BrATX4SDH171JgBD4CIvThXJVldhP7Y7J9DtxP4nxZKk+470cnFQVuseHh2TlTduWmMEh5uiZsUdSXPAcKlOH/hIZmfEjhODRtPaozNKjyiiGcqn75Ej0Pl3lMyHp2fFeMHnEB/SRia+ict6ep/GXBWV1UGHyGtgh5O1K0KvuC8T/duieoi6tLdvYUYg+rXTmKH3jLmeKoW0owLDI7h8IrnvfAKrIargxfQ/lA0LHjmr8w3W3X3w2dVMIGWchoH9ohEl1pFRrCE2fccsgCY/1Mh3piLjaknc+pujr3TOqedk0eSSrg/BiVU3WtY5dBYMks2CkRtrzoLKGKmTOG65vNtFtON4jLh5Fb2MlnFJJ2tijVA3i40S99rdV1ngNmtr31BQXOLeCFHrRS7Zcy0eBd68jl5H13HNNjFVjxkv8eBq94unMY0mQWzZ7mJIKwtWo/pTGkaCORs2p9+Z+1+dzagWB6BFhcXdE/av+uAhf1RI0+1xMpzJFWnOuz98/gMP9Dw4icW2puhvOD+hFnVrMfqwn1peEuxJnEP7i+OM8d0X/eFgkOt+KAt0FLIj8v03Rh/hvoxeTbaozUONOiq0/aGhX6w5aY1xn7cRqkSVwEoegMCyEl4sl8sf3d1H5RhfbATdKk0C10t5cHaZlyWBHSzUJeNUFtaQww/08Tenz65xSzf+NLJaTTuP5UcARVFMACSwpL9VVyE4/QesCg/V)

Давайте начнем с рассмотрения корневого компонента, `App.vue`.

### App.vue

```vue
<template>
  <h1>Hello App!</h1>
  <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
```

Этот шаблон использует два компонента, предоставляемых Vue Router, `RouterLink` и `RouterView`.

Вместо обычных тегов `<a>` мы используем пользовательский компонент `RouterLink` для создания ссылок. Это позволяет Vue Router изменять URL без перезагрузки страницы, обрабатывать генерацию URL, кодирование и различные другие функции. Мы подробнее рассмотрим `RouterLink` в последующих разделах руководства.

Компонент `RouterView` сообщает Vue Router, куда отрисовывать текущий **компонент маршрута**. Это компонент, который соответствует текущему пути URL. Он не обязательно должен быть в `App.vue`, вы можете разместить его в любом месте, чтобы адаптировать к своему макету, но его необходимо обязательно где-то разместить, иначе Vue Router ничего не будет отображать.

В приведенном выше примере также используется <code v-pre>{{ $route.fullPath }}</code>. Вы можете использовать $route в шаблонах своих компонентов, чтобы получить доступ к объекту, представляющему текущий маршрут.

<VueMasteryLogoLink></VueMasteryLogoLink>

### Создание экземпляра маршрутизатора %{#creating-the-router-instance}%

Экземпляр маршрутизатора создается путем вызова функции `createRouter()`:

```js
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
```

Опция `routes` определяет маршруты, сопоставляя пути URL с компонентами. Компонент, указанный опцией `component`, будет отображаться в `<RouterView>` в файле `App.vue` как указано выше в примере. Эти компоненты маршрутов иногда называются _представлениями_, хотя они являются обычными компонентами Vue.

Маршруты поддерживают различные другие опции, которые мы рассмотрим позже, а пока нам нужны только `path` и `component`.

Опция `history` управляет тем, как маршруты отображаются на URL и наоборот. В примере из песочницы мы используем `createMemoryHistory()`, который игнорирует URL браузера полностью и использует собственный внутренний URL. Это подходит для песочницы, но вероятно, это не то, что вам нужно в реальном приложении. Обычно вы хотели бы использовать вместо этого `createWebHistory()` или, возможно, `createWebHashHistory()`. Мы подробно рассмотрим эту тему в руководстве по [Режимам истории](./essentials/history-mode).

### Регистрация плагина маршрутизатора %{#registering-the-router-plugin}%

После создания экземпляра маршрутизатора нам нужно зарегистрировать его как плагин, вызвав `use()` в нашем приложении:

```js
createApp(App).use(router).mount('#app')
```

Или, эквивалентная запись:

```js
const app = createApp(App)
app.use(router)
app.mount('#app')
```

Как и в большинстве плагинов Vue, вызов `use()` должен происходить до вызова `mount()`.

Если вам интересно, что делает этот плагин, то вот некоторые из его обязанностей:

1. [Глобальная регистрация](https://vuejs.org/guide/components/registration.html#global-registration) компонентов `RouterView` и `RouterLink`.
2. Добавление глобальных параметров `$router` и `$route`.
3. Включение composables `useRouter()` и `useRoute()`.
4. Запуск маршрутизатора для разрешения начального маршрута.

### Доступ к маршрутизатору и текущему маршруту %{#accessing-the-router-and-current-route}%

Скорее всего, вы захотите получить доступ к маршрутизатору из другого места в вашем приложении.

Если вы экспортируете экземпляр маршрутизатора из модуля ES, вы можете импортировать его непосредственно туда, где он вам нужен. В некоторых случаях это лучший подход, но у нас есть и другие варианты, если мы находимся внутри компонента.

В шаблонах компонентов экземпляр маршрутизатора доступен через `$router`. Это похоже на свойство `$route`, которое мы видели ранее, но обратите внимание на дополнительное `r` в конце.

Если мы используем Options API, мы можем получить доступ к этим двум свойствам как `this.$router` и `this.$route` в нашем JavaScript-коде. Компонент `HomeView.vue` в примере из песочницы получает доступ к маршрутизатору именно таким образом:

```js
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
```

Этот метод вызывает `push()`, который используется для [программной навигации](./essentials/navigation). Подробнее об этом вы узнаете позже.

При использовании Composition API у нас нет доступа к экземпляру компонента через `this`, поэтому Vue Router включает в себя несколько composables, которые мы можем использовать вместо него. `AboutView.vue` в примере из песочницы использует этот подход:

```vue
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  },
})
</script>
```

Сейчас нет необходимости разбираться во всем этом коде. Главное, что нужно заметить, это то, что composables `useRouter()` и `useRoute()` используются для доступа к экземпляру маршрутизатора и текущему маршруту соответственно.

### Следующие шаги %{#next-steps}%

Если вы хотите увидеть полный пример используя Vite, вы можете воспользоваться инструментом [create-vue](https://github.com/vuejs/create-vue), который имеет возможность включить Vue Router в свой пример проекта:

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

Пример проекта, созданный через create-vue, использует функции, схожие с теми, что мы рассмотрели здесь. Вы можете счесть его полезной отправной точкой для изучения функций, показанных на следующих страницах этого руководства.

## Соглашения в этом руководстве %{#conventions-in-this-guide}%

### Однофайловые компоненты %{#singe-file-components}%

Vue Router чаще всего используется в приложениях, собранных с помощью инструментов сборки (например, Vite) и [SFCs](https://vuejs.org/guide/introduction.html#single-file-components) (т.е. файлов `.vue`). Большинство примеров в этом руководстве будут написаны в этом стиле, но сам Vue Router не требует использования инструментов сборки или SFC.

Например, если вы используете _глобальные сборки_ [Vue](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn) и [Vue Router](../installation#Direct-Download-CDN), библиотеки доступны через глобальные объекты, а не через импорт:

```js
const { createApp } = Vue
const { createRouter, createWebHistory } = VueRouter
```

### Стиль API компонента %{#component-api-style}%

Vue Router можно использовать как с Composition API, так и с Options API. Там, где это уместно, в примерах в этом руководстве будут показаны компоненты, написанные в обоих стилях. В примерах Composition API обычно используется `<script setup>`, а не явная функция `setup`.

Если вам нужно узнать больше об этих двух стилях, смотрите [Vue - Стили API](https://vuejs.org/guide/introduction.html#api-styles).

### `router` и `route` %{#router-and-route}%

На протяжении всего руководства мы будем часто ссылаться на экземпляр маршрутизатора через `router`. Это объект, возвращаемый функцией `createRouter()`. То, как вы получаете доступ к этому объекту в своем приложении, зависит от контекста. Например, в компоненте, использующем Composition API, доступ к нему можно получить, вызвав `useRouter()`. В Options API доступ к нему можно получить с помощью `this.$router`.

Аналогично, текущий маршрут будет доступен как `route`. Доступ к нему в компонентах можно получить с помощью `useRoute()` или `this.$route`, в зависимости от того, какой API использует компонент.

### `RouterView` и `RouterLink` %{#routerview-and-routerlink}%

Компоненты `RouterView` и `RouterLink` являются [глобально зарегистрированными](https://vuejs.org/guide/components/registration.html#global-registration), поэтому их не нужно импортировать перед использованием в шаблонах компонентов. Однако, если вы предпочитаете, вы можете импортировать их локально, например, `import { RouterLink } from 'vue-router'`.

В шаблонах имена компонентов могут быть написаны как в PascalCase, так и в kebab-case. Компилятор шаблонов Vue поддерживает любой из этих форматов, поэтому `<RouterView>` и `<router-view>` обычно эквивалентны. Вам следует придерживаться того соглашения, которая используется в вашем проекте.

Если вы используете шаблоны в DOM дереве, то применяются [обычные предостережения](https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats): имена компонентов должны быть написаны в kebab-case, а самозакрывающиеся теги не поддерживаются. Поэтому вместо того, чтобы писать `<RouterView />`, вам нужно будет использовать `<router-view></router-view>`.
