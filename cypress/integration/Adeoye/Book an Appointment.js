/// <reference types= "cypress" />

///This Function Is To Describe a Test Suite
describe("Book an appointment with CURA Healthcare Service", function () {
    
    ///This Function Is To Describe a Test Case
    it(`Visit CURA Url`, function () {
    ///Visit CURA Url
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
    });


    ///This Funtion is To Describe a Test Case
    it('Make an Appointment', function () {
        ///Make an Appointment
        cy.get('#btn-make-appointment').click()
    });


    ///This Function is To Describe a Test Case
    it('Login Test', function () {
        ///Spy the username field
        cy.get('#txt-username')
        ///type username
        .type("John Doe")
        ///spy on the password field
        cy.get('#txt-password')
        ///Type Password
        .type("ThisIsNotAPassword")
        ///spy on the login button
        cy.get('#btn-login').click()
    });


    ///This Function is to Describe a Test case
    it ('Select Facility preference', function () {
        ///spy on the facility box
        cy.get(':nth-child(1) > .col-sm-offset-3')
         ///select facilty preference
         cy.get('#combo_facility').select("Seoul CURA Healthcare Center")
    });


    ///This Function is To Describe a Test Case
    it('Check The Re-Admission Box', function() {
        ///spy and click on Re-Admission box
        cy.get('.checkbox-inline').click("")
    });


    ///This Function is To Describe a Test Case
    it('Select Healthcare Program Preference', function() {
    ///Select Healthcare Prefence
    cy.get('.col-sm-4 > :nth-child(2)').click("")
    })


    ///This Function is To Describe a Test Case
    it('Choose a Visit Date', function() {
         ///spy on date box
         cy.get(':nth-child(4) > .col-sm-offset-3')
         ///type date
         .type("06/03/2022")
    });


    ///This Function is To Describe a Test Case
    it('Write a Comment', function() {
         ///spy on comment box
         cy.get(':nth-child(5) > .col-sm-offset-3')
         ///type comment
         .type("Hello Masseuse, I'm booking an appointment on behalf of Sarah Aboh who is living a Lagos life. She went hustling for fuel on 05/03/2022 and now needs a thorough massage. I hope she will enjoy your services, thank you.")
    });


    ///This Function is To Describe a Test Case
    it('Click The Appointment Button', function() {
        ///spy and click on the Book Appointment button
        cy.get('#btn-book-appointment').click("")
        .then(function()
        {
       console.log('sf')
        })
});
});