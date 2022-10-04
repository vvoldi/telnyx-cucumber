import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When('Click on "Release Notes" element in the footer', () => {
    MainPage.elements.releaseNotesBTN().click()
});
Then('I see the url: {string}', (url) => {
    cy.url().should("eq", url);
});
