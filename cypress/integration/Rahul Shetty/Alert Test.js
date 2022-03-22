/// <reference types="Cypress" />

describe('Rahul Shetty Practise', function() 
{

it('Checkboxes, Dropdowns, Buttons etc',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//Window:confirm
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//Child Tab Using Cypress and Jquery
cy.get('#opentab').invoke('removeAttr','target').click()

//Go back to previous page
cy.url().should('include','rahulshettyacademy')
cy.go('back')


















}  )



}  )