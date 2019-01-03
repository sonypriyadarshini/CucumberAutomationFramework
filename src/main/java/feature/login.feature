##without passing any data from feature file
#Feature: Gmail Login
#  Scenario: Login to Gmail Account
#    Given User is already on the login page
#    When Page title is Gmail
#    Then User enters email id and click Next
#    Then User enters password and click Next
#    And User is gmail inbox page
#
#
##pass data without Example Keyword
#Feature: Gmail Login
#  Scenario: Login to Gmail Account
#    Given User is already on the login page
#    When Page title is Gmail
#    Then User enters "dummyemail1" id and click Next
#    Then User enters "dummypwd" and click Next
#    And User is gmail inbox page

##pass data using Data Tables
#Feature: Gmail Login using Data Tables
#  Scenario: Login to Gmail Account using Data Tables
#    Given User is already on the login page
#    When Page title is Gmail
#    Then User enters email id and click Next
#      | dummyemail1 |
#    Then User enters password and click Next
#      |dummypwd|
#    And User is gmail inbox page


#pass data using Examples keyword. Scenario Outline needs to be used instead of Scenario when Examples is used
Feature: Gmail Login
  Scenario Outline: cenario_outline: Login to Gmail Account
    Given User is already on the login page
    When Page title is Gmail
    Then User enters email "<email>" and click Next
    Then User enters password "<password>" and click Next
    And User is gmail inbox page

  Examples:
    | email | password |
    | dummyemail1 | dummypwd1 |
    | dummyemail2 | dummypwd2 |