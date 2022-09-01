/// <reference types="cypress"/>

it('Google Search', () => {
    cy.viewport(1920, 1080)
    cy.visit("https://site-e2e-git-develop-nyla.vercel.app/products/qa");
    var a = cy.title()
    cy.log(a)
})