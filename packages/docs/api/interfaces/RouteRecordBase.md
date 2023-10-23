---
editLink: false
---

[Документация API](../index.md) / \_RouteRecordBase

# Интерфейс: \_RouteRecordBase

Внутренний тип для общих свойств для всех видов [RouteRecordRaw](../index.md#RouteRecordRaw).

## Иерархия

- [`PathParserOptions`](../index.md#PathParserOptions)

  ↳ **`_RouteRecordBase`**

  ↳↳ [`RouteRecordSingleView`](RouteRecordSingleView.md)

  ↳↳ [`RouteRecordSingleViewWithChildren`](RouteRecordSingleViewWithChildren.md)

  ↳↳ [`RouteRecordMultipleViews`](RouteRecordMultipleViews.md)

  ↳↳ [`RouteRecordMultipleViewsWithChildren`](RouteRecordMultipleViewsWithChildren.md)

  ↳↳ [`RouteRecordRedirect`](RouteRecordRedirect.md)

## Свойства

### alias

• `Опционально` **alias**: `string` \| `string`[]

Псевдонимы для записи. Позволяет определять дополнительные пути, которые будут вести себя как копия записи. Позволяет использовать такие сокращения путей, как `/users/:id` и `/u/:id`. Все значения `alias` и `path` должны иметь одинаковые параметры.

___

### beforeEnter

• `Опционально` **beforeEnter**: [`NavigationGuardWithThis`](NavigationGuardWithThis.md)<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)<`undefined`\>[]

Хук beforeEnter, который предназначен только для этой записи. Обратите внимание, что `beforeEnter` не действует если запись имеет свойство `redirect`.

___

### children

• `Опционально` **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Массив дочерних записей маршрутов.

___

### end

• `Опционально` **end**: `boolean`

Должен ли RegExp искать до конца при добавлении к нему `$`.

**`Значение по умолчанию`**

`true`

#### Наследуется от

PathParserOptions.end

___

### meta

• `Опционально` **meta**: [`RouteMeta`](RouteMeta.md)

Произвольные данные, добавленные к записи.

___

### name

• `Опционально` **name**: [`RouteRecordName`](../index.md#RouteRecordName)

Имя для записи маршрута. Должно быть уникальным.

___

### path

• **path**: `string`

Путь записи. Должен начинаться с `/`, если только запись не является дочерней по отношению к другой.

**`Пример`**

```ts
`/users/:id` соответствует `/users/1` а также `/users/posva`.
```

___

### props

• `Опционально` **props**: `_RouteRecordProps` \| `Record`<`string`, `_RouteRecordProps`\>

Позволяет передавать параметры в качестве входных параметров компоненту, отображаемому через `router-view`.

___

### redirect

• `Опционально` **redirect**: `RouteRecordRedirectOption`

Куда перенаправлять, если маршрут напрямую совпадает. Перенаправление происходит перед любым навигационным хуком и запускает новую навигацию с новым целевым местоположением.

___

### sensitive

• `Опционально` **sensitive**: `boolean`

Сделать RegExp регистрозависимым.

**`Значение по умолчанию`**

`false`

#### Наследуется от

PathParserOptions.sensitive

___

### strict

• `Опционально` **strict**: `boolean`

Запрещать или не запрещать слэш в конце строки.

**`Значение по умолчанию`**

`false`

#### Наследуется от

PathParserOptions.strict
