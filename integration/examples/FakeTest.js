/// <reference types="Cypress" />

describe('Fake test suite', () => {

    it('Fake response testcase', () => {

        let message = 'Hey I understood Cyprus'

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.server()
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: { error: message },
            delay: 500,
        }).as('putComment')

        cy.get('.network-put').click()

        cy.wait('@putComment')

        // our 404 statusCode logic in scripts.js executed
        cy.get('.network-put-comment').should('contain', message)
        


    })
})