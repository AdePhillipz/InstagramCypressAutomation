/// <reference types="Cypress" />
import HomePage from '../integration/PageObjects/HomePage'

describe('My Second Test Suite', function() 
{

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
    this.data=data
        })
      })


it('My FirstTest case',function() {
const homePage=new HomePage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneurButton().should('be.disabled')
    
    homePage.getShopTab().click()
})


})