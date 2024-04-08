Feature: Todo features

Scenario: Get the todo's 
    Given I have the base_url
    When I send get request
    Then I should get 200 response