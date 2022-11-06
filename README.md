# Tech Task overview

## HOW TO RUN TESTS...

### ASSUMPTIONS:
- Cypress installed
- IDE installed (visual studio is what I used)
- NPM install dependencies

### STEPS...

- Open terminal
- Ensure you are at the root of the project
- Run the following command to run tests: `npx cypress run --browser=chrome`

Alternatively you can run via the Cypress runner by running: `npx cypress open`
(from here you can select 'E2E Testing' -> chrome -> 'Start E2E Testing in Chrome' -> click 'calculateHoliday.feature')


## COVERAGE

Automation covers the following cases...

- User can complete E2E happy path as expected - DESKTOP
- User can complete E2E happy path as expected - MOBILE
- User can start journey again half way through
- User unable to provide invalid Number Of Days Worked value


## TESTING RECOMMENDATIONS

If this was a project in flight, I would look to implement the following in the medium-long term:

1) *Groups/tags* for the scenarios in the test suite, specifically to categorise tests based on their importance, and from there run more important tests more frequently.
2) Implement *reporting* to track performance and potentially defect clustering (eg: where are the most common failures flagged up)
3) I would expand on the combinations of *different options that a user could take in the journey* (eg: not limit the E2E tests to one specific set of input data)
4) *Integrate with a device testing provider*, prefferably Browserstack, so that tests can run in real browsers, on a range of real devices
5) Make the tests more *scalable and re-usable* so they are maintainable with ease as the suite grows.

## REPORTING

I've created a Cypress dashboard and run the tests there to show how I would report/track executions in a pipeline. 

In order to access this please do the following:
- Go to https://dashboard.cypress.io/login/email 
- Provide this email address: `samparker787@gmail.com`
- Provide this password: `CypressDashTest123!` - NOTE: there is nothing sensitive here, only test runs specific to this project. 
- Go into `Sam's Test Organisation`
- In the 'Default Project' you will see the runs as well as reporting options which would grow over time nicely