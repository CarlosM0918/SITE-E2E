/// <reference types="cypress"/>

import {ProductPage} from "./Pages/product_page"

const productPage = new ProductPage()


describe("Products in cart", () => {
    it("Check that the product in the basket is the same as the one you have selected.", () =>{
        productPage.clickAddToCart();
        productPage.verifyPoductCardsTitle("Domino Black ");
    })

    it("User change the quantity", ()=>{
        productPage.incrementQuantityIn(3);
        productPage.clickAddToCart();
        productPage.verifyQuantityOfProductInCart();
    })
})

describe("Validate change color", () =>{
    it("User change the color of the product.", () =>{
        productPage.clickBlackColor();
        productPage.verifyPoductChangeToColorDerbyBlack();
    })
})