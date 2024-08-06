# ипизированные маршруты <Badge type="tip" text="v4.4.0+" /> %{#typed-routes}%

::: danger
‼️ Эксперементальная функция
:::

![Автозаполнение входного параметра to компонента RouterLink](https://user-images.githubusercontent.com/664177/176442066-c4e7fa31-4f06-4690-a49f-ed0fd880dfca.png)

Можно настроить маршрутизатор так, чтобы у вас была _карта_ типизированных маршрутов. Хотя это можно сделать вручную, рекомендуется использовать плагин [unplugin-vue-router](https://github.com/posva/unplugin-vue-router), чтобы автоматически генерировать маршруты и типы.

## Ручная настройка %{#manual-configuration}

Вот пример того, как вручную настраивать типизированные маршруты:

```ts
// импортируйте тип `RouteRecordInfo` из vue-router для создания маршрутов
import type { RouteRecordInfo } from 'vue-router'

// Определите интерфейс маршрутов
export interface RouteNamedMap {
  // каждый ключ является названием
  home: RouteRecordInfo<
    // тоже самое название
    'home',
    // это путь, он будет отображаться при автозаполнении
    '/',
    // это необработанные параметры. В данном случае не допускаются никакие параметры
    Record<never, never>,
    // это нормализованные параметры
    Record<never, never>
  >
  // повторите для каждого маршрута..
  // Заметьте, вы можете называть их как угодно.
  'named-param': RouteRecordInfo<
    'named-param',
    '/:name',
    { name: string | number }, // необработанное значение
    { name: string } // нормализованное значение
  >
  'article-details': RouteRecordInfo<
    'article-details',
    '/articles/:id+',
    { id: Array<number | string> },
    { id: string[] }
  >
  'not-found': RouteRecordInfo<
    'not-found',
    '/:path(.*)',
    { path: string },
    { path: string }
  >
}

// Наконец, вам нужно будет дополнить типы Vue Router этой картой маршрутов
declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
```

::: tip Совет

Это действительно утомительно и чревато ошибками. Поэтому рекомендуется использовать [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) для автоматической генерации маршрутов и типов.

:::
