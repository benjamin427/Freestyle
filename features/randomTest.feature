Feature: Random application feature

    Background: This is a feature that is designed to perform basic web functions

    Scenario: As a user I should enter specific words
    Given Navigate to the url
    Then Enter a specific word
    |random_word_1| random_word_2|random_word_3|
    | google      | cypress      | JavaScript  |
    And Click google search

    Scenario: As a user I should enter specific words to do an extensive search
    Given Navigate to the url as a second attempt
    Then Enter another specific word
    | random_word_1 | random_word_2 | random_word_3 |
    | google        | cypress       | JavaScript    |
    And Click I feel lucky search






    