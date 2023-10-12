import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://router.vuejs.org'
export const META_TITLE = 'Vue Router'
export const META_DESCRIPTION = 'Официальный маршрутизатор для Vue.js'

export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern:
        'https://github.com/translation-ru/vue-router/edit/main/packages/docs/:path',
      text: 'Предложить изменения к этой странице',
    },

    outline: {
      label: 'На этой странице',
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },

    nav: [
      // { text: 'Config', link: '/config/' },
      // { text: 'Plugins', link: '/plugins/' },
      {
        text: 'Руководство',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      { text: 'API', link: '/api/', activeMatch: '^/api/' },
      {
        text: 'v4.x',
        items: [{ text: 'v3.x', link: 'https://v3.router.vuejs.org' }],
      },
      {
        text: 'Ссылки',
        items: [
          {
            text: 'Обсуждения',
            link: 'https://github.com/vuejs/router/discussions',
          },
          {
            text: 'Список изменений',
            link: 'https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md',
          },
          {
            text: 'Сертификация по Vue.js',
            link: 'https://certification.vuejs.org/?friend=VUEROUTER',
          },
        ],
      },
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Настройка',
          items: [
            {
              text: 'Вступление',
              link: '/introduction.html',
            },
            {
              text: 'Установка',
              link: '/installation.html',
            },
          ],
        },
        {
          text: 'Основы',
          collapsible: false,
          items: [
            {
              text: 'Начало работы',
              link: '/guide/',
            },
            {
              text: 'Cопоставление динамических маршрутов',
              link: '/guide/essentials/dynamic-matching.html',
            },
            {
              text: 'Синтаксис сопоставления маршрутов',
              link: '/guide/essentials/route-matching-syntax.html',
            },
            {
              text: 'Вложенные маршруты',
              link: '/guide/essentials/nested-routes.html',
            },
            {
              text: 'Программная навигация',
              link: '/guide/essentials/navigation.html',
            },
            {
              text: 'Именованные маршруты',
              link: '/guide/essentials/named-routes.html',
            },
            {
              text: 'Именованные представления',
              link: '/guide/essentials/named-views.html',
            },
            {
              text: 'Перенаправление и псевдонимы',
              link: '/guide/essentials/redirect-and-alias.html',
            },
            {
              text: 'Передача входных параметров компонентам маршрута',
              link: '/guide/essentials/passing-props.html',
            },
            {
              text: 'Режимы History',
              link: '/guide/essentials/history-mode.html',
            },
          ],
        },
        {
          text: 'Продвинутые темы',
          collapsible: false,
          items: [
            {
              text: 'Навигационные хуки',
              link: '/guide/advanced/navigation-guards.html',
            },
            {
              text: 'Мета-данные маршрута',
              link: '/guide/advanced/meta.html',
            },
            {
              text: 'Загрузка данных',
              link: '/guide/advanced/data-fetching.html',
            },
            {
              text: 'Composition API',
              link: '/guide/advanced/composition-api.html',
            },
            {
              text: 'Анимация переходов',
              link: '/guide/advanced/transitions.html',
            },
            {
              text: 'Поведение прокрутки страницы',
              link: '/guide/advanced/scroll-behavior.html',
            },
            {
              text: 'Отложенная загрузка маршрутов',
              link: '/guide/advanced/lazy-loading.html',
            },
            {
              text: 'Типизированные маршруты',
              link: '/guide/advanced/typed-routes.html',
            },
            {
              text: 'Расширение RouterLink',
              link: '/guide/advanced/extending-router-link.html',
            },
            {
              text: 'Сбои при навигации',
              link: '/guide/advanced/navigation-failures.html',
            },
            {
              text: 'Динамическая маршрутизация',
              link: '/guide/advanced/dynamic-routing.html',
            },
          ],
        },
        {
          items: [
            {
              text: 'Миграция с Vue 2',
              link: '/guide/migration/index.html',
            },
          ],
        },
      ],

      '/api/': [
        {
          text: 'packages',
          items: [{ text: 'vue-router', link: '/api/' }],
        },
      ],
    },
  },
}
