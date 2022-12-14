@Feature
Feature: Test Automation web demoqa
  
  @Element
  Scenario Outline: As a user, can complate the assertion on element page

    Given I am on Homepage
    When I am click menu element
    When I am select sub menu buttons
    When I am assertion double click
    When I am assertion right click
    When I am assertion click me

  @Interaction
  Scenario Outline: As a user, can complate the assertion on interaction page
  
    Given I am on Homepage
    When I am click menu interaction
    When I am select sub menu dropable
    When I am assertion drag and drop