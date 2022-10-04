Cypress.Commands.add('CoookiesChecker', () => {
    const closeCookieBTN = 'button[aria-label="close and deny"]';

    cy.get('body').then((body) => {
        if (body.find(closeCookieBTN).length) {
            cy.get(closeCookieBTN).click();
        }
    });
});
