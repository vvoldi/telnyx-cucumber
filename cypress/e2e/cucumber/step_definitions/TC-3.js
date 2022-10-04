import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When("I hover on Resources element in the header", () => {
    MainPage.hoverOnResources();
});
Then("I see 6 elements from Resources tab", () => {
    MainPage.elements.elementsOfResourcesTab().should("be.visible");
});
