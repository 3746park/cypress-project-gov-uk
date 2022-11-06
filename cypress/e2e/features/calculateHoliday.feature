Feature: Users can complete holiday entitlement journey and calculate entitlement

    As a front end user
    I want to be able to calculate holiday entitlement

    Background:
        Given I go to the start page
        Given I reject cookies

    Scenario: User can complete E2E happy path as expected - DESKTOP
        When I click the start button
        Then I complete the Entitlement Based On step 
        Then I complete the Do You Want To Work Out Holiday step
        Then I complete the Number Of Days Worked step
        Then I land on the Results page
        Then I assert holiday entitlement value is "28"

    Scenario: User can complete E2E happy path as expected - MOBILE
        Given I set screen resolution to "iphone-x"
        When I click the start button
        Then I complete the Entitlement Based On step 
        Then I complete the Do You Want To Work Out Holiday step
        Then I complete the Number Of Days Worked step
        Then I land on the Results page
        Then I assert holiday entitlement value is "28"

    Scenario: User can start journey again half way through
        When I click the start button
        Then I complete the Entitlement Based On step 
        Then I complete the Do You Want To Work Out Holiday step
        Then I click Start Again button
        When I click the start button
        Then I see the Holiday Entitlement Based On step has loaded

    Scenario: User unable to provide invalid Number Of Days Worked value
        When I click the start button
        Then I complete the Entitlement Based On step 
        Then I complete the Do You Want To Work Out Holiday step
        Then I provide Number Of Days Worked value of "test"
        Then I click continue
        Then I see error message: "There are only 7 days in a week. Please check and enter a correct value."
        Then I provide Number Of Days Worked value of "7.1"
        Then I click continue
        Then I see error message: "There are only 7 days in a week. Please check and enter a correct value."
        Then I provide Number Of Days Worked value of "8"
        Then I click continue
        Then I see error message: "There are only 7 days in a week. Please check and enter a correct value."
        Then I provide Number Of Days Worked value of "6"
        Then I click continue
        Then I land on the Results page
