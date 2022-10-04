import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../../../pages/ContactUsPage";

Given(`I already open web-page "{string}"`, (url) => {
    ContactUsPage.goto(url);
});
When('I select "Sales Inquiry" from drop-down "Choose reason for contact"', () => {
    ContactUsPage.elements.selectReason().select("Sales-Inquiry");
});
Then("I see Sales Inquiry reson is selected and Primary Interest select is displayed", () => {
    ContactUsPage.elements.selectReason().should("have.value", "Sales-Inquiry");
    ContactUsPage.elements.selectPrimaryInterest().should("be.visible");
});
