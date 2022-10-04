import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When("I click on {string} element in the header", () => {
    MainPage.clickTalkToExpertBTN();
});
Then("I see this url: {string}", (url) => {
    cy.url().should("contains", url);
});
