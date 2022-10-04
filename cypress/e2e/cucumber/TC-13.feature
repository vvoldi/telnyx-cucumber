Feature: Telnyx UI

  Scenario: Go to Release Notes Page
    # Given I open the web-page
    When Click on "Release Notes" element in the footer
    Then I see this url: "https://telnyx.com/release-notes"