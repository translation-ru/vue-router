---
editLink: false
---

[Документация API](../index.md) / NavigationHookAfter

# Интерфейс: NavigationHookAfter

Навигационный хук срабатывает после завершения навигации.

## Вызов

### NavigationHookAfter

▸ **NavigationHookAfter**(`to`, `from`, `failure?`): `unknown`

#### Параметры

| Название | Тип |
| :------ | :------ |
| `to` | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md) |
| `from` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |
| `failure?` | `void` \| [`NavigationFailure`](NavigationFailure.md) |

#### Возвращает

`unknown`
