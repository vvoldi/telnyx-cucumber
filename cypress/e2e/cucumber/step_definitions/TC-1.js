import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../../../pages/MainPage";

When("I focus on Products element on header", () => {
    MainPage.hoverOnProducts()
});
Then("I see 8 elements from products tab", () => {
    MainPage.elements.elementsOfProductsTab().should('be.visible');
});
