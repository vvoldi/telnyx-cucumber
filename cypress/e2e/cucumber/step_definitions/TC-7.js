import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../../../pages/ContactUsPage";

Given("I already open web-page {string}", (url) => {
    ContactUsPage.goto(url);
});
When("I click on Telenyx Logo in the header", () => {
    ContactUsPage.clickLogo();
});
Then("I see url : {string}", () => {
    cy.url().should("eq", url);
});
