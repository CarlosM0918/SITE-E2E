/// <reference types="cypress"/>

import {ProductPage} from "./Pages/product_page"

const productPage = new ProductPage()


describe("Products in cart", () => {
    it.skip("Check that the product in the basket is the same as the one you have selected.", () =>{
        productPage.clickAddToCart();
        productPage.verifyPoductCardsTitle("Domino Black ");
    })

    it.skip("User change the quantity", ()=>{
        productPage.incrementQuantityIn(3);
        productPage.clickAddToCart();
        productPage.verifyQuantityOfProductInCart();
    })
})

describe("Validate vhange color", () =>{
    it.skip("Do not send empty email when the color is not available", () => {
        productPage.clickBlackColor();
        productPage.verifyPoductChangeToColorDerbyBlack();
    })

    it("User change the color of the product.", () =>{
        productPage.clickBlackColor();
        productPage.verifyPoductChangeToColorDerbyBlack();
    })
})