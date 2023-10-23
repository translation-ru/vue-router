---
editLink: false
---

[Документация API](../index.md) / RouteLocationMatched

# Интерфейс: RouteLocationMatched

Нормализованная версия [записи маршрута](../index.md#RouteRecord).

## Иерархия

- [`RouteRecordNormalized`](RouteRecordNormalized.md)

  ↳ **`RouteLocationMatched`**

## Свойства

### aliasOf

• **aliasOf**: `undefined` \| [`RouteRecordNormalized`](RouteRecordNormalized.md)

Определяет, является ли данная запись псевдонимом другой записи. Это свойство имеет значение`undefined`, если запись не является псевдонимом.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[aliasOf](RouteRecordNormalized.md#aliasOf)

___

### beforeEnter

• **beforeEnter**: `undefined` \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)<`undefined`\>[]

Зарегистрированный хук beforeEnter

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[beforeEnter](RouteRecordNormalized.md#beforeEnter)

___

### children

• **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Вложенные записи маршрутов.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[children](RouteRecordNormalized.md#children)

___

### components

• **components**: `undefined` \| ``null`` \| `Record`<`string`, [`RouteComponent`](../index.md#RouteComponent)\>

Компоненты, которые будут отображаться при совпадении URL с данным маршрутом. Позволяет использовать именованные представления.

#### Переопределяет

[RouteRecordNormalized](RouteRecordNormalized.md).[components](RouteRecordNormalized.md#components)

___

### instances

• **instances**: `Record`<`string`, `undefined` \| ``null`` \| `ComponentPublicInstance`\>

Смонтированные экземпляры компонентов маршрута
Если в записи маршрута имеются экземпляры компонентов, что навигационные хуки beforeRouteUpdate и beforeRouteLeave могут быть вызваны только с последним установленным экземпляром приложения, если на странице существует несколько экземпляров приложений, которые рендерят одно и то же представление. В результате происходит фактическое дублирование содержимого на странице, что, как правило, не должно происходить. Однако это будет работать, если несколько приложений рендерят разные именованные представления.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[instances](RouteRecordNormalized.md#instances)

___

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Произвольные данные, прикрепленные к записи маршрута.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[meta](RouteRecordNormalized.md#meta)

___

### name

• **name**: `undefined` \| [`RouteRecordName`](../index.md#RouteRecordName)

Название для записи маршрута. Должно быть уникальным.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[name](RouteRecordNormalized.md#name)

___

### path

• **path**: `string`

Путь записи маршрута. Должен начинаться с `/`, если только запись не является дочерней по отношению к другой записи.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[path](RouteRecordNormalized.md#path)

___

### props

• **props**: `Record`<`string`, `_RouteRecordProps`\>

Позволяет передавать параметры в качестве входных параметров компоненту, отображаемому с помощью `router-view`. Должен быть объектом с теми же ключами, что и `components`, или булевым значением, которое будет применяться к каждому компоненту.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[props](RouteRecordNormalized.md#props)

___

### redirect

• **redirect**: `undefined` \| `RouteRecordRedirectOption`

Куда перенаправлять, если маршрут напрямую совпадает. Перенаправление происходит перед любым навигационным хуком и запускает новую навигацию с новым целевым местоположением.

#### Наследуется от

[RouteRecordNormalized](RouteRecordNormalized.md).[redirect](RouteRecordNormalized.md#redirect)
