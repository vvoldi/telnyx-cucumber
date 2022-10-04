import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When('I Click on "See all Products" element in the footer', () => {
    MainPage.elements.seeAllProductsBTN().click()
});
Then('I see url eq to {string}', (url) => {
    cy.url().should("eq", url);
});
