
Feature: Grid page

  Scenario Outline: Grid item - Price check - Items non empty verification
    Given user goes to the grid page
    When user checks the grid item "<itemName>" in position "7" is present
    Then user should see that the price of "<itemName>" in position "7" is "<price>"
    And all the items have a non empty title, price, image and a button
    Examples:
      | itemName        | price |
      | Super Pepperoni | $10   |