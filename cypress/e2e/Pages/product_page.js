import {Utilities} from "./Utilities/utilities"
const utilities = new Utilities()

export class ProductPage{

    /*-------------------------------------------- Arrange --------------------------------------------*/ 
    divProductCardsTitle = '.css-2zao7z'
    btnAddToCart = 'button[data-nyla="add-to-cart-cb"]'
    btnQuantityPlus = 'button[data-nyla="signbox-plus"]'
    boxQuantity = '.css-1jw5co9.ebjrp91'
    lblBlackColor = `label[for="gid://shopify/Product/6086714228889-color-c5tqsdjs8h7klcge7l4-Derby Black-4b663ecd-5409-4c90-8a95-b8129bc5f37b-desktop"]`
    lblNameColor = ".undefined.content-item.e1axzrep0.rich-text.css-llslic.e1nqke5h2"
    btnEmailMe = ".nyla--add-to-cart"
    btnEmailMeWhenAvailabel = ".css-hrf2d6"
    lblErrorMessage = ".input-error-message > .e1axzrep0"
    
    /*-------------------------------------------- Act --------------------------------------------*/

    /**
    * Product is added to cart
    */
    clickAddToCart(){
        cy.get(this.btnAddToCart).click();
    }

    /**
    * Increments the quantity of product
    * 
    * @param  {Integer} quantity You can add or not a value as parameter
    * 
    * @example 
    *   productPage.incrementQuantity()    // By default 1 extra item will be added
    *   productPage.incrementQuantity(2)   // The quantity specified is added
    */
     incrementQuantityIn(quantity){
        if(quantity){
            for (let i = 0; i < quantity; i++) 
                cy.get(this.btnQuantityPlus).click();
            utilities.setQuantity(quantity+1)
        }else{
            cy.get(this.btnQuantityPlus).click()
            utilities.setQuantity();
        }
    }

    clickBlackColor(){
        cy.get(this.lblBlackColor).click();
        cy.wait(2000)
    }

    clickEmailMe(){
        cy.get(this.btnEmailMe).click();
    }

    clickEmailMeWhenAvailable(){
        cy.get(this.btnEmailMeWhenAvailabel).click();
    }

    /*-------------------------------------------- Assert --------------------------------------------*/

    /**
    * Verify if the product is correct
    * 
    * @param  {String} product 
    * 
    * @example 
    *   productPage.VerifyPoductCardsTitle("example");
    * 
    */
    verifyPoductCardsTitle(product){
        cy.get(this.divProductCardsTitle, {timeout: 5000}).should("contain", product)
    }
    /**
    * Verify the quantity added to the cart.
    * 
    * @param  {Integer} vQuantity You can add or not a value as parameter
    * 
    * @example 
    *   productPage.verifyQuantityOfProductInCart()    // Default validation
    *   productPage.verifyQuantityOfProductInCart(2)   // Validates the quantity indicated in the parameter.
    */
    verifyQuantityOfProductInCart(vQuantity){
        if (vQuantity){
            cy.get(this.boxQuantity, {timeout: 5000}).should('be.visible').and('contain.text', vQuantity)
        }else{
            vQuantity = utilities.getQuantity();
            cy.get(this.boxQuantity, {timeout: 5000}).should('be.visible').and('contain.text', vQuantity)
        }
    }

    /**
    * Verify the color is Derby Black
    */
    verifyPoductChangeToColorDerbyBlack(){
        cy.get(this.lblNameColor, {timeout: 5000}).should('be.visible').and('contain.text', 'Shade:  Derby Black')
    }

    /**
    * Verify the email is not send empty
    */
    verifyTheEmailIsNotSend(){
        cy.get(this.lblErrorMessage).should('be.visible').and('contain', 'Please provide a valid email')
    }
}