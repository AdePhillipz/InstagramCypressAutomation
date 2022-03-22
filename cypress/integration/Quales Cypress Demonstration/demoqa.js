/// <reference types= "cypress" />

describe("Tasks", function () {
    
    it(`Tasks`, function () {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
      cy.get('#checkBoxOption1').check().should('be.checked')
      cy.get('#autocomplete').type('Nig')
      cy.get('.ui-menu-item').each(($e1, index, $list) => {

        if($e1.text()==="Nigeria")
        {
            $e1.click()
        }
    })
      cy.get('#autocomplete').should('have.value','Nigeria')
      cy.get('input[value="radio2"]').check().should('be.checked').and('have.value','radio2')



   });
 });