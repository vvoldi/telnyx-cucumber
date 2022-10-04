import {  When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";


When("I click on Support Center element in the header", () => {
    MainPage.clickSupportCenterBTN()
});
Then("I see  url: {string}", (url) => {
    cy.url().should("contains", url);
});
