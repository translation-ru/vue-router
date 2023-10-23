---
editLink: false
---

[Документация API](../index.md) / NavigationGuardWithThis

# Интерфейс: NavigationGuardWithThis<T\>

Навигационный хук. См. [Навигационные хуки](/guide/advanced/navigation-guards.md).

## Параметры типа

| Название |
| :------- |
| `T`      |

## Вызов

### NavigationGuardWithThis

▸ **NavigationGuardWithThis**(`this`, `to`, `from`, `next`): `NavigationGuardReturn` \| `Promise`<`NavigationGuardReturn`\>

#### Параметры

| Название | Тип                                                     |
| :------- | :------------------------------------------------------ |
| `this`   | `T`                                                     |
| `to`     | [`RouteLocationNormalized`](RouteLocationNormalized.md) |
| `from`   | [`RouteLocationNormalized`](RouteLocationNormalized.md) |
| `next`   | [`NavigationGuardNext`](NavigationGuardNext.md)         |

#### Возвращает

`NavigationGuardReturn` \| `Promise`<`NavigationGuardReturn`\>
