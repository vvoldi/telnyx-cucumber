Feature: Telnyx UI

  Scenario: Go to Blog Page 
    # Given I open the web-page
    When I click on "Blog" element in the footer
    Then I see  the url: "https://telnyx.com/resources"