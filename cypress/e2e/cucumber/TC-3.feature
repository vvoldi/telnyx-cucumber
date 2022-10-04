Feature: Telnyx UI

  Scenario: Verify drop-down menu on Resources 
    # Given I open the web-page
    When I hover on Resources element in the header
    Then I see 6 elements from Resources tab