# Тестовое задание — Кодекс

## Структура
- `sql_queries.sql` — SQL-запросы по пунктам 1.1–1.3.
- `db_schema.sql` — DDL-схема БД для объектов/контактов/пользователей/адресов.
- `is_perfect_square.js` — функция проверки идеального квадрата без Math.*.
- `two_sum.js` — функция поиска пары чисел по целевой сумме.
- `async_timeouts.js` — переписанная на Promise/async функция из задания 5.
- `analyzer.js` — CLI-скрипт анализа HTML-файлов по пункту 6.

## Требования
- Node.js LTS (или актуальная версия)

## Запуск скрипта анализа HTML
1. Поместите HTML-файлы в корневую папку проекта или её подпапки.
2. Запустите из корня проекта:
   ```powershell
   node analyzer.js
   ```
3. Настройки:
   - `SEARCH_SUBSTRING` — искомая подстрока (регистронезависимая).
   - Поиск выполняется рекурсивно, начиная с папки, где лежит `analyzer.js`.

## Примеры использования модулей
- Проверка квадрата:
  ```bash
  node -e "console.log(require('./is_perfect_square').isPerfectSquare(49))"
  ```
- Поиск пары по сумме:
  ```bash
  node -e "console.log(require('./two_sum').twoSumUnique([3,5,-4,8,11,1,-1,6], 10))"
  ```
- Async-функция (Promise):
  ```bash
  node -e "require('./async_timeouts').funcPromise([10,5,0]).then(console.log).catch(console.error)"
  ```

## SQL
- Импортируйте `sql_queries.sql` в ваш клиент БД для выполнения запросов.
- `db_schema.sql` содержит таблицы и индексы.
