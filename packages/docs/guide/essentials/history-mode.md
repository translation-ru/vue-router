# Различные режимы history %{#different-history-modes}%

<VueSchoolLink
  href="https://vueschool.io/lessons/history-mode"
  title="Узнайте о различиях между режимами хэша и HTML5"
/>

Опция `history` при создании экземпляра маршрутизатора позволяет выбрать один из нескольких history-режимов.

## Режим Hash %{#hash-mode}%

Hash-режим history создается с помощью функции `createWebHashHistory()`:

```js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```

Он использует символ хэша (`#`) перед фактическим URL, который внутренне передается. Поскольку этот раздел URL никогда не отправляется на сервер, на сервере он не требует специальной обработки. Однако у нее есть плохое воздействие на SEO. Если это вас беспокоит, используйте history режим HTML5.

## Режим HTML5 %{#html5-mode}%

Режим HTML5 создается с помощью `createWebHistory()` и является рекомендуемым режимом:

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

При использовании `createWebHistory()` URL будет выглядеть "нормально", например, `https://example.com/user/id`. Прекрасно!

Возникает проблема: поскольку наше приложение - это одностраничное клиентское приложение, без правильной конфигурации сервера, пользователи получат 404 ошибку, если они попробуют перейти в своем браузере напрямую по адресу `https://example.com/user/id`. Это не очень красиво.

Не переживайте: чтобы решить эту проблему, достаточно добавить на свой сервер простой резервный маршрут (fallback). Если URL-адрес не соответствует никаким статическим файлам (assets), он должен возвращать ту же самую страницу `index.html`, на которой живет ваше приложение. И снова красота!

## Режим Memory %{#memory-mode}%

Memory-режим не предполагает наличия окружения браузера и, следовательно, не взаимодействует с URL, **автоматически не запускает начальную навигацию**. Это делает его идеальным для среды Node и рендеринга на стороне сервера (SSR). Он создается с помощью `createMemoryHistory()` и **требует вручную запустить начальную навигацию** после вызова `app.use(router)`.

```js
import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
  ],
})
```

Хотя это и не рекомендуется, вы можете использовать этот режим в приложениях браузера, но учтите, что **в нем не будет истории**, то есть вы не сможете вернуться _назад_ или _вперед_.

## Примеры конфигураций сервера %{#example-server-configuration}%

**Примечание**: В приведенных ниже примерах предполагается, что приложение запускается из корневой папки. При развертывании в подпапку необходимо использовать [опцию `publicPath` из Vue CLI](https://cli.vuejs.org/config/#publicpath) и соответствующее [свойство `base` маршрутизатора](../../api/interfaces/Router.md#createWebHistory). Также необходимо скорректировать приведенные ниже примеры, чтобы использовать подпапку вместо корневой папки (например, заменить `RewriteBase /` на `RewriteBase /name-of-your-subfolder/`).

### Apache %{#apache}%

```
<IfModule mod_negotiation.c>
  Options -MultiViews
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Заместо `mod_rewrite` можно также использовать [`FallbackResource`](https://httpd.apache.org/docs/2.4/mod/mod_dir.html#fallbackresource).

### nginx %{#nginx}%

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Нативный Node.js %{#native-node-js}%

```js
const http = require('http')
const fs = require('fs')
const httpPort = 80

http
  .createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.')
      }

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      })

      res.end(content)
    })
  })
  .listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
  })
```

### Express c Node.js %{#express-with-node-js}%

Для Node.js/Express рассмотрите возможность использования [миддлвары connect-history-api-fallback middleware](https://github.com/bripkens/connect-history-api-fallback).

### Internet Information Services (IIS) %{#internet-information-services-iis}%

1. Установите [IIS UrlRewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
2. Создайте в корневом каталоге сайта файл `web.config` со следующими параметрами:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
          <match url="(.*)" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### Caddy v2 %{#caddy-v2}%

```
try_files {path} /
```

### Caddy v1 %{#caddy-v1}%

```
rewrite {
    regexp .*
    to {path} /
}
```

### Хостинг Firebase %{#firebase-hosting}%

Добавьте это в файл `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Netlify %{#netlify}%

Создайте файл `_redirects`, который включается в состав опубликованных файлов:

```
/* /index.html 200
```

В проектах vue-cli, nuxt и vite этот файл обычно располагается в папке с именем `static` или `public`.

Подробнее о синтаксисе можно прочитать в [документации Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps). Вы также можете [создать файл `netlify.toml`](https://docs.netlify.com/configure-builds/file-based-configuration/), чтобы объединить _перенаправления_ с другими возможностями Netlify.

### Vercel %{#vercel}%

Создайте в корневом каталоге проекта файл `vercel.json`, содержащий следующее:

```json
{
  "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
}
```

## Caveat %{#caveat}%

Есть один нюанс: ваш сервер больше не будет сообщать об ошибках 404, так как все несуществующие пути теперь открывают ваш файл `index.html`. Чтобы избежать этой проблемы, вы должны внедрить обработку всех маршрутов в вашем приложении Vue, чтобы показать страницу ошибки 404:

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})
```

Либо, если вы используете сервер Node.js, вы можете внедрить поддержку 404 ошибки, используя маршрутизатор на сервере для сопоставления входящего URL и ответа с ошибкой 404, если маршрут не был найден. Подробнее ознакомьтесь с документацией [по серверному рендерингу Vue](https://v3.vuejs.org/guide/ssr/introduction.html#what-is-server-side-rendering-ssr) для дополнительной информации.
