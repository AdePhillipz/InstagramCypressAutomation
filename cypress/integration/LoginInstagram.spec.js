/// <reference types= "cypress" />
//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    
    //This function is to describe the test case
    it(`Instagram login`, function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");
    //spy on the username input field
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
    //type username
    .type("officialzionphillips@gmail.com")
    //spy on the password input field
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
    //type password
    .type("jummy0403")
    //spy on the login button
    cy.get(".kEKum > :nth-child(3)")
    //click the login button
    .click("")
    //spy search box
    cy.get(".eyXLr")
    //assert that the search box is visible
    .should("be.visible")
  });
});