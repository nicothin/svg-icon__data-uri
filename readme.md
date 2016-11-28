# Демка SVG-спрайтов

SVG внедрены в стили посредством  data URI.

В случае использования LESS, это делается просто — есть функция [`data-uri`](http://lesscss.org/functions/#misc-functions-data-uri), смотри `less/style.less`. Для Sass, stylus и PostCSS, возможно, есть похожие механизмы.

## Как попробовать

`yarn install` или `npm i` для установки пакетов.

`yarn start` или `npm start` для запуска компиляции LESS.

`yarn svg` или `npm svg` для минификации SVG из `svg-icons/`.
