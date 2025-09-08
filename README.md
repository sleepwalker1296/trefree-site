# Trefree — Трезвый водитель (Next.js 14 + Tailwind)

Готовый минимальный лендинг для деплоя на Vercel.

## Быстрый старт
```bash
npm i
npm run dev
```

## Деплой на Vercel
- Подключите репозиторий, Vercel определит Next.js автоматически.
- Домены: укажите `trefree.ru` в Vercel и пропишите CNAME в Cloudflare на `cname.vercel-dns.com`.

## Настроить форму
Сейчас форма отправляет POST на `https://httpbin.org/post` для проверки. 
Позже замените action на ваш API-роут или Firebase Function / Telegram webhook.
