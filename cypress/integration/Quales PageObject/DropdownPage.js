class DropdownPage
{

getDropdownExample()
{
    return cy.get('#dropdown-class-example')
}

getCheckBoxOption1()
{
    return cy.get('#checkBoxOption1')
}

getAutoCompleteField()
{
    return cy.get('#autocomplete')
}

getSuggestedLists()
{
    return cy.get('.ui-menu-item')
}

getRadioButton2()
{
    return cy.get('input[value="radio2"]')
}

visitUrl()
{
    return cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
}
}

export default DropdownPage