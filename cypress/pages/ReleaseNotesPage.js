/// <reference types="cypress-xpath" />
class ReleaseNotesPage {
    goto(url) {
        cy.visit(url);
    }
    elements = {
        searchInput: () => cy.get("#search"),
        firstSearchedElement: () => cy.xpath('//section[1]/h3'),
        inputWhatsAppCheckbox: () => cy.get('#whatsapp'),
        whatsAppFilteredElements: () => cy.get('div section')
    }; 

}

export default new ReleaseNotesPage();
