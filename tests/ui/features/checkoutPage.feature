Feature: Checkout page

  Scenario Outline: Checkout form order success - Item cart prices
    Given user goes to the checkout page
    And the cart total price is correctly displayed
    When user enters "<fullname>", "<email>", "<address>", "<city>", "<state>", "<zip>", "<cname>", "<ccnum>", "<expyear>", "<cvv>"
    And user selects "<month>" as the expiration month
    And user checks the shipping address checkbox
    And user clicks on the checkout button
    Then user should see an order confirmation number

  Examples:
    | fullname         | email             | address         | city        | state | zip     | cname          | ccnum            | expyear | cvv  | month   | username |
    | John Doe         | doe@gmail.com     | 123 Elm St      | Springfield | IL    | 62701   | John Doe       | 4111111111111111 | 2025    | 123  | January | johndoe  |

  Scenario Outline: Checkout form alert
    Given user goes to the checkout page
    When user enters "<fullname>", "<email>", "<address>", "<city>", "<state>", "<zip>", "<cname>", "<ccnum>", "<expyear>", "<cvv>"
    And user selects "<month>" as the expiration month
    And user unchecks the shipping address checkbox
    And user prepares to capture browser alert
    And user clicks on the checkout button
    And user verifies that alert appeared
    Then user accepts the alert
    Then no browser alert should be present

  Examples:
    | fullname         | email             | address         | city        | state | zip     | cname          | ccnum            | expyear | cvv  | month   | username |
    | John Doe         | doe@gmail.com     | 123 Elm St      | Springfield | IL    | 62701   | John Doe       | 4111111111111111 | 2025    | 123  | January | johndoe  |