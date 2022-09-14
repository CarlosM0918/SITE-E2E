/// <reference types="cypress"/>
import {ProductPage} from "./Pages/product_page"

const productPage = new ProductPage()


describe("Products in cart", () => {
    it("Check that the product in the basket is the same as the one you have selected.", () =>{
        cy.ValidateCorrectProduct();
    })

    it.only("User change the quantity", ()=>{
        productPage.incrementQuantityIn();
        cy.get(productPage.boxQuantity, {timeout: 5000}).should('be.visible').and('contain.text', 2)
    })
})

describe("Validate change color", () =>{
    it("User change the color of the product.", () =>{
        productPage.clickBlackColor();
        cy.get(productPage.lblNameColor, {timeout: 5000}).should('be.visible').and('contain.text', 'Shade:  Derby Black')
    })
})

describe("Validate email when the color is not available", ()=> {
    it("Do not send empty email when the color is not available", () => {
        productPage.clickBlackColor();
        productPage.clickEmailMe();
        productPage.clickEmailMeWhenAvailable();
        cy.get(productPage.lblErrorMessage).should('be.visible').and('contain', 'Please provide a valid email')
    })
})