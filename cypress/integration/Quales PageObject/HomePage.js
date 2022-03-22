class HomePage
{

getElementTab()
{
    return cy.get(':nth-child(1) > .group-header > .header-wrapper')
}

getTextBox()
{
    return cy.get(':nth-child(1) > .element-list > .menu-list > #item-0')
}

getFullNameField()
{
    return cy.get('#userName')
}

getEmailField()
{
    return cy.get('#userEmail')
}

getCurrentAddressField()
{
    return cy.get('#currentAddress')
}

getPermanentAddressField()
{
    return cy.get('#permanentAddress')
}

getSubmitButton()
{
    return cy.get('#submit')
}

visitUrl()
{
    return cy.visit('https://demoqa.com/select-menu')
}

}

export default HomePage