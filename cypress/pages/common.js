/// <reference types="cypress" />

class common {

clickContinueButton = () => {
  cy.get('button.govuk-button')
    .contains('Continue')
    .click()
}
}

module.exports = new common();