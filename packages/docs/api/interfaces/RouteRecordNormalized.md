---
editLink: false
---

[Документация API](../index.md) / RouteRecordNormalized

# Интерфейс: RouteRecordNormalized

Нормализованная версия [записи маршрута](../index.md#RouteRecord).

## Иерархия

- **`RouteRecordNormalized`**

  ↳ [`RouteLocationMatched`](RouteLocationMatched.md)

## Свойства

### aliasOf

• **aliasOf**: `undefined` \| [`RouteRecordNormalized`](RouteRecordNormalized.md)

Определяет, является ли данная запись псевдонимом другой записи. Это свойство имеет значение`undefined`, если запись не является псевдонимом.

___

### beforeEnter

• **beforeEnter**: `undefined` \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\>[]

Зарегестрированный хук beforeEnter

___

### children

• **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Дочерние записи маршрутов.

___

### components

• **components**: `undefined` \| ``null`` \| `Record`\<`string`, `RawRouteComponent`\>

Компоненты для отображения при совпадении URL-адреса с этим маршрутом. Можно использовать именованные представления.

___

### enterCallbacks

• **enterCallbacks**: `Record`\<`string`, [`NavigationGuardNextCallback`](../index.md#NavigationGuardNextCallback)[]\>

Registered beforeRouteEnter callbacks passed to `next` or returned in guards

___

### instances

• **instances**: `Record`\<`string`, `undefined` \| ``null`` \| `ComponentPublicInstance`\>

Смонтированные экземпляры компонентов маршрута
Если в записи маршрута имеются экземпляры компонентов, что навигационные хуки beforeRouteUpdate и beforeRouteLeave могут быть вызваны только с последним установленным экземпляром приложения, если на странице существует несколько экземпляров приложений, которые рендерят одно и то же представление. В результате происходит фактическое дублирование содержимого на странице, что, как правило, не должно происходить. Однако это будет работать, если несколько приложений рендерят разные именованные представления.

___

### leaveGuards

• **leaveGuards**: `Set`\<[`NavigationGuard`](NavigationGuard.md)\>

Registered leave guards

___

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Произвольные данные, добавленные к записи.

___

### name

• **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Имя для записи маршрута. Должно быть уникальным.

___

### path

• **path**: `string`

Путь записи. Должен начинаться с `/`, если только запись не является дочерней по отношению к другой.

___

### props

• **props**: `Record`\<`string`, [`_RouteRecordProps`](../index.md#_RouteRecordProps)\>

Позволяет передавать параметры в качестве входных параметров компоненту, отображаемому с помощью `router-view`. Должен быть объектом с теми же ключами, что и `components`, или булевым значением, которое будет применяться к каждому компоненту.

___

### redirect

• **redirect**: `undefined` \| [`RouteRecordRedirectOption`](../index.md#RouteRecordRedirectOption)

Куда перенаправлять, если маршрут точно совпадает. Перенаправление происходит перед любым навигационным хуком и запускает новую навигацию с новым целевым местоположением.

___

### updateGuards

• **updateGuards**: `Set`\<[`NavigationGuard`](NavigationGuard.md)\>

Зарегистрированные хуки обновления
