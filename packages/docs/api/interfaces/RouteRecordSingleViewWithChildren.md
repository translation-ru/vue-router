---
editLink: false
---

[Документация API](../index.md) / RouteRecordSingleViewWithChildren

# Интерфейс: RouteRecordSingleViewWithChildren

Запись маршрута, определяющая один единственный компонент с вложенным представлением.

## Иерархия

- [`_RouteRecordBase`](RouteRecordBase.md)

  ↳ **`RouteRecordSingleViewWithChildren`**

## Свойства

### alias

• `Опционально` **alias**: `string` \| `string`[]

Псевдонимы для записи. Позволяет определять дополнительные пути, которые будут вести себя как копия записи. Позволяет использовать такие сокращения путей, как `/users/:id` и `/u/:id`. Все значения `alias` и `path` должны иметь одинаковые параметры.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[alias](RouteRecordBase.md#alias)

___

### beforeEnter

• `Опционально` **beforeEnter**: [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\>[]

Хук beforeEnter, который предназначен только для этой записи. Обратите внимание, что `beforeEnter` не действует если запись имеет свойство `redirect`.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[beforeEnter](RouteRecordBase.md#beforeEnter)

___

### children

• **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Массив дочерних записей маршрутов.

#### Переопределяет

[_RouteRecordBase](RouteRecordBase.md).[children](RouteRecordBase.md#children)

___

### component

• `Опционально` **component**: ``null`` \| `RawRouteComponent`

Компонент, который будет отображаться при совпадении URL с данным маршрутом.

___

### components

• `Опционально` **components**: `undefined`

___

### end

• `Опционально` **end**: `boolean`

Должен ли RegExp искать до конца при добавлении к нему `$`.

**`Значение по умолчанию`**

`true`

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[end](RouteRecordBase.md#end)

___

### meta

• `Опционально` **meta**: [`RouteMeta`](RouteMeta.md)

Произвольные данные, добавленные к записи.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[meta](RouteRecordBase.md#meta)

___

### name

• `Опционально` **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Имя для записи маршрута. Должно быть уникальным.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[name](RouteRecordBase.md#name)

___

### path

• **path**: `string`

Путь записи. Должен начинаться с `/`, если только запись не является дочерней по отношению к другой.

**`Пример`**

```ts
`/users/:id` matches `/users/1` as well as `/users/posva`.
```

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[path](RouteRecordBase.md#path)

___

### props

• `Опционально` **props**: [`_RouteRecordProps`](../index.md#_RouteRecordProps)

Позволяет передавать параметры в качестве входных параметров компоненту, отображаемому через `router-view`.

#### Переопределяет

[_RouteRecordBase](RouteRecordBase.md).[props](RouteRecordBase.md#props)

___

### redirect

• `Опционально` **redirect**: [`RouteRecordRedirectOption`](../index.md#RouteRecordRedirectOption)

Куда перенаправлять, если маршрут напрямую совпадает. Перенаправление происходит перед любым навигационным хуком и запускает новую навигацию с новым целевым местоположением.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[redirect](RouteRecordBase.md#redirect)

___

### sensitive

• `Опционально` **sensitive**: `boolean`

Сделать RegExp регистрозависимым.

**`Значение по умолчанию`**

`false`

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[sensitive](RouteRecordBase.md#sensitive)

___

### strict

• `Опционально` **strict**: `boolean`

Запрещать или не запрещать слэш в конце строки.

**`Значение по умолчанию`**

`false`

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[strict](RouteRecordBase.md#strict)
