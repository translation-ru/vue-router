# Расширение RouterLink %{#extending-routerlink}%

<VueSchoolLink
  href="https://vueschool.io/lessons/extending-router-link-for-external-urls"
  title="Узнайте, как расширить компонент router-link"
/>

Компонент RouterLink предоставляет достаточное количество входных параметров для большинства базовых приложений, но он не пытается охватить каждый возможный случай использования, и вы, вероятно, обнаружите, что в некоторых продвинутых случаях вам потребуется использовать `v-slot`. В большинстве средних и крупных приложений стоит создать один или даже несколько собственных компонентов RouterLink, чтобы повторно использовать их во всем приложении. Некоторые примеры включают в себя ссылки в меню, обработку внешних ссылок, добавление класса для неактивной ссылки (`inactive-class`) и многое другое.

Давайте расширим RouterLink для работы с внешними ссылками и добавим пользовательский `inactive-class` в файл `AppLink.vue`:

::: code-group

```vue [Composition API]
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  // add @ts-ignore if using TypeScript
  ...RouterLink.props,
  inactiveClass: String,
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
```

```vue [Options API]
<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'AppLink',
  inheritAttrs: false,

  props: {
    // добавьте @ts-ignore, если используете TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },

  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
```

:::

Если вы предпочитаете использовать render-функцию или создавать вычисляемые свойства, вы можете воспользоваться `useLink` из [Composition API](./composition-api.md):

```js
import { RouterLink, useLink } from 'vue-router'

export default {
  name: 'AppLink',

  props: {
    // добавьте @ts-ignore, если используете TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },

  setup(props) {
    // `props` содержит `to` и любой другой входной параметр,
    // который может быть передан <router-link>
    const { navigate, href, route, isActive, isExactActive } = useLink(props)

    // ...

    return { isExternalLink }
  },
}
```

На практике вы можете использовать компонент `AppLink` для различных мест приложения. Например, используя [Tailwind CSS](https://tailwindcss.com), вы можете создать компонент `NavLink.vue` со всеми классами:

```vue
<template>
  <AppLink
    v-bind="$attrs"
    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    active-class="border-indigo-500 text-gray-900 focus:border-indigo-700"
    inactive-class="text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
  >
    <slot />
  </AppLink>
</template>
```
