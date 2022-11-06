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

- Ability to go from one end of the application to another with no hiccups (desktop E2E happy path)
- Ability to go from one end of the application to another with no hiccups (mobile E2E happy path)
- Ability to start journey again midway through process


## TESTING RECOMMENDATIONS

If this was a project in flight, I would look to implement the following in the medium-long term:

1) Groups/tags for the scenarios in the test suite, specifically to categorise tests based on their importance, and from there run more important tests more frequently.
2) Implement reporting to track performance and potentially defect clustering (eg: where are the most common failures flagged up)
3) I would expand on the combinations of different options that a user could take in the journey (eg: not limit the E2E tests to one specific set of input data)
4) Integrate with a device testing provider, prefferably Browserstack, so that tests can run in real browsers, on a range of real devices