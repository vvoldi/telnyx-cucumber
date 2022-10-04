Feature: Telnyx UI

  Scenario: Search on Release Notes Page
    Given I already open web-page "https://telnyx.com/release-notes"
    When I enter "voice" in search input
    Then I see "voice" is entered in search input and the first searched element contains "voice"