---
editLink: false
---

[Документация API](../index.md) / NavigationGuardNext

# Интерфейс: NavigationGuardNext

коллбек `next()` передается в навигационные хуки.

## Вызов

### NavigationGuardNext

▸ **NavigationGuardNext**(): `void`

#### Возвращает

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`error`): `void`

#### Параметры

| Название | Тип     |
| :------- | :------ |
| `error`  | `Error` |

#### Возвращает

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`location`): `void`

#### Параметры

| Название | Тип |
| :------ | :------ |
| `location` | `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md) |

#### Возвращает

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`valid`): `void`

#### Параметры

| Название | Тип                      |
| :------- | :----------------------- |
| `valid`  | `undefined` \| `boolean` |

#### Возвращает

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`cb`): `void`

#### Параметры

| Название | Тип |
| :------ | :------ |
| `cb` | [`NavigationGuardNextCallback`](../index.md#NavigationGuardNextCallback) |

#### Возвращает

`void`
