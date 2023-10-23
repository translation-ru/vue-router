---
editLink: false
---

[Документация API](../index.md) / RouteLocationNormalizedLoaded

# Интерфейс: RouteLocationNormalizedLoaded

[RouteLocationRaw](../index.md#RouteLocationRaw) with

## Иерархия

- `_RouteLocationBase`

  ↳ **`RouteLocationNormalizedLoaded`**

## Свойства

### fullPath

• **fullPath**: `string`

Полный адрес, включая `search` и `hash`. Эта строка имеет кодирование символом процента.

#### Наследуется от

\_RouteLocationBase.fullPath

___

### hash

• **hash**: `string`

Хэш текущего адреса. Если присутствует, то начинается с символа `#`.

#### Наследуется от

\_RouteLocationBase.hash

___

### matched

• **matched**: [`RouteLocationMatched`](RouteLocationMatched.md)[]

Массив [RouteLocationMatched](RouteLocationMatched.md), содержащий только простые компоненты (все лениво-загруженные компоненты были загружены и заменены внутри объекта `components`), поэтому он может быть напрямую использован для отображения маршрутов. Не может содержать записи перенаправления

___

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Объединенные свойства `meta` всех совпадающих записей маршрута.

#### Наследуется от

\_RouteLocationBase.meta

___

### name

• **name**: `undefined` \| ``null`` \| [`RouteRecordName`](../index.md#RouteRecordName)

Имя совпавшей записи маршрута

#### Наследуется от

\_RouteLocationBase.name

___

### params

• **params**: [`RouteParams`](../index.md#RouteParams)

Объект декодированных параметров, извлеченных из `path`.

#### Наследуется от

\_RouteLocationBase.params

___

### path

• **path**: `string`

Секция pathname URL с кодировкой в виде символа процента.

#### Наследуется от

\_RouteLocationBase.path

___

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Объектное представление свойства `search` текущего адреса.

#### Наследуется от

\_RouteLocationBase.query

___

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocation`](RouteLocation.md)

Содержит маршрут, к которому мы первоначально пытались получить доступ, прежде чем оказаться в текущем местоположении.

#### Наследуется от

\_RouteLocationBase.redirectedFrom
