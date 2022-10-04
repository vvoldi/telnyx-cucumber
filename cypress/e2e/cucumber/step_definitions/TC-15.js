import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import ReleaseNotesPage from "../../../pages/ReleaseNotesPage";

Given(`I already open web-page "{string}"`, (url) => {
    ReleaseNotesPage.goto(url);
});
When('I click on "WhatsApp" checkbox', () => {
    ReleaseNotesPage.elements.inputWhatsAppCheckbox().click({force:true});
});
Then('I see elements that contains {string}', (text) => {
    ReleaseNotesPage.elements.whatsAppFilteredElements().should('contain', text)
    
});
