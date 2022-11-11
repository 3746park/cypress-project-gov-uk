// / <reference types="cypress" />

import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import resultsPage from "../../pages/resultsPage";
import startPage from "../../pages/startPage";
const common = require("../../pages/common");

Given("I go to the start page", function () {
  cy.visit('/')
});

Given("I reject cookies", function () {
  common.rejectCookies()
});

When("I click the start button", () => {
startPage.clickStartButton()
});

Then("I complete the Entitlement Based On step", () => {
  cy.get('input[value="days-worked-per-week"]')
    .click()
  common.clickContinueButton() 
});

Then("I click continue", () => {
  common.clickContinueButton() 
});

Then("I provide Number Of Days Worked value of {string}", (value) => {
  cy.get('[data-question-key="how-many-days-per-week"] input[type="text"]')
    .clear()
    .type(value)
});

Then("I see error message: {string}", (value) => {
  cy.get('.govuk-error-message')
    .contains(value)
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
  resultsPage.assertResultsPage()  
});

Then("I assert holiday entitlement value is {string}", (value) => {
  resultsPage.assertHolidayEntitlementValue(value)  
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

Then("I assert gov logo on page", () => {
  cy.percySnapshot('logo',{ scope: '#logo' });
});

Then("I assert cookie banner", () => {
  cy.percySnapshot('cookieBanner',{ scope: '#global-cookie-message' });
});