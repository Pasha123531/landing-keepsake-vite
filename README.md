# Keepsake — лабораторна робота №9

Лендінг Keepsake, перенесений із лабораторної №7 на Vite, Pug і SCSS. Адреса для GitHub Pages після налаштування публікації: https://Pasha123531.github.io/landing-keepsake-vite/.

## Запуск

Потрібні Git і Node.js LTS версії 20.19+ або 22.12+ (рекомендовано Node.js 24 LTS).

```bash
npm install
npm run dev
npm run build
npm run preview
npm run format
npm run lint
npm run images
```

`npm run images` створює зображення в `public/optimized` з оригіналів у `public/images` і `public/icons`. Готові файли зберігаються в репозиторії, тому для звичайної збірки повторно запускати скрипт не потрібно.

## Структура

- `src/layouts`, `src/pages`, `src/components` — макет, сторінка й секції Pug.
- `src/data`, `src/mixins` — дані повторюваних елементів і міксини Pug.
- `src/styles/abstracts`, `base`, `components` — токени, допоміжні функції та стилі компонентів. `_legacy.scss` зберігає частину стилів, які ще потрібно перенести в модулі.
- `public/optimized` — AVIF, WebP і JPEG для портфоліо, журналу й аватара.
- `.github/workflows/deploy.yml` — збірка й публікація через GitHub Actions. У налаштуваннях репозиторію Pages потрібно вибрати джерело GitHub Actions.

## Інструменти

Vite і Vituum збирають сторінку; Pug формує HTML; Sass компілює SCSS; PostCSS і Autoprefixer обробляють CSS за `.browserslistrc`; sharp готує зображення. Prettier і Stylelint перевіряють код, а husky та lint-staged запускають перевірки змінених файлів перед комітом.

Browserslist: останні дві версії Chrome, Firefox, Edge, Safari та iOS Safari.

| Приклад                                  |       До |    Після |
| ---------------------------------------- | -------: | -------: |
| CSS із lab-07 / мініфікований CSS збірки | 21 670 Б | 15 127 Б |
| Робота 7: PNG / WebP 400 px              |  8 348 Б |  2 692 Б |
| Робота 7: PNG / AVIF 400 px              |  8 348 Б |  2 257 Б |
| Робота 7: PNG / JPEG 400 px              |  8 348 Б |  5 118 Б |

Вихідні зображення невеликі, тому версія шириною 400 px не додає їм нових деталей. Подальша робота: завершити модульну SCSS-архітектуру, замінити растрові іконки на SVG, перевірити HTML та доступність і переконатися, що сторінка повністю відповідає вимогам лабораторної №7.
