/// <reference types= "cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from '../Quales PageObject/HomePage'
import DropdownPage from '../Quales PageObject/DropdownPage'
import FramePage from '../Quales PageObject/FramePage';

describe("Cypress Demonstrations", function () {

  before(() => {
    //Resolve Promise
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
  })
      
    
    it('Visit, Click and Type Actions', function () {
      const homePage=new HomePage()
        //Visit Action
        homePage.visitUrl()
        //Click Actions
        homePage.getElementTab().click()
        homePage.getTextBox().click()
        //TypeActions
        homePage.getFullNameField().type(this.data.name)
        homePage.getEmailField().type(this.data.email)
        homePage.getCurrentAddressField().type(this.data.address)
        homePage.getPermanentAddressField().type(this.data.address)
        homePage.getSubmitButton().click()
    })



    it('Automating Dropdows, Check Boxes and Radio Button', function() {
      const dropddownPage=new DropdownPage()

      dropddownPage.visitUrl()
      dropddownPage.getDropdownExample().select('option3').should('have.value','option3')
      dropddownPage.getCheckBoxOption1().check().should('be.checked')
      dropddownPage.getAutoCompleteField().type('Nig')
      dropddownPage.getSuggestedLists().each(($e1, index, $list) => {

        if($e1.text()==="Nigeria")
        {
            $e1.click()
        }
    })
      dropddownPage.getAutoCompleteField().should('have.value','Nigeria')
      dropddownPage.getRadioButton2().check().should('be.checked').and('have.value','radio2')
  })

  
    it(`Working on iFrames`, function () {
      const framePage=new FramePage()
       framePage.visitUrl()
       framePage.loadFrame()

       framePage.findMentorship().eq('0').click()
       framePage.findVisibleRow().should('have.length','7')


        
   });
 });