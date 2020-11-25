// <reference types="Cypress" />

describe('Test Registarion Functionality', () => {

    it('should test resgitration functionality', () => {

        cy.visit("https://my.colt.net/tickets");
        // cy.get("#userId").type("TEST2020IA")
        // cy.get("#password").type("Colt@1234")
        //btn btnn-secondary btn-block
        cy.get('.btnn-secondary').click()
        cy.get(':nth-child(1) > .form-control').type("Test")
        cy.get(':nth-child(2) > .form-control').type("User")
        cy.get('.text-right > .btn').click()
        cy.get('.form-control').type("4159132")
        cy.get('.col-xs-5 > .btn').click()
        cy.get('.col-md-12 > .form-control').type("alokverma75@gmail.com")
        cy.get('.intl-tel-input > .form-control').type("07400 123456")
        cy.get('.text-right > .btn').click({ force: true })
        cy.wait(3000)
        cy.get('.text-right > .btn').click()
        cy.get('.text-right > .btn').click()
        cy.get('.custom-control-label').click()
        cy.get('#submitButtonUC01')
       
       
        
        

    })
})