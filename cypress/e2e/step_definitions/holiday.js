// / <reference types="cypress" />

import {
  Given,
  // When,
  // Then,
} from "@badeball/cypress-cucumber-preprocessor";
// const loginPage = require("../../pages/LoginPage");

Given("I go to the start page", () => {
  cy.visit('https://www.gov.uk/calculate-your-holiday-entitlement')
});

Given("I click the start button", () => {
    cy.get('.govuk-button--start')
    .should('be.visible')
    .click()
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