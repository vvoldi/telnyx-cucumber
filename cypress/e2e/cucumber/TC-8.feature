Feature: Telnyx UI

  Scenario: Verify Sales Inquiry reson in select on Contact us Page
    Given I already open web-page "https://telnyx.com/contact-us"
    When I select "Sales Inquiry" from drop-down "Choose reason for contact"
    Then I see Sales Inquiry reson is selected and Primary Interest select is displayed