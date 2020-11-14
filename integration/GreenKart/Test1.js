/// <reference types="Cypress" />

describe('My First Test Suite',()=>{

it('My First testcase', ()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each(($el,index,$list) => {
        const vegText = $el.find('h4.product-name').text()
        if(vegText.includes('Cashews')){
           cy.wrap($el.find('button')).click()
        }
    })
    cy.get('.brand').should('have.text','GREENKART')
     cy.get('.brand').then(function(logoElement) 
     {
         cy.log(logoElement.text())
     })
     

//      const logo=cy.get('.brand')
//    // cy.log(cy.get('.brand').text())
//     cy.log(logo.text())  
   
})
})