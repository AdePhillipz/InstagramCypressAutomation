/// <reference types= "cypress" />

//This function is to describe a test suite
describe("Fcebook Login Test Suite", function () {
    
    //this function is to describe a test case
    it(`Facebook login`, function () {
    //visit facebook
    cy.visit("www.facebook.com")
    //spy on the username input field
    cy.get('[data-testid="royal_email"]')
    //type username
    .type("phillip4peace16@yahoo.com")
    //spy on password input field
    cy.get('[data-testid="royal_pass"]')
    //type password
    .type("jummy0403")
    //spy login button
    cy.get('[data-testid="royal_login_button"]')
    //click login button
    .click("")
   });
 });
