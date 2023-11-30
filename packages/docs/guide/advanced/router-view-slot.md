# Слот RouterView %{#RouterView-slot}%

Компонент RouterView предоставляет слот, который можно использовать для отображения компонента маршрута:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component" />
</router-view>
```

Приведенный выше код эквивалентен использованию `<router-view />` без слота, но слот обеспечивает дополнительную гибкость, когда нужны другие возможности.

## KeepAlive & Transition %{#KeepAlive-Transition}%

При работе с компонентом [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html) мы обычно хотим, чтобы он кешировал неактивные компоненты маршрута, а не сам RouterView. Мы можем добиться этого, поместив KeepAlive в слот:

```vue-html
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
```

В дополнение к этому, слот позволяет нам использовать компонент [Transition](https://vuejs.org/guide/built-ins/transition.html) для анимирования перехода между компонентами маршрута.

```vue-html
<router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
```

Вы также можете использовать компонент KeepAlive внутри Transition:

```vue-html
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

Дополнительную информацию об использовании RouterView с компонентом Transition см. в руководстве по [Анимации переходов](./transitions).

## Передача входных параметров и слотов %{#Passing-props-and-slots}%

Мы можем использовать слот для передачи входных параметров или слотов компоненту маршрута:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component" some-prop="a value">
    <p>Some slotted content</p>
  </component>
</router-view>
```

На практике это обычно не нужно делать, так как все компоненты маршрута **должны использовать одни и те же входные параметры и слоты**. Другие способы передачи входных параметров см. на странице [Передача входных параметров компонентам маршрута](../essentials/passing-props).

## Ссылки на элементы шаблона %{#Template-refs}%

Использование слота позволяет нам добавить [ссылку на элемент шаблона](https://vuejs.org/guide/essentials/template-refs.html) напрямую на компонент маршрута:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component" ref="mainContent" />
</router-view>
```

Если бы вместо этого мы поместили ссылку на элемент шаблона на `<router-view>`, то в ней хранился бы экземпляр RouterView, а не компонент маршрута.
