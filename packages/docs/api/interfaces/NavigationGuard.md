---
editLink: false
---

[Документация API](../index.md) / NavigationGuard

# Интерфейс: NavigationGuard

Навигационный хук.

## Вызов

### NavigationGuard

▸ **NavigationGuard**(`to`, `from`, `next`): [`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>

#### Параметры

| Название | Тип                                                                               |
| :------- | :-------------------------------------------------------------------------------- |
| `to`     | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)             |
| `from`   | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |
| `next`   | [`NavigationGuardNext`](NavigationGuardNext.md)                                   |

#### Возвращает

[`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>
