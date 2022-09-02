export class ProductPage{

    // Arrange
    divProductCardsTitle = '.css-2zao7z'
    btnAddToCart = 'button[data-nyla="add-to-cart-cb"]'
    
    // Act
    clickAddToCart(){
        cy.get(this.btnAddToCart).click();
    }

    // Assert
    VerifyPoductCardsTitle(product){
        cy.get(this.divProductCardsTitle, {timeout: 5000}).should("contain", product)
    }

}