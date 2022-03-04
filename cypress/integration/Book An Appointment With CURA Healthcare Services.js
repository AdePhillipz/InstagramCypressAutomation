/// <reference types= "cypress" />

///This Function Is To Describe The Test Suite
describe("Book an appointment with CURA", function () {
    
  ///This Function Is To Describe The Test Case
  it(`Visit CURA, Login and and book an apoointment`, function () {
  //Visit CURA
  cy.visit("https://katalon-demo-cura.herokuapp.com/")
  ///Click Make an Appointment button
  cy.get('#btn-make-appointment').click()
  ///Spy on the username field
  cy.get('#txt-username')
  ///type username
  .type("John Doe")
  ///spy on the password field
  cy.get('#txt-password')
  .type("ThisIsNotAPassword")
  ///spy on the login button
  cy.get('#btn-login').click()
  ///spy on the facility box
  cy.get(':nth-child(1) > .col-sm-offset-3')
  ///select facilty preference
  cy.get('#combo_facility').select("Seoul CURA Healthcare Center")
  ///spy on re-admission box
  cy.get('.checkbox-inline').click("")
  cy.get('.col-sm-4 > :nth-child(2)').click("")
  ///spy on date box
  cy.get(':nth-child(4) > .col-sm-offset-3')
  ///type date
  .type("05/03/2022")
  ///spy on comment box
  cy.get(':nth-child(5) > .col-sm-offset-3')
  ///type comment
  .type("Hello Sarah Aboh, this task is actually challenging and technical but I love it. Hope this helps. Have a nice day dear.")
  ///spy on the Book Appointment button
  cy.get('#btn-book-appointment').click("")
});
});