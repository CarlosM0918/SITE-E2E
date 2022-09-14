/// <reference types="cypress"/>

import {ProductPage} from "./Pages/product_page"

const productPage = new ProductPage()


describe("Products in cart", () => {
    it("Check that the product in the basket is the same as the one you have selected.", () =>{
        cy.ValidateCorrectProduct();
    })

    it("User change the quantity", ()=>{
        productPage.incrementQuantityIn(3);
        productPage.clickAddToCart();
        cy.get(productPage.boxQuantity, {timeout: 5000}).should('be.visible').and('contain.text', 4)
    })
})

describe("Validate change color", () =>{
    it("Do not send empty email when the color is not available", () => {
        productPage.clickBlackColor();
        productPage.clickEmailMe();
        productPage.clickEmailMeWhenAvailable();
        cy.get(productPage.lblErrorMessage).should('be.visible').and('contain', 'Please provide a valid email')
    })

    it("User change the color of the product.", () =>{
        productPage.clickBlackColor();
        cy.get(productPage.lblNameColor, {timeout: 5000}).should('be.visible').and('contain.text', 'Shade:  Derby Black')
    })
})