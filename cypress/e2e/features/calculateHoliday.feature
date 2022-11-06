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
