/// <reference types="Cypress" />

describe('My Sixth Test Suite',()=>{

it('My Sixth testcase', ()=>{

    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   cy.get('.mouse-hover-content').invoke('show')
    //cy.contains('Top').click({ force: true })
    cy.contains('Top').click({ force: true })
    cy.url().should('include','top')
    
   
})
})