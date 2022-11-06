/// <reference types="cypress" />

class common {

clickContinueButton = () => {
  cy.get('button.govuk-button')
    .contains('Continue')
    .click()
}

rejectCookies = () => {
  cy.get('.govuk-cookie-banner button')
    .contains('Reject additional cookies')
    .click()
}
}

module.exports = new common();