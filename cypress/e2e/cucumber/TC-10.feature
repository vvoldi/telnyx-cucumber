Feature: Telnyx UI

  Scenario: Go to Products Page
    # Given I open the web-page
    When I Click on "See all Products" element in the footer
    Then I see url eq to "https://telnyx.com/products"