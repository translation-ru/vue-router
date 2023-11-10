import { defineConfig, HeadConfig } from 'vitepress'

// TODO:
// export const META_IMAGE = 'https://router.vuejs.org/social.png'
export const META_IMAGE = null
export const isProduction =
  process.env.NETLIFY && process.env.CONTEXT === 'production'

if (process.env.NETLIFY) {
  console.log('Netlify build', process.env.CONTEXT)
}

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')

const productionHead: HeadConfig[] = [
  // NOTE: removed because there is a bug that makes it load forever
  // [
  //   'script',
  //   {
  //     src: 'https://unpkg.com/thesemetrics@latest',
  //     async: '',
  //     type: 'text/javascript',
  //   },
  // ],
]

export const sharedConfig = defineConfig({
  title: 'Vue Router',
  appearance: 'dark',

  markdown: {
    theme: {
      dark: 'one-dark-pro',
      light: 'github-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

    [
      'meta',
      { name: 'wwads-cn-verify', content: '7e7757b1e12abcb736ab9a754ffb617a' },
    ],

    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    // [
    //   'meta',
    //   {
    //     property: 'twitter:image',
    //     content: META_IMAGE,
    //   },
    // ],

    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'RENJQDQI',
        'data-spa': 'auto',
        defer: '',
      },
    ],

    // Vue School Top banner
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuerouter&type=top',
        // @ts-expect-error: vitepress bug
        async: true,
        type: 'text/javascript',
      },
    ],

    ...(isProduction ? productionHead : []),
  ],

  themeConfig: {
    logo: '/logo.svg',
    outline: [2, 3],

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/posva' },
      {
        icon: 'github',
        link: 'https://github.com/vuejs/router',
      },
      {
        icon: 'discord',
        link: 'https://chat.vuejs.org',
      },
    ],

    footer: {
      copyright: 'Copyright © 2014-present Evan You, Eduardo San Martin Morote',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/vuejs/router/edit/main/packages/docs/:path',
      text: 'Suggest changes',
    },

    algolia: {
      appId: 'JB0G9HZHWZ',
      apiKey: 'fd9b37eca0fa6e7dc989f3e2fd0a03f2',
      indexName: 'vue-router-ru',
      placeholder: 'Поиск по документации',
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск',
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Сбросить запрос',
            resetButtonAriaLabel: 'Сбросить запрос',
            cancelButtonText: 'Отмена',
            cancelButtonAriaLabel: 'Отмена',
          },
          startScreen: {
            recentSearchesTitle: 'История поиска',
            noRecentSearchesText: 'Нет истории поиска',
            saveRecentSearchButtonTitle: 'Добавить в избранное',
            removeRecentSearchButtonTitle: 'Удалить из истории поиска',
            favoriteSearchesTitle: 'Избранное',
            removeFavoriteSearchButtonTitle: 'Удалить из избранного',
          },
          errorScreen: {
            titleText: 'Невозможно получить результаты',
            helpText: 'Возможно, вам нужно проверить сетевое соединение',
          },
          footer: {
            selectText: 'выбор',
            navigateText: 'навигация',
            closeText: 'закрыть',
            searchByText: 'Поставщик поиска',
          },
          noResultsScreen: {
            noResultsText: 'Нет результатов по запросу',
            suggestedQueryText: 'Попробуйте поискать',
            reportMissingResultsText:
              'Как вы считаете, должен ли этот запрос возвращать результаты?',
            reportMissingResultsLinkText: 'Сообщите нам об этом.',
          },
        },
      },
    },

    carbonAds: {
      code: 'CEBICK3I',
      // custom: 'CEBICK3M',
      placement: 'routervuejsorg',
    },
  },
})
