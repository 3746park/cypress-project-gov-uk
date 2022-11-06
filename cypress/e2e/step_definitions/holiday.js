// / <reference types="cypress" />

import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const common = require("../../pages/common");

Given("I go to the start page", function () {
  cy.visit('/')
});

Given("I reject cookies", function () {
  cy.get('.govuk-cookie-banner button')
    .contains('Reject additional cookies')
    .click()
});

When("I click the start button", () => {
    cy.get('.govuk-button--start')
    .should('be.visible')
    .click()
});

Then("I complete the Entitlement Based On step", () => {
  cy.get('input[value="days-worked-per-week"]')
    .click()
  common.clickContinueButton() 
});

Then("I complete the Do You Want To Work Out Holiday step", () => {
  cy.get('input[value="full-year"]')
    .click()
  common.clickContinueButton()
});

Then("I complete the Number Of Days Worked step", () => {
  cy.get('#response[type="text"]')
    .type('5')
  common.clickContinueButton() 
});

Then("I land on the Results page", () => {
  cy.get('#result-info')
    .should('be.visible')  
});

Then("I assert holiday entitlement value is {string}", (value) => {
  cy.contains('The statutory holiday entitlement is '+value+' days holiday.')   
});

Given("I set screen resolution to {string}", (value) => {
  cy.viewport(value)   
});

Then("I click Start Again button", () => {
  cy.get('a.govuk-link')
    .contains('Start again')  
    .click() 
});

Then("I see the Holiday Entitlement Based On step has loaded", () => {
  cy.get('h1')
    .contains('Is the holiday entitlement based on')
});

// export const goToStartPage = () => {
//   cy.visit('https://www.gov.uk/calculate-your-holiday-entitlement')
// }

// export const clickStartButton = () => {
//   cy.get('.govuk-button--start')
//     .should('be.visible')
//     .click()
// }

// export const rejectCookies = () => {
//   cy.get('.govuk-cookie-banner button')
//     .contains('Reject additional cookies')
//     .click()
// }

// export const completeEntitlementBasedOnStep = () => {
//   cy.get('input[value="days-worked-per-week"]')
//     .click()
//   clickContinueButton()  
// }

// export const clickContinueButton = () => {
//   cy.get('button.govuk-button')
//     .contains('Continue')
//     .click()
// }

// export const completeDoYouWantToWorkOutHolidayStep = () => {
//   cy.get('input[value="full-year"]')
//     .click()
//   clickContinueButton()
// }

// export const completeNumberOfDaysWorkedStep = () => {
//   cy.get('#response[type="text"]')
//     .type('5')
//   clickContinueButton()    
// }

// export const assertResultsPage = () => {
//   cy.get('#result-info')
//     .should('be.visible')   
// }

// export const assertHolidayEntitlementValue = (value) => {
//   cy.contains('The statutory holiday entitlement is '+value+' days holiday.')  
// }

// export const clickStartAgainButton = () => {
//   cy.get('a.govuk-link')
//     .contains('Start again')  
//     .click()
// }