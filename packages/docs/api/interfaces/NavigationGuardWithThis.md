---
editLink: false
---

[Документация API](../index.md) / NavigationGuardWithThis

# Интерфейс: NavigationGuardWithThis\<T\>

Навигационный хук с параметром типа для `this`.

**`Смотрите`**

[TypesConfig](TypesConfig.md)

## Параметры типа

| Название |
| :------- |
| `T`      |

## Вызов

### NavigationGuardWithThis

▸ **NavigationGuardWithThis**(`this`, `to`, `from`, `next`): [`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>

#### Параметры

| Название | Тип |
| :------ | :------ |
| `this` | `T` |
| `to` | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md) |
| `from` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |
| `next` | [`NavigationGuardNext`](NavigationGuardNext.md) |

#### Возвращает

[`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>
