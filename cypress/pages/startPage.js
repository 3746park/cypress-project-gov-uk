/// <reference types="cypress" />

class startPage {

clickStartButton = () => {
    cy.get('.govuk-button--start')
    .should('be.visible')
    .click()
}
}
    
module.exports = new startPage();