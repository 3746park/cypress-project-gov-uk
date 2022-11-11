Feature: Visual assertions against holiday entitlement page

    As a front end user
    I want to see the initial start page with relevant visuals

    Background:
        Given I go to the start page

    Scenario: User can see GOV logo as expected
        Given I reject cookies
        Then I assert gov logo on page

    Scenario: User can see GOV cookie banner as expected
        Then I assert cookie banner