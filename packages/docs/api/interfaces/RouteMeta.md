---
editLink: false
---

[Документация API](../index.md) / RouteMeta

# Интерфейс: RouteMeta

Интерфейс для типизации `meta` в записи маршрута.

**`Пример`**

```ts
// typings.d.ts или router.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
  }
}
```

## Иерархия

- `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

  ↳ **`RouteMeta`**
