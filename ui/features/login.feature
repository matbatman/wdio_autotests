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