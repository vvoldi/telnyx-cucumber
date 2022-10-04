Feature: Telnyx UI

  Scenario: Go to Support Page
    # Given I open the web-page
    When I click on Support Center element in the header
    Then I see  url: "https://support.telnyx.com/"