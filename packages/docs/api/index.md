---
editLink: false
---

Документация API

# Документация API

## Перечисления

- [NavigationFailureType](enums/NavigationFailureType.md)

## Интерфейсы

- [HistoryState](interfaces/HistoryState.md)
- [NavigationFailure](interfaces/NavigationFailure.md)
- [NavigationGuard](interfaces/NavigationGuard.md)
- [NavigationGuardNext](interfaces/NavigationGuardNext.md)
- [NavigationGuardWithThis](interfaces/NavigationGuardWithThis.md)
- [NavigationHookAfter](interfaces/NavigationHookAfter.md)
- [RouteLocation](interfaces/RouteLocation.md)
- [RouteLocationMatched](interfaces/RouteLocationMatched.md)
- [RouteLocationNormalized](interfaces/RouteLocationNormalized.md)
- [RouteLocationNormalizedLoaded](interfaces/RouteLocationNormalizedLoaded.md)
- [RouteLocationOptions](interfaces/RouteLocationOptions.md)
- [RouteMeta](interfaces/RouteMeta.md)
- [RouteRecordMultipleViews](interfaces/RouteRecordMultipleViews.md)
- [RouteRecordMultipleViewsWithChildren](interfaces/RouteRecordMultipleViewsWithChildren.md)
- [RouteRecordNormalized](interfaces/RouteRecordNormalized.md)
- [RouteRecordRedirect](interfaces/RouteRecordRedirect.md)
- [RouteRecordSingleView](interfaces/RouteRecordSingleView.md)
- [RouteRecordSingleViewWithChildren](interfaces/RouteRecordSingleViewWithChildren.md)
- [Router](interfaces/Router.md)
- [RouterHistory](interfaces/RouterHistory.md)
- [RouterLinkProps](interfaces/RouterLinkProps.md)
- [RouterOptions](interfaces/RouterOptions.md)
- [RouterScrollBehavior](interfaces/RouterScrollBehavior.md)
- [RouterViewProps](interfaces/RouterViewProps.md)
- [\_RouteRecordBase](interfaces/RouteRecordBase.md)

## Псевдонимы типов

### LocationQuery

Ƭ **LocationQuery**: `Record`\<`string`, `LocationQueryValue` \| `LocationQueryValue`[]\>

Нормализованный объект query, который присутствует в [RouteLocationNormalized](interfaces/RouteLocationNormalized.md)

___

### LocationQueryRaw

Ƭ **LocationQueryRaw**: `Record`\<`string` \| `number`, `LocationQueryValueRaw` \| `LocationQueryValueRaw`[]\>

