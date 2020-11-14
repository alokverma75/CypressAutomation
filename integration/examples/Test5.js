/// <reference types="Cypress" />

describe('My Fifth Test Suite',()=>{

it('My fifth testcase', ()=>{

    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
   
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => 
    {

        const textCol2 = $el.text();

        
        if (textCol2.includes('Python'))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
             {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }
    
    })
   
})
})