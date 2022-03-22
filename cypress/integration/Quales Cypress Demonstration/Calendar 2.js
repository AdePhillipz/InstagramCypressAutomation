/// <reference types= "cypress" />

describe("Calendar", function () {
    
    it(`Automate Calendar`, function () {
        cy.visit('https://phptravels.net/')
        cy.get('#checkin').click({force: true})
        cy.get('[style="display: block; top: 353px; left: 353.656px;"] > .datepicker-days > .table-condensed')
   });
 });