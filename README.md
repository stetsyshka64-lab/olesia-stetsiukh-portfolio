# Олеся Стецюх — портфоліо UI-дизайнерки

Сайт-портфоліо на [Astro](https://astro.build), публікується на Vercel.

- План сайту: [docs/plan-saitu-portfolio.html](docs/plan-saitu-portfolio.html) (чернетка — [docs/plan-saitu-portfolio-chernetka.md](docs/plan-saitu-portfolio-chernetka.md))
- Макет: Figma → Portfolio → «Portfolio Landing Page»

## Запуск локально

```bash
npm install
npm run dev
```

Сайт відкриється на http://localhost:4321.

## Структура

- `src/pages/index.astro` — головна сторінка
- `src/components/Hero.astro` — перший екран
- `src/components/Header.astro` — шапка з навігацією
- `src/data/contacts.ts` — посилання на месенджери
- `src/assets/` — фото (Astro автоматично стискає його у WebP)
- `public/figma/` — SVG-графіка з макета

## Vercel

Імпортуйте репозиторій на vercel.com → Add New → Project. Vercel сам визначить Astro
(Build Command `npm run build`, Output Directory `dist`).
