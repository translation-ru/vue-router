---
editLink: false
---

[Документация API](../index.md) / Router

# Интерфейс: Router

Экземпляр маршрутизатора.

## Свойства

### currentRoute

• `Readonly` **currentRoute**: `Ref`\<[`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md)\>

Текущий [RouteLocationNormalized](../index.md#RouteLocationNormalized)

___

### listening

• **listening**: `boolean`

Позволяет отключить прослушивание событий истории. Это низкоуровневый api для микрофронтендов.

___

### options

• `Readonly` **options**: [`RouterOptions`](RouterOptions.md)

Начальный объект опций, переданный для создания маршрутизатора

## Методы

### addRoute

▸ **addRoute**(`parentName`, `route`): () => `void`

Добавление новой [записи маршрута](../index.md#RouteRecordRaw) в качестве дочерней записи существующего маршрута.

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `parentName` | `NonNullable`\<[`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)\> | Родительская запись маршрута, в которую должен быть добавлен `route` |
| `route` | [`RouteRecordRaw`](../index.md#RouteRecordRaw) | Запись маршрута для добавления |

#### Возвращает

`fn`

▸ (): `void`

##### Возвращает

`void`

▸ **addRoute**(`route`): () => `void`

Добавление в маршрутизатор новой [записи маршрута](../index.md#RouteRecordRaw).

#### Параметры

| Название | Тип                                            | Описание                                     |
| :------- | :--------------------------------------------- | :------------------------------------------- |
| `route`  | [`RouteRecordRaw`](../index.md#RouteRecordRaw) | Запись маршрута, которую необходимо добавить |

#### Возвращает

`fn`

▸ (): `void`

##### Возвращает

`void`

___

### afterEach

▸ **afterEach**(`guard`): () => `void`

Добавление навигационного хука, который выполняется после каждого перехода навигации. Возвращает функцию, которая удаляет зарегистрированный хук.

#### Параметры

| Название | Тип                                             | Описание                                       |
| :------- | :---------------------------------------------- | :--------------------------------------------- |
| `guard`  | [`NavigationHookAfter`](NavigationHookAfter.md) | навигационный хук, который необходимо добавить |

#### Возвращает

`fn`

функция, удаляющая зарегестрированный навигационный хук

▸ (): `void`

##### Возвращает

`void`

**`Пример`**
```js
router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log('failed navigation', failure)
  }
})
```

___

### back

▸ **back**(): `void`

Переход по истории назад, если это возможно, при помощи вызова `history.back()`. Эквивалентно `router.go(-1)`.

#### Возвращает

`void`

___

### beforeEach

▸ **beforeEach**(`guard`): () => `void`

Добавление навигационного хука, который выполняется перед каждым переходом навигации. Возвращает функцию, которая удаляет зарегистрированный хук.

#### Параметры

| Название | Тип                                                                    | Описание                                       |
| :------- | :--------------------------------------------------------------------- | :--------------------------------------------- |
| `guard`  | [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> | навигационный хук, который необходимо добавить |

#### Возвращает

`fn`

▸ (): `void`

##### Возвращает

`void`

___

### beforeResolve

▸ **beforeResolve**(`guard`): () => `void`

Добавление навигационного хука, который выполняется перед тем, как навигация будет разрешена. В этом состоянии все компоненты уже загружены, а другие хуки успешно отработали. Возвращает функцию, которая удаляет зарегистрированный хук.

#### Параметры

| Название | Тип                                                                    | Описание                                      |
| :------- | :--------------------------------------------------------------------- | :-------------------------------------------- |
| `guard`  | [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> | авигационный хук, который необходимо добавить |

#### Возвращает

`fn`

функция, удаляющая зарегестрированный навигационный хук

▸ (): `void`

##### Возвращает

**`Пример`**

```js
router.beforeResolve(to => {
  if (to.meta.requiresAuth && !isAuthenticated) return false
})
```

___

### clearRoutes

▸ **clearRoutes**(): `void`

Delete all routes from the router matcher.

#### Returns

`void`

___

### forward

▸ **forward**(): `void`

Переход по истории вперед, если это возможно, при помощи вызова `history.forward()`. Эквивалентно `router.go(1)`.

#### Возвращает

`void`

___

### getRoutes

▸ **getRoutes**(): [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

Получение полного списка всех [записей маршрутов](../index.md#RouteRecord).

#### Возвращает

[`RouteRecordNormalized`](RouteRecordNormalized.md)[]

___

### go

▸ **go**(`delta`): `void`

Позволяет перемещаться вперед или назад по истории. Вызывает `history.go()`.

#### Параметры

| Название | Тип      | Описание                                                                             |
| :------- | :------- | :----------------------------------------------------------------------------------- |
| `delta`  | `number` | Позиция в истории, на которую вы хотите переместиться, относительно текущей страницы |

#### Возвращает

`void`

___

### hasRoute

▸ **hasRoute**(`name`): `boolean`

Проверка на существования записи маршрута с заданным названием

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `name` | `NonNullable`\<[`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)\> |  Название записи маршрута для проверки |

#### Возвращает

`boolean`

___

### install

▸ **install**(`app`): `void`

Called automatically by `app.use(router)`. Should not be called manually by
the user. This will trigger the initial navigation when on client side.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `App`\<`any`\> | Application that uses the router |

#### Returns

`void`

___

### isReady

▸ **isReady**(): `Promise`\<`void`\>

Возвращает Promise, который будет разрешен, когда маршрутизатор завершит начальную навигацию. Это означает, что он разрешит все начальные асинхронные хуки и асинхронные компоненты, связанные с начальным маршрутом. Если начальная навигация уже произошла, promise разрешается немедленно.

Это полезно в рендеринге на стороне сервера для обеспечения согласованного вывода как на сервере, так и на клиенте. Обратите внимание, что на сервере вам необходимо вручную выполнять начальную навигацию, в то время как на клиентской стороне маршрутизатор автоматически получает ее из URL.

#### Возвращает

`Promise`\<`void`\>

___

### onError

▸ **onError**(`handler`): () => `void`

Добавляет обработчик ошибок, который вызывается каждый раз, когда происходит необработанная ошибка во время навигации. Включает в себя ошибки, выброшенные синхронно и асинхронно, ошибки, возвращенные или переданные в `next` в любом навигационном хуке, а также ошибки, возникшие при попытке разрешить асинхронный компонент, необходимый для отображения маршрута.

#### Параметры

| Названием | Тип              | Описание                                       |
| :-------- | :--------------- | :--------------------------------------------- |
| `handler` | `_ErrorListener` | обработчик ошибок, который необходимо добавить |

#### Возвращает

`fn`

▸ (): `void`

##### Возвращает

`void`

___

### push

▸ **push**(`to`): `Promise`\<`undefined` \| `void` \| [`NavigationFailure`](NavigationFailure.md)\>

Программный переход к новому URL-адресу путем добавления записи в стек истории
стек.

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `to` | `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md) | Описание маршрута для перехода |

#### Возвращает

`Promise`\<`undefined` \| `void` \| [`NavigationFailure`](NavigationFailure.md)\>

___

### removeRoute

▸ **removeRoute**(`name`): `void`

Удаление существующей записи маршрута по её названию.

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `name` | `NonNullable`\<[`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)\> | Имя маршрута, который необходимо удалить |

#### Возвращает

`void`

___

### replace

▸ **replace**(`to`): `Promise`\<`undefined` \| `void` \| [`NavigationFailure`](NavigationFailure.md)\>

Программный переход к новому URL-адресу путем замены текущей записи в стеке истории.

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `to` | `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md) | Описание маршрута для перехода |

#### Возвращает

`Promise`\<`undefined` \| `void` \| [`NavigationFailure`](NavigationFailure.md)\>

___

### resolve

▸ **resolve**\<`Name`\>(`to`, `currentLocation?`): [`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md)


#### Типы параметров

| Название | Тип |
| :------ | :------ |
| `Name` | extends `string` \| `symbol` = `string` \| `symbol` |

#### Параметры

| Название | Тип | Описание |
| :------ | :------ | :------ |
| `to` | [`RouteLocationAsRelativeTyped`](RouteLocationAsRelativeTyped.md)\<[`RouteMapGeneric`](../index.md#RouteMapGeneric), `Name`\> | Необработанное описание маршрута для разрешения |
| `currentLocation?` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) | Необязательное текущее описание маршрута для относительного разрешения |

#### Возвращает

[`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md)

▸ **resolve**(`to`, `currentLocation?`): [`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md) |
| `currentLocation?` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |

#### Returns

[`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md)
