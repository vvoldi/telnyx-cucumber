Feature: Telnyx UI

  Scenario: Verify drop-down menu on Pricing 
    # Given I open the web-page
    When I hover on Pricing element in the header
    Then I see 8 elements from Pricing tab