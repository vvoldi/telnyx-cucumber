import { Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../../../pages/ContactUsPage";

Given(`I open the web-page  {string}`, (url) => {
    ContactUsPage.goto(url);

});
When('I select "Support" from drop-down "Choose reason for contact"', () => {
    ContactUsPage.elements.selectReason().select("Support");
});
Then('I see "Support" from drop-down "Choose reason for contact" is selected', () => {
    ContactUsPage.elements.selectReason().should("have.value", "Support");
});
When('I enter "Jack" in the inpit field "First Name"', () => {
    ContactUsPage.elements.inputFirstName().type("Jack")
});
Then('I see that "Jack" is entered  in the inpit field "First Name"', () => {
    ContactUsPage.elements.inputFirstName().should("have.value", "Jack");
});
When('I enter "Brown" in the input field "Last Name"', () => {
    ContactUsPage.elements.inputLastName().type("Brown")
});
Then('I see that "Brown" is entered  in the inpit field "Last Name"', () => {
    ContactUsPage.elements.inputLastName().should("have.value", "Brown");
});
When('I enter "jack_brown@gmail.com" in the input field "Business email"', () => {
    ContactUsPage.elements.inputEmail().type("jack_brown@gmail.com")
});
Then('I see that "jack_brown@gmail.com" is entered  in the inpit field "Business email"', () => {
    ContactUsPage.elements.inputEmail().should("have.value", "jack_brown@gmail.com");
});
When('I select "+380" from "Phone number" drop-down', () => {
    ContactUsPage.elements.selectPhoneCode().select("+380")
});
Then('I see that "+380" is selected from "Phone number" drop-down', () => {
    ContactUsPage.elements.selectPhoneCode().should("have.value", "+380");
});
When('I enter "671111111" in the input field "Phone number"', () => {
    ContactUsPage.elements.inputPhone().type("671111111")
});
Then('I see that "671111111" is entered  in the inpit field "Phone number"', () => {
    ContactUsPage.elements.inputPhone().should("have.value", "671111111");
});
When('I enter "mycompany.com" in the input field "Company website"', () => {
    ContactUsPage.elements.inputWebsite().type("https://mycompany.com")
});
Then('I see that "mycompany.com" is entered  in the inpit field "Company website"', () => {
    ContactUsPage.elements.inputWebsite().should("have.value", "https://mycompany.com");
});
When('I enter "Hello, I am just tester. Sorry for disturb" in the input field "Additional information"', () => {
    ContactUsPage.elements.textAreaAddInfo().type('Hello, I am just tester. Sorry for disturb')
});
Then('I see that "Hello, I am just tester. Sorry for disturb" is entered  in the inpit field "dditional information"', () => {
    ContactUsPage.elements.textAreaAddInfo().should("have.value", 'Hello, I am just tester. Sorry for disturb');
});
When('I click "Submit" button', () => {
    ContactUsPage.elements.submitBTN().click()
});
Then('I see message "Our team will reach out to you shortly at jack_brown@gmail.com" is displayed', () => {
    cy.url().should("eq", 'https://telnyx.com/thank-you?userEmail=jack_brown%40gmail.com');
});