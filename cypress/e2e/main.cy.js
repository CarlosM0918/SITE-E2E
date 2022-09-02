/// <reference types="cypress"/>

import {ProductPage} from "./Pages/product_page"

const productPage = new ProductPage()


describe("Products in cart", () => {
    it("Check that the product in the basket is the same as the one you have selected.", () =>{
        productPage.clickAddToCart();
        productPage.VerifyPoductCardsTitle("Domino Black ")
    })  
})