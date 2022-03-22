/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Cypress Demonstration", function () {
    it(`Frames`, function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq('0').click()
        cy.iframe().find('div.row:visible').should('have.length','7')
})
 })