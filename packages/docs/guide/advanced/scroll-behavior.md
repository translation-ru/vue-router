# Поведение прокрутки страницы %{#scroll-behavior}%

<VueSchoolLink
  href="https://vueschool.io/lessons/scroll-behavior"
  title="Узнайте, как управлять поведением прокрутки страницы"
/>

При использовании клиентской маршрутизации мы можем захотеть прокрутить страницу вверх при переходе на новый маршрут, или сохранить позицию прокрутки для записей истории, так же, как это происходит при реальной перезагрузке страницы. Vue Router позволяет вам достичь этого, а еще более того, позволяет полностью настраивать поведение прокрутки при навигации по маршруту.

**Примечание: данная возможность работает только в том случае, если браузер поддерживает функцию `history.pushState`**.

При создании экземпляра маршрутизатора, можно предоставить функцию `scrollBehavior`:

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // возврат желаемого положения
  }
})
```

Функция `scrollBehavior` получает объекты маршрутов `to` и `from`, как в [навигационных хуках](./navigation-guards.md). Третий аргумент, `savedPosition`, доступен только в том случае, если это `popstate` навигация (запускается кнопками браузера назад/вперед).

Функция может возвращать объект позиции [`ScrollToOptions`](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions):

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // всегда прокручивать до верха
    return { top: 0 }
  },
})
```

Через `el` можно также передать CSS-селектор или элемент DOM. В этом случае `top` и `left` будут рассматриваться как относительные смещения относительно этого элемента.

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // всегда прокручивать на 10px выше элемента #main
    return {
      // также можно написать
      // el: document.getElementById('main'),
      el: '#main',
      // 10px above the element
      top: 10,
    }
  },
})
```

Если возвращается falsy-значение или пустой объект, то прокрутки не произойдет.

Возвращение значения `savedPosition` приведет к нативному поведению при навигации с помощью кнопок назад/вперед:

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
```

Если вы хотите имитировать поведение "прокрутки до якоря":

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})
```

Если ваш браузер поддерживает [поведение прокрутки](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior), то вы можете сделать его плавным:

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})
```

## Задержка при прокрутке %{#delaying-the-scroll}%

Иногда нам нужно немного подождать, прежде чем прокручивать страницу. Например, при работе с анимациями мы хотим дождаться окончания анимации перед прокруткой. Для этого вы можете вернуть Promise, который разрешится объектом с желаемой позицией прокрутки. Вот пример, где мы ожидаем 500 мс перед прокруткой:

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})
```

Это можно связать с событиями компонента transition на уровне страницы, чтобы реализовать такое поведение прокрутки, которое сочетается с анимациями перехода между страницами, но из-за множества возможных вариантов и комплексности примеров, мы просто предоставляем этот простой пример, чтобы показать где можно разместить собственную реализацию.

## Расширенные смещения %{#advanced-offsets}%

Если на вашей странице есть фиксированная панель навигации или подобные элементы, вам может понадобиться смещение, чтобы целевой элемент не перекрывался другим содержимым. Использование статического значения смещения может не всегда работать. Вы можете попробовать CSS-решения, например, добавить смещения с помощью `scroll-margin` или `scroll-padding`, либо использовать псевдоэлементы `::before` и `::after`. Однако эти подходы могут привести к неожиданному поведению.

В таких случаях лучше вычислять смещение вручную. Простой способ — комбинировать CSS с методом JavaScript `getComputedStyle()`. Это позволяет каждому элементу динамически определять собственное смещение. Вот пример:

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    const mainElement = document.querySelector('#main')
    if (mainElement) {
      const marginTop = parseFloat(
        getComputedStyle(mainElement).scrollMarginTop
      )
      return {
        el: mainElement,
        top: marginTop,
      }
    } else {
      return { top: 0 }
    }
  },
})
```
