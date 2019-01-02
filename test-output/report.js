$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sony.priyadarshini/Documents/Sony_Personal_Code/CucumberAutomationFramework/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login to Gmail Account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Page title is Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters email id and click Next",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters password and click Next",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is gmail inbox page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_the_login_page()"
});
formatter.result({
  "duration": 5550231885,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_title_is_Gmail()"
});
formatter.result({
  "duration": 24879213,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_email_id_and_click_Next()"
});
formatter.result({
  "duration": 10467389491,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_password_and_click_Next()"
});
formatter.result({
  "duration": 221363627,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_gmail_inbox_page()"
});
formatter.result({
  "duration": 32594150354,
  "status": "passed"
});
});