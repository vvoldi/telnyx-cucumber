Feature: Telnyx UI

  Scenario: Fill and send Contact us form 
    Given I open the web-page  "https://telnyx.com/contact-us"
    When I select "Support" from drop-down "Choose reason for contact"
    Then I see "Support" from drop-down "Choose reason for contact" is selected
    When I enter "Jack" in the inpit field "First Name"
    Then I see that "Jack" is entered  in the inpit field "First Name"
    When I enter "Brown" in the input field "Last Name"
    Then I see that "Brown" is entered  in the inpit field "Last Name"
    When I enter "jack_brown@gmail.com" in the input field "Business email"
    Then I see that "jack_brown@gmail.com" is entered  in the inpit field "Business email"
    When I select "+380" from "Phone number" drop-down
    Then I see that "+380" is selected from "Phone number" drop-down
    When I enter "671111111" in the input field "Phone number"
    Then I see that "671111111" is entered  in the inpit field "Phone number"
    When I enter "mycompany.com" in the input field "Company website"
    Then I see that "mycompany.com" is entered  in the inpit field "Company website"
    When I enter "Hello, I am just tester. Sorry for disturb" in the input field "Additional information"
    Then I see that "Hello, I am just tester. Sorry for disturb" is entered  in the inpit field "dditional information"
    When I click "Submit" button
    Then I see message "Our team will reach out to you shortly at jack_brown@gmail.com" is displayed