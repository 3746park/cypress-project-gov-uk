# Tech Task overview

## HOW TO RUN TESTS...

ASSUMPTIONS:
- cypress installed
- IDE installed (visual studio is what I used)

STEPS...

- open terminal
- ensure you are at the root of the project
- run the following command to run tests: npx cypress run --spec "cypress/e2e/calculateHoliday.spec.js" --browser=chrome -vvv



## COVERAGE

Automation covers the following cases...

- Ability to go from one end of the application to another with no hiccups (desktop E2E happy path)
- Ability to go from one end of the application to another with no hiccups (mobile E2E happy path)
- Ability to start journey again midway through process