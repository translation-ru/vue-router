---
editLink: false
---

[Документация API](../index.md) / RouterLinkProps

# Интерфейс: RouterLinkProps

## Иерархия

- `RouterLinkOptions`

  ↳ **`RouterLinkProps`**

## Свойства

### activeClass

• `Опционально` **activeClass**: `string`

Класс, который добавляется, если ссылка активна

___

### ariaCurrentValue

• `Опционально` **ariaCurrentValue**: ``"time"`` \| ``"location"`` \| ``"page"`` \| ``"step"`` \| ``"date"`` \| ``"true"`` \| ``"false"``

Значение, передаваемое атрибуту `aria-current`, когда ссылка активна "по точному совпадению".

**`Значение по умолчанию`**

`'page'`

___

### custom

• `Опционально` **custom**: `boolean`

Должен ли RouterLink не оборачивать свое содержимое в тег `a`. Полезно при использовании `v-slot` для создания пользовательского RouterLink

___

### exactActiveClass

• `Опционально` **exactActiveClass**: `string`

Класс, который добавляется, если ссылка активна "по точному совпадению"

___

### replace

• `Опционально` **replace**: `boolean`

Вызывать `router.replace` вместо `router.push`.

#### Наследуется от

RouterLinkOptions.replace

___

### to

• **to**: `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

Описания маршрута с указанием куда должна переходить ссылка при нажатии на нее.

#### Наследуется от

RouterLinkOptions.to
