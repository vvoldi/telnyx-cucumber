/// <reference types="cypress-xpath" />
class ContactUsPage {
    goto(url) {
        cy.visit(url);
    }
    elements = {
        logo: () => cy.get("a[href='/']"),
        selectReason: () => cy.get("#Reason_for_Contact__c"),
        selectPrimaryInterest: () => cy.get("#Use_Case_Form__c"),
        inputFirstName: () => cy.get("#FirstName"),
        inputLastName: () => cy.get("#LastName"),
        inputEmail: () => cy.get("#Email"),
        selectPhoneCode: () => cy.get("#Phone_Number_Extension__c"),
        inputPhone: () => cy.get("#Phone_Number_Base__c"),
        inputWebsite: () => cy.get("#Website"),
        textAreaAddInfo: () => cy.get("#Form_Additional_Information__c"),
        submitBTN: () => cy.get("button[type='submit']"),
    };

    clickLogo() {
        this.elements.logo().click();
    }
}

export default new ContactUsPage();
