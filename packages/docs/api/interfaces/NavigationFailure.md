---
editLink: false
---

[Документация API](../index.md) / NavigationFailure

# Интерфейс: NavigationFailure

Расширенная ошибка, содержащая дополнительную информацию о сбое навигации.

## Иерархия

- `Error`

  ↳ **`NavigationFailure`**

## Свойства

### cause

• `Опционально` **cause**: `unknown`

#### Наследуется от

Error.cause

___

### from

• **from**: [`RouteLocationNormalized`](RouteLocationNormalized.md)

Адрес маршрута, от которого начинается переход навигации

___

### message

• **message**: `string`

#### Наследуется от

Error.message

___

### name

• **name**: `string`

#### Наследуется от

Error.name

___

### stack

• `Опционально` **stack**: `string`

#### Наследуется от

Error.stack

___

### to

• **to**: [`RouteLocationNormalized`](RouteLocationNormalized.md)

Адрес маршрута, к которому производится переход навигации

___

### type

• **type**: `NAVIGATION_ABORTED` \| `NAVIGATION_CANCELLED` \| `NAVIGATION_DUPLICATED`

Тип навигации. Один из [NavigationFailureType](../enums/NavigationFailureType.md)
