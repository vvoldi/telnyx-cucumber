/// <reference types="cypress-xpath" />
class MainPage {
    goto(url) {
        cy.visit(url);
    }
    elements = {
        productsTab: () => cy.get('ul li[class*="khahzD"]:nth-child(1)'),
        elementsOfProductsTab: () => cy.get('li[class*="khahzD"]:nth-child(1) div[class*=bjOBlW]'),
        networkTab: () => cy.get('header li [href="/solutions/global-ip-network"]'),
        resourcesTab: () => cy.xpath("//div[contains(@class, 'hhCIhu')]//li[4]"),
        elementsOfResourcesTab: () => cy.xpath("//li[4]//div[@class='sc-7b3980dc-2 bjOBlW']"),
        pricingTab: () => cy.xpath("//div[contains(@class, 'hhCIhu')]//li[6]"),
        elementsOfPricingTab: () => cy.xpath("//li[6]//div[@class='sc-7b3980dc-2 bjOBlW']"),
        supportCenterBTN: () => cy.get('[href="https://support.telnyx.com/en/"]:nth-child(3)'),
        talkToExpertBTN: () => cy.get("header ul li .byuCMl"),
        seeAllProductsBTN: () => cy.get('footer a[href="/products"]'),
        blogBTN: () => cy.get('footer a[href="/resources"]'),
        releaseNotesBTN: () => cy.get("footer a[href='/release-notes']")
    };

    hoverOnProducts() {
        this.elements.productsTab().realHover({ position: "bottomLeft" });
    }
    hoverOnResources() {
        this.elements.resourcesTab().realHover({ position: "bottomLeft" });
    }
    hoverOnPricing() {
        this.elements.pricingTab().realHover({ position: "bottomLeft" });
    }
    clickNetworkTab() {
        this.elements.networkTab().click();
    }
    clickSupportCenterBTN() {
        this.elements.supportCenterBTN().click();
    }
    clickTalkToExpertBTN() {
        this.elements.talkToExpertBTN().click();
    }
}

export default new MainPage();
