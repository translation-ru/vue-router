import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import { ruConfig } from './ru'

export default defineConfig({
  ...sharedConfig,

  locales: {
    en: { label: 'English', lang: 'en-US', link: 'https://router.vuejs.org/' },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: 'https://router.vuejs.org/zh/',
    },
    ko: { label: '한국어', lang: 'ko-KR', link: 'https://router.vuejs.kr/' },
    pt: {
      label: 'Português',
      lang: 'pt-PT',
      link: 'https://vue-router-docs-pt.netlify.app/',
    },
    root: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/',
      ...ruConfig,
    },
  },
})
