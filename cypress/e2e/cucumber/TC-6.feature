Feature: Telnyx UI

  Scenario: Go to Contact Us Page 
    # Given I open the web-page
    When I click on "Talk to an expert" element in the header
    Then I see this url: "https://telnyx.com/contact-us"