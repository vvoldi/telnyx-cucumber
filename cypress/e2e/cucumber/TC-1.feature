Feature: Telnyx UI

  Scenario: Verify drop-down menu on Product
    # Given I open the "Home" web-page
    When I focus on Products element on header
    Then I see 8 elements from products tab