Loose [LocationQuery](index.md#LocationQuery) object that can be passed to functions like
[Router.push](interfaces/Router.md#push) and [Router.replace](interfaces/Router.md#replace) or anywhere when creating a
[RouteLocationRaw](index.md#RouteLocationRaw)

___

### PathParserOptions

Ƭ **PathParserOptions**: `Pick`\<`_PathParserOptions`, ``"end"`` \| ``"sensitive"`` \| ``"strict"``\>

___

### RouteComponent

Ƭ **RouteComponent**: `Component` \| `DefineComponent`

Разрешенный компонент в [RouteLocationMatched](interfaces/RouteLocationMatched.md)

___

### RouteLocationRaw

Ƭ **RouteLocationRaw**: `string` \| `RouteLocationPathRaw` \| `RouteLocationNamedRaw`

User-level route location

___

### RouteParams

Ƭ **RouteParams**: `Record`\<`string`, `RouteParamValue` \| `RouteParamValue`[]\>

___

### RouteParamsRaw

Ƭ **RouteParamsRaw**: `Record`\<`string`, `RouteParamValueRaw` \| `Exclude`\<`RouteParamValueRaw`, ``null`` \| `undefined`\>[]\>

___

### RouteRecord

Ƭ **RouteRecord**: [`RouteRecordNormalized`](interfaces/RouteRecordNormalized.md)

Нормализованная версия [записи маршрута](index.md#RouteRecord).

___

### RouteRecordName

Ƭ **RouteRecordName**: `string` \| `symbol`

Возможные значения имени записи маршрута, определяемого пользователем

___

### RouteRecordRaw

Ƭ **RouteRecordRaw**: [`RouteRecordSingleView`](interfaces/RouteRecordSingleView.md) \| [`RouteRecordSingleViewWithChildren`](interfaces/RouteRecordSingleViewWithChildren.md) \| [`RouteRecordMultipleViews`](interfaces/RouteRecordMultipleViews.md) \| [`RouteRecordMultipleViewsWithChildren`](interfaces/RouteRecordMultipleViewsWithChildren.md) \| [`RouteRecordRedirect`](interfaces/RouteRecordRedirect.md)

___

### UseLinkOptions

Ƭ **UseLinkOptions**: `VueUseOptions`\<`RouterLinkOptions`\>

## Переменные

### RouterLink

• `Const` **RouterLink**: `_RouterLinkI`

Компонент для отображения ссылки, вызывающей навигацию по щелчку мыши.

___

### RouterView

• `Const` **RouterView**: () => \{ `$props`: `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterViewProps`](interfaces/RouterViewProps.md) ; `$slots`: \{ `default?`: (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\> ; `route`: [`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)  }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\>[]  }  }

#### Объявление типа

• **new RouterView**(): `Object`

Компонент для отображения текущего маршрута, на котором находится пользователь.

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$props` | `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterViewProps`](interfaces/RouterViewProps.md) |
| `$slots` | \{ `default?`: (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\> ; `route`: [`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)  }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\>[]  } |
| `$slots.default?` | (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\> ; `route`: [`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)  }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`;  }\>[] |

___

### START\_LOCATION

• `Const` **START\_LOCATION**: [`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)

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

| Название | Тип                         | Описание                                                                                         |
| :------- | :-------------------------- | :----------------------------------------------------------------------------------------------- |
| `error`  | `any`                       | объект, который проверяется на соответствие [NavigationFailure](interfaces/NavigationFailure.md) |
| `type?`  | `NAVIGATION_GUARD_REDIRECT` | опциональный тип для проверки                                                                    |

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

| Название | Тип                                                                       |
| :------- | :------------------------------------------------------------------------ |
| `error`  | `any`                                                                     |
| `type?`  | `ErrorTypes` \| [`NavigationFailureType`](enums/NavigationFailureType.md) |

#### Возвращает

является ли ошибка NavigationFailure

___

### loadRouteLocation

▸ **loadRouteLocation**(`route`): `Promise`\<[`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)\>

Обеспечивает загрузку маршрута, чтобы его можно было передать в качестве o входного параметра в `<RouterView>`.

#### Параметры

| Название | Тип                                                                | Описание               |
| :------- | :----------------------------------------------------------------- | :--------------------- |
| `route`  | [`RouteLocationNormalized`](interfaces/RouteLocationNormalized.md) | resolved route to load |

#### Возвращает

`Promise`\<[`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)\>

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

### useLink

▸ **useLink**(`props`): `Object`

#### Параметры

| Название | Тип                                    |
| :------- | :------------------------------------- |
| `props`  | `VueUseOptions`\<`RouterLinkOptions`\> |

#### Возвращает

`Object`

| Название        | Тип                                                                                                  |
| :-------------- | :--------------------------------------------------------------------------------------------------- |
| `href`          | `ComputedRef`\<`string`\>                                                                            |
| `isActive`      | `ComputedRef`\<`boolean`\>                                                                           |
| `isExactActive` | `ComputedRef`\<`boolean`\>                                                                           |
| `navigate`      | (`e`: `MouseEvent`) => `Promise`\<`void` \| [`NavigationFailure`](interfaces/NavigationFailure.md)\> |
| `route`         | `ComputedRef`\<[`RouteLocation`](interfaces/RouteLocation.md) & \{ `href`: `string`  }\>             |

___

### useRoute

▸ **useRoute**(): [`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)

Возвращает описание текущее маршрута. Эквивалентно использованию `$route` внутри шаблонов.

#### Возвращает

[`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded.md)

___

### useRouter

▸ **useRouter**(): [`Router`](interfaces/Router.md)

Возвращает экземпляр маршрутизатора. Эквивалентно использованию `$router` внутри шаблонов.

#### Возвращает

[`Router`](interfaces/Router.md)
