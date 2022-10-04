import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import BlogPage from "../../../pages/BlogPage";


Given(`I already open web-page "{string}"`, (url) => {
    BlogPage.goto(url);
});
When('I enter {string} in search field', (text) => {
    BlogPage.elements.searchInput().type(`${text}{enter}`)
});
Then('I see the url : {string}', (url) => {
    cy.url().should("contains", url);
});
