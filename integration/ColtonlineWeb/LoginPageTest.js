// <reference types="Cypress" />

describe('Test Login Functionality', () => {

    it('should test login functionality', () => {

        cy.visit("https://prodidm.colt.net/nidp/saml2/sso")
        cy.get("#userId").type("TEST2020IA")
        cy.get("#password").type("Colt@1234")
        cy.get('.btnn-danger').click()
        
      
    })
})