Feature: Gmail Login
  Scenario: Login to Gmail Account
    Given User is already on the login page
    When Page title is Gmail
    Then User enters email id and click Next
    Then User enters password and click Next
    And User is gmail inbox page