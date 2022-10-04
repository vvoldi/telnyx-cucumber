import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";


When("I click on Network element in the header", () => {
    MainPage.clickNetworkTab()
});
Then("I see url: {string}", (url) => {
    cy.url().should("eq", url);
});
