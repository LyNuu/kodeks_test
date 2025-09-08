# Тестовое задание — Кодекс

## Структура
```
kodeks_test/
  src/
    analyzer.js           # CLI-скрипт анализа HTML (п.6)
    async_timeouts.js     # Promise/async версия функции (п.5*)
    is_perfect_square.js  # проверка идеального квадрата без Math.* (п.3)
    two_sum.js            # поиск пары по сумме (п.4)
  db/
    schema/
      db_schema.sql      # DDL-схема БД (п.2)
    queries/
      sql_queries.sql    # SQL-запросы 1.1–1.3 (п.1)
  samples/
    test.html
    inner/
      nested.html
  .gitignore
  README.md
```

## Требования
- Node.js LTS (или актуальная версия)

## Запуск скрипта анализа HTML
1. HTML-файлы лежат в `samples/` (можно добавлять подпапки).
2. Перейдите в папку проекта:
   ```powershell
   cd .\kodeks_test
   ```
3. Запустите анализатор:
   ```powershell
   node .\src\analyzer.js
   ```
4. Альтернатива: из родительской папки (без `cd`):
   ```powershell
   node .\kodeks_test\src\analyzer.js
   ```
5. Настройки в `src/analyzer.js`:
   - `FS_ROOT` указывает на `samples/`.
   - `SEARCH_SUBSTRING` — искомая подстрока (регистронезависимая).

## Примеры использования модулей
Примеры (выполняйте из папки `kodeks_test`, PowerShell):
- Проверка квадрата:
  ```powershell
  node -e "console.log(require('./src/is_perfect_square').isPerfectSquare(49))"
  ```
- Поиск пары по сумме:
  ```powershell
  node -e "console.log(require('./src/two_sum').twoSumUnique([3,5,-4,8,11,1,-1,6], 10))"
  ```
- Async-функция (Promise):
  ```powershell
  node -e "require('./src/async_timeouts').funcPromise([10,5,0]).then(console.log).catch(console.error)"
  ```

## SQL
- Импортируйте `db/queries/sql_queries.sql` в ваш клиент БД для выполнения запросов 1.1–1.3.
- `db/schema/db_schema.sql` содержит таблицы и индексы.
