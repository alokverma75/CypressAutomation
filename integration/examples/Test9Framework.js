/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage';
import ShoppingPage from '../pageObjects/ShoppingPage';
import UtilPage from '../pageObjects/UtilPage';

describe('My Fremework TestSuite', function() {
    //called after describe and before it block
    before(function() {
        // root-level hook
        // runs before every test
        cy.fixture('example').then(function(data) 
        {
            this.data=data
        })
    })

    it('Data testcase', function() {

        const homePage = new HomePage()
        const shoppingPage = new ShoppingPage()
        const utilPage = new UtilPage()

        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        //It returned 4 elements and Name was first one i.e. 0th indev
        //cy.get('form input.form-control:nth-child(2)').eq(0).type('Alok')
        //Below is from cypress selector
       // cy.get(':nth-child(1) > .form-control').type('Alok')
       //Below is using the name attribute and at index 1 two way binding textbox was there and 2 index Name textfield
       cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
       cy.get('select').select(this.data.gender)
       cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
       cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
       cy.get('#inlineRadio3').should('be.disabled')
       cy.get(':nth-child(1) > label').should('contain.text','Name')
       cy.get('input[name="name"]:nth-child(2)').clear()
       cy.get('input[name="name"]:nth-child(2)').type('a')
       cy.get('.alert').should('contain.text','Name should be at least 2 characters')
       cy.get('input[name="name"]:nth-child(2)').clear()
       cy.get('input[name="name"]:nth-child(2)')
       cy.get('.alert').should('contain.text', 'Name is required')
       cy.get('.nav-link').eq(1).click()
        //from cypress
        //cy.get(':nth-child(2) > .nav-link').click()
        //customized command declared in commands.json
        //cy.selectProduct('Blackberry')
        this.data.productNames.forEach(function(element){
            cy.selectProduct(element)
        })
        
        cy.get('.nav-link.btn.btn-primary').click()
        cy.get('button.btn.btn-success').click()
        cy.get('#country').type(this.data.country)
        cy.wait(3000)
        cy.get('.suggestions > ul > li > a').should('contain.text','India').click()
        cy.get('#checkbox2').check({ force: true })
        cy.get('input[type="submit"]').click()
        cy.get('.alert').should('contain.text','Success')
        
        //Below using cypress
        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        //cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
        
    })
})