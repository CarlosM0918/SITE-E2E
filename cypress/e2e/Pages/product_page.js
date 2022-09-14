export class ProductPage{

    /*-------------------------------------------- Object Definition --------------------------------------------*/ 
    divProductCardsTitle = '.css-2zao7z'
    btnAddToCart = 'button[data-nyla="add-to-cart-cb"]'
    btnQuantityPlus = 'button[data-nyla="signbox-plus"]'
    boxQuantity = '.e1axzrep0.css-tg4x2p.e1nqke5h3'
    lblBlackColor = `label[for="gid://shopify/Product/6086714228889-color-c5tqsdjs8h7klcge7l4-Derby Black-4b663ecd-5409-4c90-8a95-b8129bc5f37b-desktop"]`
    lblNameColor = ".undefined.content-item.e1axzrep0.rich-text.css-llslic.e1nqke5h2"
    btnEmailMe = ".nyla--add-to-cart"
    btnEmailMeWhenAvailabel = ".css-hrf2d6"
    lblErrorMessage = ".input-error-message > .e1axzrep0"
    
    /*-------------------------------------------- Act --------------------------------------------*/
    clickAddToCart(){
        cy.get(this.btnAddToCart).click();
    }

    incrementQuantityIn(quantity){
        if(quantity){
            for (let i = 0; i < quantity; i++) 
                cy.get(this.btnQuantityPlus).click();
        }else{
            cy.get(this.btnQuantityPlus).click()
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

}