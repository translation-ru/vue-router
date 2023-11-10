# Начало работы %{#getting-started}%

<VueSchoolLink
href="https://vueschool.io/courses/vue-router-4-for-everyone"
title="Узнайте, как создавать мощные одностраничные приложения с помощью Vue Router в Vue School">Смотреть бесплатный видеокурс по Vue Router</VueSchoolLink>

Создание одностраничного приложения с помощью Vue + Vue Router происходит естественным образом: с Vue.js мы уже компонуем наше приложение с помощью компонентов. При добавлении Vue Router в процесс нам всего лишь нужно сопоставить наши компоненты с маршрутами и дать знать Vue Router, где их рендерить. Вот базовый пример:

## HTML %{#html}%

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- используйте компонент router-link для навигации. -->
    <!-- укажите ссылку, передавая входной параметр `to`. -->
    <!-- `<router-link>` создаст тег `<a>` с правильным атрибутом `href` -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- компонент, соответствующий маршруту, будет отображаться здесь -->
  <router-view></router-view>
</div>
```

### `router-link` %{#router-link}%

Обратите внимание, что вместо обычных тегов `a` мы используем компонент `router-link` для создания ссылок. Это позволяет Vue Router изменять URL без перезагрузки страницы, обрабатывать генерацию URL и его кодирование. Мы увидим позже, как воспользоваться этими функциями.

### `router-view` %{#router-view}%

`router-view` отобразит компонент, соответствующий URL. Вы можете поместить его в любое место, чтобы адаптировать к своей верстке.

<VueMasteryLogoLink></VueMasteryLogoLink>

## JavaScript %{#javascript}%

```js
// 1. Определите компоненты маршрута.
// Они могут быть импортированы из других файлов
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Определите какие-нибудь маршруты
// Каждый маршрут должен быть связан с компонентом.
// О вложенных маршрутах мы поговорим позже.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Создайте экземпляр маршрутизатора и передайте ему опцию `routes`
// Здесь можно передать дополнительные опции, но давайте
// пока оставим все так.
const router = VueRouter.createRouter({
  // 4. Предоставьте реализацию history для использования. Для простоты мы используем hash.
  history: VueRouter.createWebHashHistory(),
  routes, // сокращение от `routes: routes`
})

// 5. Создайте и смонтируйте корневой экземпляр.
const app = Vue.createApp({})
// Обязательно _используйте_ экземпляр маршрутизатора, чтобы
// позволить приложению знать о его наличии.
app.use(router)

app.mount('#app')

// Теперь приложение запущено!
```

Вызывая `app.use(router)`, мы запускаем начальную навигацию и предоставляем доступ к `this.$router`, а также текущему маршруту в виде `this.$route` внутри любого компонента:

```js
// Home.vue
export default {
  computed: {
    username() {
      // Скоро мы увидим, что такое `params`
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
```

Чтобы получить доступ к маршрутизатору или маршруту внутри функции `setup`, вызовите функцию `useRouter` или `useRoute`. Мы узнаем об этом подробнее в разделе про [Composition API](./advanced/composition-api.md#Accessing-the-Router-and-current-Route-inside-setup).

На протяжении всей документации мы часто будем использовать экземпляр `router`. Имейте в виду, что `this.$router` это тоже самое, что и прямое использование экземпляра `router`, созданного через `createRouter`. Причина использования `this.$router` заключается в том, что мы не хотим импортировать маршрутизатор в каждом компоненте, который должен управлять маршрутизацией.
