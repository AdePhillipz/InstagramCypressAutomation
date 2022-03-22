class FramePage
{

visitUrl()
{
    return cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}

loadFrame()
{
    return cy.frameLoaded('#courses-iframe')
}

findMentorship()
{
    return cy.iframe().find("a[href*='mentorship']")
}

findVisibleRow()
{
    return cy.iframe().find('div.row:visible')
}
}

export default FramePage