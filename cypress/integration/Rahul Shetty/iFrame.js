/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frame Test Suite', function() {
    it('Validating Frames',function() {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.frameLoaded('#courses-iframe')

cy.iframe().find('a[href*="mentorship"]').eq(0).click()

cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length','2')




})
})