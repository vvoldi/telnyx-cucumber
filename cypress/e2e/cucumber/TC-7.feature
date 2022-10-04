Feature: Telnyx UI

  Scenario: Go to Main page from Contact Us Page
    Given I already open web-page "https://telnyx.com/contact-us"
    When I click on Telenyx Logo in the header
    Then I see url: "https://telnyx.com/"