
Feature: Login page

  Scenario Outline: Login success
    Given user goes to the login page
    When user enters "<username>" and "<password>"
    And user clicks on the login button
    Then user should see the welcome page with a welcome message for "<username>"

  Examples:
    |  username   |  password     |
    | johndoe19   |  supersecret  |

  Scenario Outline: Loging Failure
    Given user goes to the login page
    When user enters "<username>" and "<password>"
    And user clicks on the login button
    Then user sees error message "<errorMessage>"

  Examples:
    |  username   |  password    |  errorMessage             |
    |  wronguser  |  wrongpass   | Wrong credentials         |
    |             |              |  Fields can not be empty  |    