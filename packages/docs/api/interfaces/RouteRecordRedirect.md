---
editLink: false
---

[Документация API](../index.md) / RouteRecordRedirect

# Интерфейс: RouteRecordRedirect

Запись маршрута для определения перенаправления. Не может содержать `component` или `components`, так как этот маршрут не рендерится.

## Иерархия

- [`_RouteRecordBase`](RouteRecordBase.md)

  ↳ **`RouteRecordRedirect`**

## Свойства

### alias

• `Опционально` **alias**: `string` \| `string`[]

Псевдонимы для записи. Позволяет определять дополнительные пути, которые будут вести себя как копия записи. Позволяет использовать такие сокращения путей, как `/users/:id` и `/u/:id`. Все значения `alias` и `path` должны иметь одинаковые параметры.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[alias](RouteRecordBase.md#alias)

___

### beforeEnter

• `Опционально` **beforeEnter**: [`NavigationGuardWithThis`](NavigationGuardWithThis.md)<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)<`undefined`\>[]

Хук beforeEnter, который предназначен только для этой записи. Обратите внимание, что `beforeEnter` не действует если запись имеет свойство `redirect`.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[beforeEnter](RouteRecordBase.md#beforeEnter)

___

### children

• `Опционально` **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Массив дочерних записей маршрутов.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[children](RouteRecordBase.md#children)

___

### component

• `Опционально` **component**: `undefined`

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

• `Опционально` **name**: [`RouteRecordName`](../index.md#RouteRecordName)

Имя для записи маршрута. Должно быть уникальным.

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[name](RouteRecordBase.md#name)

___

### path

• **path**: `string`

Путь записи. Должен начинаться с `/`, если только запись не является дочерней по отношению к другой.

**`Example`**

```ts
`/users/:id` matches `/users/1` as well as `/users/posva`.
```

#### Наследуется от

[_RouteRecordBase](RouteRecordBase.md).[path](RouteRecordBase.md#path)

___

### props

• `Опционально` **props**: `undefined`

Позволяет передавать параметры в качестве входных параметров компоненту, отображаемому при помощи `router-view`.

#### Переопределяет

[_RouteRecordBase](RouteRecordBase.md).[props](RouteRecordBase.md#props)

___

### redirect

• **redirect**: `RouteRecordRedirectOption`

Куда перенаправлять, если маршрут напрямую совпадает. Перенаправление происходит перед любым навигационным хуком и запускает новую навигацию с новым целевым местоположением.

#### Переопределяет

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
