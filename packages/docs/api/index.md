---
editLink: false
---

Документация API

# Документация API

## Перечисления

- [ErrorTypes](enums/ErrorTypes.md)
- [NavigationFailureType](enums/NavigationFailureType.md)

## Интерфейсы

- [HistoryState](interfaces/HistoryState.md)
- [LocationAsRelativeRaw](interfaces/LocationAsRelativeRaw.md)
- [MatcherLocation](interfaces/MatcherLocation.md)
- [MatcherLocationAsPath](interfaces/MatcherLocationAsPath.md)
- [NavigationFailure](interfaces/NavigationFailure.md)
- [NavigationGuard](interfaces/NavigationGuard.md)
- [NavigationGuardNext](interfaces/NavigationGuardNext.md)
- [NavigationGuardWithThis](interfaces/NavigationGuardWithThis.md)
- [NavigationHookAfter](interfaces/NavigationHookAfter.md)
- [NavigationRedirectError](interfaces/NavigationRedirectError.md)
- [RouteLocationAsPathGeneric](interfaces/RouteLocationAsPathGeneric.md)
- [RouteLocationAsPathTyped](interfaces/RouteLocationAsPathTyped.md)
- [RouteLocationAsRelativeGeneric](interfaces/RouteLocationAsRelativeGeneric.md)
- [RouteLocationAsRelativeTyped](interfaces/RouteLocationAsRelativeTyped.md)
- [RouteLocationGeneric](interfaces/RouteLocationGeneric.md)
- [RouteLocationMatched](interfaces/RouteLocationMatched.md)
- [RouteLocationNamedRaw](interfaces/RouteLocationNamedRaw.md)
- [RouteLocationNormalizedGeneric](interfaces/RouteLocationNormalizedGeneric.md)
- [RouteLocationNormalizedLoadedGeneric](interfaces/RouteLocationNormalizedLoadedGeneric.md)
- [RouteLocationNormalizedLoadedTyped](interfaces/RouteLocationNormalizedLoadedTyped.md)
- [RouteLocationNormalizedTyped](interfaces/RouteLocationNormalizedTyped.md)
- [RouteLocationOptions](interfaces/RouteLocationOptions.md)
- [RouteLocationPathRaw](interfaces/RouteLocationPathRaw.md)
- [RouteLocationResolvedGeneric](interfaces/RouteLocationResolvedGeneric.md)
- [RouteLocationResolvedTyped](interfaces/RouteLocationResolvedTyped.md)
- [RouteLocationTyped](interfaces/RouteLocationTyped.md)
- [RouteMeta](interfaces/RouteMeta.md)
- [RouteQueryAndHash](interfaces/RouteQueryAndHash.md)
- [RouteRecordInfo](interfaces/RouteRecordInfo.md)
- [RouteRecordMultipleViews](interfaces/RouteRecordMultipleViews.md)
- [RouteRecordMultipleViewsWithChildren](interfaces/RouteRecordMultipleViewsWithChildren.md)
- [RouteRecordNormalized](interfaces/RouteRecordNormalized.md)
- [RouteRecordRedirect](interfaces/RouteRecordRedirect.md)
- [RouteRecordSingleView](interfaces/RouteRecordSingleView.md)
- [RouteRecordSingleViewWithChildren](interfaces/RouteRecordSingleViewWithChildren.md)
- [Router](interfaces/Router.md)
- [RouterHistory](interfaces/RouterHistory.md)
- [RouterLinkProps](interfaces/RouterLinkProps.md)
- [RouterMatcher](interfaces/RouterMatcher.md)
- [RouterOptions](interfaces/RouterOptions.md)
- [RouterScrollBehavior](interfaces/RouterScrollBehavior.md)
- [RouterViewProps](interfaces/RouterViewProps.md)
- [TypesConfig](interfaces/TypesConfig.md)
- [UseLinkOptions](interfaces/UseLinkOptions.md)
- [UseLinkReturn](interfaces/UseLinkReturn.md)
- [\_PathParserOptions](interfaces/PathParserOptions.md)
- [\_RouteLocationBase](interfaces/RouteLocationBase.md)
- [\_RouteRecordBase](interfaces/RouteRecordBase.md)
- [\_RouterLinkI](interfaces/RouterLinkI.md)

