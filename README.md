# Репо для обучения написания автотестов
## Договоренности:
### Название веток
Веткам следует давать названия - тип тестов/ID gh + карточки github + краткое описание теста + ник github. Примеры:

`api_test/gh2_getpet_matbat`
`ui_test/gh2_getpet_matbat`

### Архитектура проекта
API тесты пишутся на фреймворке mocha по пути `api/specs/название_теста.js`. Название тесту дается по типу + названию ручки, которую мы покрываем, например: `post-pet.js`.
Функции для вызова ручек пишутся по пути `api/request/тип_ручки.js` То есть, если мы покрываем ручку GET, мы пишем вызов в файле `get.js` и тп.

## Команды
Запуск всех файлов тестов:
<button onclick="navigator.clipboard.writeText('npx wdio run ./wdio.conf.js')">
  📋 npx wdio run ./wdio.conf.js
</button>

Запуск одного файла с тестами:
<button onclick="navigator.clipboard.writeText('npx wdio run ./wdio.conf.js --spec ./api/specs/название_файла.js')">
  📋 npx wdio run ./wdio.conf.js --spec ./api/specs/название_файла.js 
</button>

## Mock
Файлам с моками можно давать произвольные осмысленные названия. В самих файлах, помимо мока, нужно предоставить комментарием `curl` запрос для его вызова. Например:
```json
{
  "request": {
    "method": "POST",
    "url": "/login"
  },
  "response": {
    "status": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "transformers": ["response-template"],
    "body": "{ \"echoUsername\": \"{{jsonPath request.body '$.username'}}\" }"
  }
}
//Проверка: curl -X POST http://localhost:9080/login -H "Content-Type: application/json" -d '{"username":"test", "password":"123"}'
```
## Полезные ссылки

- [WDIO. Документация фреймворка для написания автотестов, корневой фреймворк](https://webdriver.io/ru/docs/api/)
- [Mocha. Документация для написания шагов](https://mochajs.org)
- [Пакетики npm](https://www.npmjs.com)
- [WireMock. Документация по написанию заглушек](https://wiremock.org/docs/stubbing/)
- [Docker. Команды](https://docs.docker.com/reference/cli/docker/)
- [Публичный API ресурс для api тестов](https://petstore.swagger.io)
- [Публичный UI ресурс для ui тестов](https://demoqa.com/text-box)
