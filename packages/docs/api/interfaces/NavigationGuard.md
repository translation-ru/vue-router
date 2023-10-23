---
editLink: false
---

[Документация API](../index.md) / NavigationGuard

# Интерфейс: NavigationGuard

Навигационный хук. См. [Навигационные хуки](/guide/advanced/navigation-guards.md).

## Вызов

### NavigationGuard

▸ **NavigationGuard**(`to`, `from`, `next`): `NavigationGuardReturn` \| `Promise`<`NavigationGuardReturn`\>

#### Параметры

| Название | Тип                                                     |
| :------- | :------------------------------------------------------ |
| `to`     | [`RouteLocationNormalized`](RouteLocationNormalized.md) |
| `from`   | [`RouteLocationNormalized`](RouteLocationNormalized.md) |
| `next`   | [`NavigationGuardNext`](NavigationGuardNext.md)         |

#### Возвращает

`NavigationGuardReturn` \| `Promise`<`NavigationGuardReturn`\>
