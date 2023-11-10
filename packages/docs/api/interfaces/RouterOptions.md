---
editLink: false
---

[Документация API](../index.md) / RouterOptions

# Интерфейс: RouterOptions

Параметры инициализации экземпляра [Router](Router.md).

## Иерархия

- [`PathParserOptions`](../index.md#PathParserOptions)

  ↳ **`RouterOptions`**

## Свойства

### end

• `Опционально` **end**: `boolean`

Должен ли RegExp искать до конца при добавлении к нему `$`.

**`Значение по умолчанию`**

`true`

#### Наследуется от

PathParserOptions.end

___

### history

• **history**: [`RouterHistory`](RouterHistory.md)

Реализация истории, используемая маршрутизатором. Большинство веб-приложений должны использовать `createWebHistory`, но это требует правильной настройки сервера. Вы также можете использовать историю на основе хеша при помощи `createWebHashHistory`, которая не требует никакой конфигурации на сервере, но она не обрабатывается поисковыми системами и имеет плохие показатели для SEO.

**`Пример`**

```js
createRouter({
  history: createWebHistory(),
  // другие опции...
})
```

___

### linkActiveClass

• `Опционально` **linkActiveClass**: `string`

Класс по умолчанию, применяемый к активному [RouterLink](../index.md#RouterLink). Если ничего не указано,
будет применяться `router-link-active`.

___

### linkExactActiveClass

• `Опционально` **linkExactActiveClass**: `string`

Класс по умолчанию, применяемый к активному "по точному совпадению" [RouterLink](../index.md#RouterLink). Если ничего не указано,
будет применяться `router-link-exact-active`.

___

### parseQuery

• `Опционально` **parseQuery**: (`search`: `string`) => [`LocationQuery`](../index.md#LocationQuery)

#### Type declaration

▸ (`search`): [`LocationQuery`](../index.md#LocationQuery)

Пользовательская реализация для парсинга query. См. противоположную функцию [RouterOptions.stringifyQuery](RouterOptions.md#stringifyQuery).

##### Параметры

| Название | Параметры |
| :------- | :-------- |
| `search` | `string`  |

##### Возвращает

[`LocationQuery`](../index.md#LocationQuery)

**`Пример`**

Допустим, вы хотите использовать [пакет qs](https://github.com/ljharb/qs) для парсинга query. Вы можете предоставить как `parseQuery`, так и `stringifyQuery`:

```js
import qs from 'qs'

createRouter({
  // другие опции...
  parseQuery: qs.parse,
  stringifyQuery: qs.stringify,
})
```

___

### routes

• **routes**: readonly [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Начальный список маршрутов, которые должны быть добавлены в маршрутизатор.

___

### scrollBehavior

• `Опционально` **scrollBehavior**: [`RouterScrollBehavior`](RouterScrollBehavior.md)

Функция для управления прокруткой при переходе между страницами. Может возвращать Promise для задержки прокрутки. См. ScrollBehavior.

**`Пример`**

```js
function scrollBehavior(to, from, savedPosition) {
  // `to` и `from` - это оба описания маршрутов
  // `savedPosition` может быть null, если его нет
}
```

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

___

### stringifyQuery

• `Опционально` **stringifyQuery**: (`query`: [`LocationQueryRaw`](../index.md#LocationQueryRaw)) => `string`

#### Объявление типа

▸ (`query`): `string`

Пользовательская реализация для преобразования объекта запроса в строку query. Не должна добавлять начальный символ `?`.
[parseQuery](RouterOptions.md#parseQuery) - противоположная функция для парсинга запроса.

##### Параметры

| Название | Тип                                                |
| :------- | :------------------------------------------------- |
| `query`  | [`LocationQueryRaw`](../index.md#LocationQueryRaw) |

##### Возвращает

`string`
