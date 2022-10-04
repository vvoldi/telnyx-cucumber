Feature: Telnyx UI

  Scenario: Search on Blog Page
    Given I already open web-page "https://telnyx.com/resources"
    When I enter "hello" in search field
    Then I see the url : "https://telnyx.com/resources/search?q=hello"