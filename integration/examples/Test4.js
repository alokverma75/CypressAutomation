/// <reference types="Cypress" />

describe('My Fourth Test Suite',()=>{

it('My fourth testcase', ()=>{

    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include', 'https://www.rahulshettyacademy.com')
    cy.go('back')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

   
})
})