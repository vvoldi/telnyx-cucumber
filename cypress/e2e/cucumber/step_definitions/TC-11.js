import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When('I click on "Blog" element in the footer', () => {
    MainPage.elements.blogBTN().click()
});
Then('I see  the url: {string}', (url) => {
    cy.url().should("eq", url);
});
