/// <reference types="cypress" />

class resultsPage {

assertResultsPage = () => {
    cy.get('#result-info')
    .should('be.visible') 
}

assertHolidayEntitlementValue = (value) => {
    cy.contains('The statutory holiday entitlement is '+value+' days holiday.') 
}
}
    
module.exports = new resultsPage();