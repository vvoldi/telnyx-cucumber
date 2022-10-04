Feature: Telnyx UI

  Scenario: Filter by WhatsApp on Release Notes Page
    Given I already open web-page "https://telnyx.com/release-notes"
    When I click on "WhatsApp" checkbox
    Then I see elements that contains "WhatsApp"
   