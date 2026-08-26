---
title: Быстрый старт
description: Как получить первый успешный запрос
---
> Перед началом использования API, убедитесь, что вы вошли в личный кабинет в Notion.

### Шаг 1. Получите токен
Получите персональный токен доступа на портале разработчика, подробнее см. раздел [Авторизация](/getting-started/authentication/).

### Шаг 2. Найдите ID страницы
Откройте нужную страницу в Notion и скопируйте ее ID из URL.
Например, у ссылки https://app.notion.com/p/Homework-3c435ea159d28060a007e62066d97eaa, ID страницы будет `3c435ea159d28060a007e62066d97eaa`.

### Шаг 3. Отправьте первый запрос
Отправьте POST-запрос для создания новой страницы:
```
curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer ваш_токен" \
  -H "Notion-Version: 2026-03-11" \
  -H "Content-Type: application/json" \
  -d '{
    "parent": {
      "type": "page_id",
      "page_id": "3c435ea1-59d2-8060-a007-e62066d97eaa"
    },
    "properties": {
      "title": {
        "title": [
          { "type": "text", "text": { "content": "Homework 1" } }
        ]
      }
    }
  }'
  ```

Замените `ваш_токен` на полученный токен, а `page_id` на ID страницы, полученный на втором шаге.

В каждом запросе также необходимо указывать заголовок `Notion-Version` с версией API.