## Псевдонимы типов

### LocationQuery

Ƭ **LocationQuery**: `Record`\<`string`, [`LocationQueryValue`](index.md#LocationQueryValue) \| [`LocationQueryValue`](index.md#LocationQueryValue)[]\>

Нормализованный объект query, который присутствует в [RouteLocationNormalized](index.md#RouteLocationNormalized)

___

### LocationQueryRaw

Ƭ **LocationQueryRaw**: `Record`\<`string` \| `number`, [`LocationQueryValueRaw`](index.md#LocationQueryValueRaw) \| [`LocationQueryValueRaw`](index.md#LocationQueryValueRaw)[]\>

Loose [LocationQuery](index.md#LocationQuery) object that can be passed to functions like
[Router.push](interfaces/Router.md#push) and [Router.replace](interfaces/Router.md#replace) or anywhere when creating a
[RouteLocationRaw](index.md#RouteLocationRaw)

___

### LocationQueryValue

Ƭ **LocationQueryValue**: `string` \| ``null``

Possible values in normalized [LocationQuery](index.md#LocationQuery). `null` renders the query
param but without an `=`.

**`Пример`**

```
?isNull&isEmpty=&other=other
gives
`{ isNull: null, isEmpty: '', other: 'other' }`.
```

___

### LocationQueryValueRaw

Ƭ **LocationQueryValueRaw**: [`LocationQueryValue`](index.md#LocationQueryValue) \| `number` \| `undefined`

Possible values when defining a query.

___

### NavigationGuardNextCallback

Ƭ **NavigationGuardNextCallback**: (`vm`: `ComponentPublicInstance`) => `unknown`

Callback that can be passed to `next()` in `beforeRouteEnter()` guards.

#### Type declaration

▸ (`vm`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `vm` | `ComponentPublicInstance` |

##### Returns

`unknown`

___

### NavigationGuardReturn

Ƭ **NavigationGuardReturn**: `void` \| `Error` \| `boolean` \| [`RouteLocationRaw`](index.md#RouteLocationRaw)

Return types for a Navigation Guard. Based on `TypesConfig`

**`See`**

[TypesConfig](interfaces/TypesConfig.md)

___

### ParamValue

Ƭ **ParamValue**\<`isRaw`\>: ``true`` extends `isRaw` ? `string` \| `number` : `string`

Utility type for raw and non raw params like :id

#### Type parameters

| Name | Type |
| :------ | :------ |
| `isRaw` | extends `boolean` |

___

### ParamValueOneOrMore

Ƭ **ParamValueOneOrMore**\<`isRaw`\>: [[`ParamValue`](index.md#ParamValue)\<`isRaw`\>, ...ParamValue\<isRaw\>[]]

Utility type for raw and non raw params like :id+

#### Type parameters

| Name | Type |
| :------ | :------ |
| `isRaw` | extends `boolean` |

___

### ParamValueZeroOrMore

Ƭ **ParamValueZeroOrMore**\<`isRaw`\>: ``true`` extends `isRaw` ? [`ParamValue`](index.md#ParamValue)\<`isRaw`\>[] \| `undefined` \| ``null`` : [`ParamValue`](index.md#ParamValue)\<`isRaw`\>[] \| `undefined`

Utility type for raw and non raw params like :id*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `isRaw` | extends `boolean` |

___

### ParamValueZeroOrOne

Ƭ **ParamValueZeroOrOne**\<`isRaw`\>: ``true`` extends `isRaw` ? `string` \| `number` \| ``null`` \| `undefined` : `string`

Utility type for raw and non raw params like :id?

#### Type parameters

| Name | Type |
| :------ | :------ |
| `isRaw` | extends `boolean` |

___

### PathParserOptions

Ƭ **PathParserOptions**: `Pick`\<[`_PathParserOptions`](interfaces/PathParserOptions.md), ``"end"`` \| ``"sensitive"`` \| ``"strict"``\>

___

### RouteComponent

Ƭ **RouteComponent**: `Component` \| `DefineComponent`

Разрешенный компонент в [RouteLocationMatched](interfaces/RouteLocationMatched.md)

___

### RouteLocation

Ƭ **RouteLocation**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationGeneric`](interfaces/RouteLocationGeneric.md) : [`RouteLocationTypedList`](index.md#RouteLocationTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

[RouteLocationRaw](index.md#RouteLocationRaw) resolved using the matcher

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationAsPath

Ƭ **RouteLocationAsPath**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationAsPathGeneric`](interfaces/RouteLocationAsPathGeneric.md) : [`RouteLocationAsPathTypedList`](index.md#RouteLocationAsPathTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Route location as an object with a `path` property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationAsPathTypedList

Ƭ **RouteLocationAsPathTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationAsPathTyped\<RouteMap, N\> }

List of all possible [RouteLocationAsPath](index.md#RouteLocationAsPath) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteLocationAsRelative

Ƭ **RouteLocationAsRelative**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationAsRelativeGeneric`](interfaces/RouteLocationAsRelativeGeneric.md) : [`RouteLocationAsRelativeTypedList`](index.md#RouteLocationAsRelativeTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Route location relative to the current location. It accepts other properties than `path` like `params`, `query` and
`hash` to conveniently change them.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationAsRelativeTypedList

Ƭ **RouteLocationAsRelativeTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationAsRelativeTyped\<RouteMap, N\> }

List of all possible [RouteLocationAsRelative](index.md#RouteLocationAsRelative) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteLocationAsString

Ƭ **RouteLocationAsString**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? `string` : `_LiteralUnion`\<[`RouteLocationAsStringTypedList`](index.md#RouteLocationAsStringTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`], `string`\>

Same as [RouteLocationAsPath](index.md#RouteLocationAsPath) but as a string literal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationAsStringTyped

Ƭ **RouteLocationAsStringTyped**\<`RouteMap`, `Name`\>: `RouteMap`[`Name`][``"path"``]

Helper to generate a type safe version of the [RouteLocationAsString](index.md#RouteLocationAsString) type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |
| `Name` | extends keyof `RouteMap` = keyof `RouteMap` |

___

### RouteLocationAsStringTypedList

Ƭ **RouteLocationAsStringTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationAsStringTyped\<RouteMap, N\> }

List of all possible [RouteLocationAsString](index.md#RouteLocationAsString) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteLocationNormalized

Ƭ **RouteLocationNormalized**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationNormalizedGeneric`](interfaces/RouteLocationNormalizedGeneric.md) : [`RouteLocationNormalizedTypedList`](index.md#RouteLocationNormalizedTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Similar to [RouteLocation](index.md#RouteLocation) but its
[`matched` property](interfaces/RouteLocationNormalizedTyped.md#matched) cannot contain redirect records

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationNormalizedLoaded

Ƭ **RouteLocationNormalizedLoaded**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md) : [`RouteLocationNormalizedLoadedTypedList`](index.md#RouteLocationNormalizedLoadedTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Similar to [RouteLocationNormalized](index.md#RouteLocationNormalized) but its `components` do not contain any function to lazy load components.
In other words, it's ready to be rendered by `<RouterView>`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationNormalizedLoadedTypedList

Ƭ **RouteLocationNormalizedLoadedTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationNormalizedLoadedTyped\<RouteMap, N\> }

List of all possible [RouteLocationNormalizedLoaded](index.md#RouteLocationNormalizedLoaded) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteLocationNormalizedTypedList

Ƭ **RouteLocationNormalizedTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationNormalizedTyped\<RouteMap, N\> }

List of all possible [RouteLocationNormalized](index.md#RouteLocationNormalized) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteLocationRaw

Ƭ **RouteLocationRaw**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationAsString`](index.md#RouteLocationAsString) \| [`RouteLocationAsRelativeGeneric`](interfaces/RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](interfaces/RouteLocationAsPathGeneric.md) : `_LiteralUnion`\<[`RouteLocationAsStringTypedList`](index.md#RouteLocationAsStringTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`], `string`\> \| [`RouteLocationAsRelativeTypedList`](index.md#RouteLocationAsRelativeTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`] \| [`RouteLocationAsPathTypedList`](index.md#RouteLocationAsPathTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Route location that can be passed to `router.push()` and other user-facing APIs.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationResolved

Ƭ **RouteLocationResolved**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationResolvedGeneric`](interfaces/RouteLocationResolvedGeneric.md) : [`RouteLocationResolvedTypedList`](index.md#RouteLocationResolvedTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Route location resolved with [`router.resolve()`](interfaces/Router.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteLocationResolvedTypedList

Ƭ **RouteLocationResolvedTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationResolvedTyped\<RouteMap, N\> }

List of all possible [RouteLocationResolved](index.md#RouteLocationResolved) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteLocationTypedList

Ƭ **RouteLocationTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationTyped\<RouteMap, N\> }

List of all possible [RouteLocation](index.md#RouteLocation) indexed by the route name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

___

### RouteMap

Ƭ **RouteMap**: [`TypesConfig`](interfaces/TypesConfig.md) extends `Record`\<``"RouteNamedMap"``, infer RouteNamedMap\> ? `RouteNamedMap` : [`RouteMapGeneric`](index.md#RouteMapGeneric)

Convenience type to get the typed RouteMap or a generic one if not provided. It is extracted from the [TypesConfig](interfaces/TypesConfig.md) if it exists, it becomes [RouteMapGeneric](index.md#RouteMapGeneric) otherwise.

___

### RouteMapGeneric

Ƭ **RouteMapGeneric**: `Record`\<`string` \| `symbol`, [`RouteRecordInfo`](interfaces/RouteRecordInfo.md)\>

Generic version of the `RouteMap`.

___

### RouteParamValue

Ƭ **RouteParamValue**: `string`

___

### RouteParamValueRaw

Ƭ **RouteParamValueRaw**: [`RouteParamValue`](index.md#RouteParamValue) \| `number` \| ``null`` \| `undefined`

___

### RouteParams

Ƭ **RouteParams**\<`Name`\>: [`RouteMap`](index.md#RouteMap)[`Name`][``"params"``]

Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.

**`See`**

[RouteParamsGeneric](index.md#RouteParamsGeneric)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteParamsGeneric

Ƭ **RouteParamsGeneric**: `Record`\<`string`, [`RouteParamValue`](index.md#RouteParamValue) \| [`RouteParamValue`](index.md#RouteParamValue)[]\>

___

### RouteParamsRaw

Ƭ **RouteParamsRaw**\<`Name`\>: [`RouteMap`](index.md#RouteMap)[`Name`][``"paramsRaw"``]

Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.

**`See`**

[RouteParamsRaw](index.md#RouteParamsRaw)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

___

### RouteParamsRawGeneric

Ƭ **RouteParamsRawGeneric**: `Record`\<`string`, [`RouteParamValueRaw`](index.md#RouteParamValueRaw) \| `Exclude`\<[`RouteParamValueRaw`](index.md#RouteParamValueRaw), ``null`` \| `undefined`\>[]\>

___

### RouteRecord

Ƭ **RouteRecord**: [`RouteRecordNormalized`](interfaces/RouteRecordNormalized.md)

Нормализованная версия [записи маршрута](index.md#RouteRecord).

___

### RouteRecordName

Ƭ **RouteRecordName**: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteRecordNameGeneric`](index.md#RouteRecordNameGeneric) : keyof [`RouteMap`](index.md#RouteMap)

Возможные значения имени записи маршрута **после нормализации**

NOTE: since `RouteRecordName` is a type, it evaluates too early and it's often the generic version [RouteRecordNameGeneric](index.md#RouteRecordNameGeneric). If you need a typed version of all of the names of routes, use [`keyof RouteMap`](index.md#RouteMap)

___

### RouteRecordNameGeneric

Ƭ **RouteRecordNameGeneric**: `string` \| `symbol` \| `undefined`

Generic version of [RouteRecordName](index.md#RouteRecordName).

___

### RouteRecordRaw

Ƭ **RouteRecordRaw**: [`RouteRecordSingleView`](interfaces/RouteRecordSingleView.md) \| [`RouteRecordSingleViewWithChildren`](interfaces/RouteRecordSingleViewWithChildren.md) \| [`RouteRecordMultipleViews`](interfaces/RouteRecordMultipleViews.md) \| [`RouteRecordMultipleViewsWithChildren`](interfaces/RouteRecordMultipleViewsWithChildren.md) \| [`RouteRecordRedirect`](interfaces/RouteRecordRedirect.md)

___

### RouteRecordRedirectOption

Ƭ **RouteRecordRedirectOption**: [`RouteLocationRaw`](index.md#RouteLocationRaw) \| (`to`: [`RouteLocation`](index.md#RouteLocation)) => [`RouteLocationRaw`](index.md#RouteLocationRaw)

___

### \_Awaitable

Ƭ **\_Awaitable**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Maybe a promise maybe not

#### Type parameters

| Name |
| :------ |
| `T` |

___

### \_RouteRecordProps

Ƭ **\_RouteRecordProps**\<`Name`\>: `boolean` \| `Record`\<`string`, `any`\> \| (`to`: [`RouteLocationNormalized`](index.md#RouteLocationNormalized)\<`Name`\>) => `Record`\<`string`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

## Переменные

### RouterLink

• `Const` **RouterLink**: [`_RouterLinkI`](interfaces/RouterLinkI.md)

Компонент для отображения ссылки, вызывающей навигацию по щелчку мыши.

___

### RouterView

• `Const` **RouterView**: () => \{ `$props`: `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterViewProps`](interfaces/RouterViewProps.md) ; `$slots`: \{ `default?`: (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\> ; `route`: [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)  }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\>[]  }  }

Компонент для отображения текущего маршрута, на котором находится пользователь.

#### Объявление типа

• **new RouterView**(): `Object`

Компонент для отображения текущего маршрута, на котором находится пользователь.

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$props` | `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterViewProps`](interfaces/RouterViewProps.md) |
| `$slots` | \{ `default?`: (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\> ; `route`: [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)  }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\>[]  } |
| `$slots.default?` | (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\> ; `route`: [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)  }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\>[] |

___

### START\_LOCATION

• `Const` **START\_LOCATION**: [`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)

Начальное описание маршрута, на котором находится маршрутизатор. Может использоваться в навигационных хуках
для разграничения начальной навигации.

**`Пример`**

```js
import { START_LOCATION } from 'vue-router'

router.beforeEach((to, from) => {
  if (from === START_LOCATION) {
    // начальная навигация
  }
})
```

___

### matchedRouteKey

• `Const` **matchedRouteKey**: `InjectionKey`\<`ComputedRef`\<`undefined` \| [`RouteRecordNormalized`](interfaces/RouteRecordNormalized.md)\>\>

RouteRecord being rendered by the closest ancestor Router View. Used for
`onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
Location Matched

___

### routeLocationKey

• `Const` **routeLocationKey**: `InjectionKey`\<[`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)\>

Allows overriding the current route returned by `useRoute` in tests. rl
stands for route location

___

### routerKey

• `Const` **routerKey**: `InjectionKey`\<[`Router`](interfaces/Router.md)\>

Allows overriding the router instance returned by `useRouter` in tests. r
stands for router

___

### routerViewLocationKey

• `Const` **routerViewLocationKey**: `InjectionKey`\<`Ref`\<[`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)\>\>

Allows overriding the current route used by router-view. Internally this is
used when the `route` prop is passed.

___

### viewDepthKey

• `Const` **viewDepthKey**: `InjectionKey`\<`number` \| `Ref`\<`number`\>\>

Allows overriding the router view depth to control which component in
`matched` is rendered. rvd stands for Router View Depth

## Функции

### createMemoryHistory

▸ **createMemoryHistory**(`base?`): [`RouterHistory`](interfaces/RouterHistory.md)

Создает историю, хранящуюся в памяти. Основное назначение этой истории - рендеринг на стороне сервера (SSR). Она начинается в специальном месте, которого не существует.
Пользователь сам должен заменить это место на начальное, вызвав `router.push` или `router.replace`.

#### Параметры

| Название | Тип      | Значение по умолчанию | Описание                                                              |
| :------- | :------- | :-------------------- | :-------------------------------------------------------------------- |
| `base`   | `string` | `''`                  | Базовый путь, который добавляется ко всем URL. По умолчанию равен '/' |

#### Возвращает

[`RouterHistory`](interfaces/RouterHistory.md)

объект истории, который может быть передан в конструктор маршрутизатора

___

### createRouter

▸ **createRouter**(`options`): [`Router`](interfaces/Router.md)

Создает экземпляр Router, который может быть использован приложением Vue.

#### Параметры

| Название  | Тип                                            | Описание                                     |
| :-------- | :--------------------------------------------- | :------------------------------------------- |
| `options` | [`RouterOptions`](interfaces/RouterOptions.md) | [RouterOptions](interfaces/RouterOptions.md) |

#### Возвращает

[`Router`](interfaces/Router.md)

___

### createRouterMatcher

▸ **createRouterMatcher**(`routes`, `globalOptions`): [`RouterMatcher`](interfaces/RouterMatcher.md)

Creates a Router Matcher.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routes` | readonly [`RouteRecordRaw`](index.md#RouteRecordRaw)[] | array of initial routes |
| `globalOptions` | [`PathParserOptions`](index.md#PathParserOptions) | global route options |

#### Returns

[`RouterMatcher`](interfaces/RouterMatcher.md)

___

### createWebHashHistory

▸ **createWebHashHistory**(`base?`): [`RouterHistory`](interfaces/RouterHistory.md)

Создает историю на основе хэшей. Полезно для веб-приложений, не имеющих хоста (например, `file://`), или когда настройка сервера для для работы с любым URL не представляется возможным.

#### Параметры

| Название | Тип      | Описание                                                                                                                                                                                                                                                                                                                                                                                                |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `base?`  | `string` | необязательный базовый адрес. По умолчанию `location.pathname + location.search` Если в `head` есть тег `<base>`, то его значение будет проигнорировано в пользу этого параметра **но обратите внимание, что он влияет на все вызовы history.pushState()**, то есть если вы используете тег `<base>`, то его значение `href` **должно соответствовать этому параметру** (игнорируя все, что после `#`). |

#### Возвращает

[`RouterHistory`](interfaces/RouterHistory.md)

**`Пример`**

```js
// по адресу https://example.com/folder
createWebHashHistory() // даст итоговый url `https://example.com/folder#`
createWebHashHistory('/folder/') //даст итоговый url `https://example.com/folder/#`
// если `#` указан в base, то он не будет добавлен `createWebHashHistory`
createWebHashHistory('/folder/#/app/') // даст итоговый url `https://example.com/folder/#/app/`
// этого не следует делать, так как это изменяет исходный url и нарушает копирование url
createWebHashHistory('/other-folder/') // даст итоговый url `https://example.com/other-folder/#`

// по адресу file:///usr/etc/folder/index.html
// для местоположений, не имеющих `host`, base игнорируется
createWebHashHistory('/iAmIgnored') //даст итоговый url `file:///usr/etc/folder/index.html#`
```

___

### createWebHistory

▸ **createWebHistory**(`base?`): [`RouterHistory`](interfaces/RouterHistory.md)

Создает историю HTML5. Наиболее распространенная история для одностраничных приложений.

#### Параметры

| Название | Тип      |
| :------- | :------- |
| `base?`  | `string` |

#### Возвращает

[`RouterHistory`](interfaces/RouterHistory.md)

___

### isNavigationFailure

▸ **isNavigationFailure**(`error`, `type?`): error is NavigationRedirectError

Проверка, является ли объект [NavigationFailure](interfaces/NavigationFailure.md).

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `error` | `any` | possible [NavigationFailure](interfaces/NavigationFailure.md) |
| `type?` | [`NAVIGATION_GUARD_REDIRECT`](enums/ErrorTypes.md#NAVIGATION_GUARD_REDIRECT) | опциональный тип для проверки |

#### Возвращает

является ли ошибка NavigationRedirectError

**`Пример`**

```js
import { isNavigationFailure, NavigationFailureType } from 'vue-router'

router.afterEach((to, from, failure) => {
  // Любые сбои в навигации
  if (isNavigationFailure(failure)) {
    // ...
  }
  // Только дублированные переходы
  if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
    // ...
  }
  // Прерванные или отмененные переходы
  if (isNavigationFailure(failure, NavigationFailureType.aborted | NavigationFailureType.canceled)) {
    // ...
  }
})
```

▸ **isNavigationFailure**(`error`, `type?`): является ли ошибка NavigationFailure

#### Параметры

| Название | Тип |
| :------ | :------ |
| `error` | `any` |
| `type?` | [`ErrorTypes`](enums/ErrorTypes.md) \| [`NavigationFailureType`](enums/NavigationFailureType.md) |

#### Возвращает

является ли ошибка NavigationFailure

___

### loadRouteLocation

▸ **loadRouteLocation**(`route`): `Promise`\<[`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\>

Обеспечивает загрузку маршрута, чтобы его можно было передать в качестве o входного параметра в `<RouterView>`.

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `route` | [`RouteLocationNormalizedGeneric`](interfaces/RouteLocationNormalizedGeneric.md) \| [`RouteLocationGeneric`](interfaces/RouteLocationGeneric.md) | разрешенный маршрут для загрузки |

#### Возвращает

`Promise`\<[`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\>

___

### onBeforeRouteLeave

▸ **onBeforeRouteLeave**(`leaveGuard`): `void`

Добавлееие навигационного хука, который будет срабатывать каждый раз, когда компонент, соответствующий текущему маршруту, готовится покинуть текущий маршрут. Похоже на beforeRouteLeave, но может использоваться в любом компоненте. Этот хук будет автоматически удален, когда компонент размонтируется.

#### Параметры

| Название     | Тип                                                | Описание                                         |
| :----------- | :------------------------------------------------- | :----------------------------------------------- |
| `leaveGuard` | [`NavigationGuard`](interfaces/NavigationGuard.md) | [NavigationGuard](interfaces/NavigationGuard.md) |

#### Возвращает

`void`

___

### onBeforeRouteUpdate

▸ **onBeforeRouteUpdate**(`updateGuard`): `void`

Добавление навигационного хука, который срабатывает каждый раз, когда текущее маршрут готовится к обновлению. Этот хук похож на beforeRouteUpdate, но может использоваться в любом компоненте. Этот хук будет автоматически удален, когда компонент размонтируется.

#### Параметры

| Название      | Тип                                                | Описание                                         |
| :------------ | :------------------------------------------------- | :----------------------------------------------- |
| `updateGuard` | [`NavigationGuard`](interfaces/NavigationGuard.md) | [NavigationGuard](interfaces/NavigationGuard.md) |

#### Возвращает

`void`

___

### parseQuery

▸ **parseQuery**(`search`): [`LocationQuery`](index.md#LocationQuery)

Transforms a queryString into a [LocationQuery](index.md#LocationQuery) object. Accept both, a
version with the leading `?` and without Should work as URLSearchParams

#### Параметры

| Name | Тип | Описанеие |
| :------ | :------ | :------ |
| `search` | `string` | строка поиска для парсинга |

#### Возвращает

[`LocationQuery`](index.md#LocationQuery)

a query object

___

### stringifyQuery

▸ **stringifyQuery**(`query`): `string`

Stringifies a [LocationQueryRaw](index.md#LocationQueryRaw) object. Like `URLSearchParams`, it
doesn't prepend a `?`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`LocationQueryRaw`](index.md#LocationQueryRaw) | query object to stringify |

#### Returns

`string`

string version of the query without the leading `?`

___

### useLink

▸ **useLink**\<`Name`\>(`props`): [`UseLinkReturn`](interfaces/UseLinkReturn.md)\<`Name`\>

Returns the internal behavior of a [RouterLink](index.md#RouterLink) without the rendering part.

#### Типы параметров

| Название | Тип |
| :------ | :------ |
| `Name` | extends `string` \| `symbol` = `string` \| `symbol` |

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `props` | [`UseLinkOptions`](interfaces/UseLinkOptions.md)\<`Name`\> | описание маршщрута `to` и опциональный флаг `replace` |

#### Возвращает

[`UseLinkReturn`](interfaces/UseLinkReturn.md)\<`Name`\>

___

### useRoute

▸ **useRoute**\<`Name`\>(`_name?`): [`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\<`Name`\>

Возвращает описание текущее маршрута. Эквивалентно использованию `$route` внутри шаблонов.

#### Типы параметров

| Название | Тип |
| :------ | :------ |
| `Name` | extends `string` \| `symbol` = `string` \| `symbol` |

#### Параметры

| Название | Тип |
| :------ | :------ |
| `_name?` | `Name` |

#### Возвращает

[`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\<`Name`\>

___

### useRouter

▸ **useRouter**(): [`Router`](interfaces/Router.md)

Возвращает экземпляр маршрутизатора. Эквивалентно использованию `$router` внутри шаблонов.

#### Возвращает

[`Router`](interfaces/Router.md)
