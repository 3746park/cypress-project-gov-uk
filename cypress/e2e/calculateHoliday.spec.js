// / <reference types="cypress" />
import { 
  goToStartPage 
} from '../pages/holiday';
import { 
  clickStartButton,
  rejectCookies,
  completeEntitlementBasedOnStep,
  completeDoYouWantToWorkOutHolidayStep,
  completeNumberOfDaysWorkedStep,
  assertResultsPage,
  assertHolidayEntitlementValue,
  clickStartAgainButton
} from '../pages/holiday';

context('Test ability to use calculate holiday entitlement functionality', () => {
  beforeEach(() => {
    goToStartPage()
    rejectCookies()
  })

it('can complete E2E happy path - desktop', () => {
  clickStartButton() 
  completeEntitlementBasedOnStep()
  completeDoYouWantToWorkOutHolidayStep()
  completeNumberOfDaysWorkedStep()
  assertResultsPage()
  assertHolidayEntitlementValue(28)
  })  

it('can complete E2E happy path - mobile', () => {
  cy.viewport('iphone-x')
  clickStartButton() 
  completeEntitlementBasedOnStep()
  completeDoYouWantToWorkOutHolidayStep()
  completeNumberOfDaysWorkedStep()
  assertResultsPage()
  assertHolidayEntitlementValue(28)
    })  

it('can start journey again half way through', () => {
  clickStartButton() 
  completeEntitlementBasedOnStep()
  completeDoYouWantToWorkOutHolidayStep()
  clickStartAgainButton()
  clickStartButton() 
  })

})