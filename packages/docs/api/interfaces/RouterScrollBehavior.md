---
editLink: false
---

[Документация API](../index.md) / RouterScrollBehavior

# Интерфейс: RouterScrollBehavior

Тип опции `scrollBehavior`, которая может быть передана в `createRouter`.

## Вызов

### RouterScrollBehavior

▸ **RouterScrollBehavior**(`to`, `from`, `savedPosition`): `Awaitable`\<``false`` \| `void` \| `ScrollPosition`\>

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `to` | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md) | Описание маршрута, откуда производился переход |
| `from` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) | Описание маршрута, куда был произведен переход |
| `savedPosition` | ``null`` \| `_ScrollPositionNormalized` | сохраненная позиция, если она существует, `null` в противном случае |

#### Возвращает

`Awaitable`\<``false`` \| `void` \| `ScrollPosition`\>
