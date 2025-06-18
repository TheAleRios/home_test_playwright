Feature: Search page

  Scenario Outline: Search item - Price check - Items non empty verification
    Given user goes to the search page
    When user searches for "<itemName>"
    And user click on search button
    Then user should see the result "<result>"
Examples:
      |     itemName    |          result                   |
      |   automation    |  Found one result for automation  |
      |                 |  Please provide a search word.    |



