Feature: Steam
   Scenario Outline: Steam check
      Given Я на странице стим
      When Я нажимаю на элемент меню '<Header>'
      Then Я нахожусь на странице стим '<URL>'

      Examples:
        | Header     | URL            |
        | МАГАЗИН    | steampowered   |
        | СООБЩЕСТВО | steamcommunity |
        | Информация | about          |
        | ПОДДЕРЖКА  | help           |



    Scenario: Steam поиск с пустым значением
      Given Я на странице стим
      When Я нажимаю на элемент меню поиска
      Then Я нахожусь на странице стим 'search'
      Then Отображается контейнер с результатами поиска



    Scenario: Steam поиск с заполненным значением Viridi
      Given Я на странице стим
      When Я ввожу в поле ввода поиска 'Viridi'
      When Я нажимаю на элемент меню поиска
      Then Я нахожусь на странице стим 'Viridi'
      Then Отображается игра 'Viridi'

  Scenario Outline: Популярные разделы
    Given Я на странице стим
    When Я нажимаю на элемент популярных разделов '<Header>'
    Then Я нахожусь на странице стим '<URL>'

    Examples:
      | Header          | URL                      |
      | Новинки         | /explore/new/            |
      | Скидки          | /search/?specials=1      |
      | Бесплатные игры | /genre/Free%20to%20Play/ |
      | Поиск по меткам | /tag/browse/#global_492  |
