/// <reference types="cypress-xpath" />
class BlogPage {
    goto(url) {
        cy.visit(url);
    }
    elements = {
        searchInput: () => cy.get("#search"),
    };

}

export default new BlogPage();
