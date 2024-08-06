---
editLink: false
---

[Документация API](../index.md) / RouteLocationOptions

# Интерфейс: RouteLocationOptions

Общие опции для всех методов навигации.

## Иерархия

- **`RouteLocationOptions`**

  ↳ [`RouteLocationNamedRaw`](RouteLocationNamedRaw.md)

  ↳ [`RouteLocationPathRaw`](RouteLocationPathRaw.md)

  ↳ [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md)

  ↳ [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

## Свойства

### force

• `Опционально` **force**: `boolean`

Запускает переход навигации, даже если местоположение совпадает с текущим.
Обратите внимание, что это также добавит новую запись в историю, если только не будет передано `replace: true`.

___

### replace

• `Опционально` **replace**: `boolean`

Замена записи в истории вместо создания новой

___

### state

• `Опционально` **state**: [`HistoryState`](HistoryState.md)

Состояние для сохранения с помощью History API. Оно не может содержать никаких реактивных значений, а некоторые примитивы, например, Symbols, запрещены. Дополнительная информация на https://developer.mozilla.org/en-US/docs/Web/API/History/state
