import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import ReleaseNotesPage from "../../../pages/ReleaseNotesPage";

Given(`I already open web-page "{string}"`, (url) => {
    ReleaseNotesPage.goto(url);
});
When('I enter {string} in search input', (text) => {
    ReleaseNotesPage.elements.searchInput().type(`${text}{enter}`);
});
Then(
    'I see {string} is entered in search input and the first searched element contains "voice"',
    (text) => {
        ReleaseNotesPage.elements.searchInput().should("have.value", text);
        ReleaseNotesPage.elements.firstSearchedElement().contains(`${`v`.toUpperCase()}oice`)
    }
);
