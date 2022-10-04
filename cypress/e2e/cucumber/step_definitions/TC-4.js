import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When("I hover on Pricing element in the header", () => {
    MainPage.hoverOnPricing();
});
Then("I see 8 elements from Pricing tab", () => {
    MainPage.elements.elementsOfPricingTab().should("be.visible");
});
