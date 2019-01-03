$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sony.priyadarshini/Documents/Sony_Personal_Code/CucumberAutomationFramework/src/main/java/feature/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "##without passing any data from feature file"
    },
    {
      "line": 2,
      "value": "#Feature: Gmail Login"
    },
    {
      "line": 3,
      "value": "#  Scenario: Login to Gmail Account"
    },
    {
      "line": 4,
      "value": "#    Given User is already on the login page"
    },
    {
      "line": 5,
      "value": "#    When Page title is Gmail"
    },
    {
      "line": 6,
      "value": "#    Then User enters email id and click Next"
    },
    {
      "line": 7,
      "value": "#    Then User enters password and click Next"
    },
    {
      "line": 8,
      "value": "#    And User is gmail inbox page"
    },
    {
      "line": 9,
      "value": "#"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "##pass data without Example Keyword"
    },
    {
      "line": 12,
      "value": "#Feature: Gmail Login"
    },
    {
      "line": 13,
      "value": "#  Scenario: Login to Gmail Account"
    },
    {
      "line": 14,
      "value": "#    Given User is already on the login page"
    },
    {
      "line": 15,
      "value": "#    When Page title is Gmail"
    },
    {
      "line": 16,
      "value": "#    Then User enters \"sonypriyatest@gmail.com\" id and click Next"
    },
    {
      "line": 17,
      "value": "#    Then User enters \"testpwd123\" and click Next"
    },
    {
      "line": 18,
      "value": "#    And User is gmail inbox page"
    },
    {
      "line": 21,
      "value": "#pass data using examples keyword. Scenario Outline needs to be used instead of Scenario when Examples is used"
    }
  ],
  "line": 22,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "cenario_outline: Login to Gmail Account",
  "description": "",
  "id": "gmail-login;cenario-outline:-login-to-gmail-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Page title is Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters \"\u003cemail\u003e\" id and click Next",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters \"\u003cpassword\u003e\" and click Next",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is gmail inbox page",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "gmail-login;cenario-outline:-login-to-gmail-account;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 31,
      "id": "gmail-login;cenario-outline:-login-to-gmail-account;;1"
    },
    {
      "cells": [
        "sonypriyatest@gmail.com",
        "testpwd123"
      ],
      "line": 32,
      "id": "gmail-login;cenario-outline:-login-to-gmail-account;;2"
    },
    {
      "cells": [
        "dummyemail",
        "dummypwd"
      ],
      "line": 33,
      "id": "gmail-login;cenario-outline:-login-to-gmail-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "cenario_outline: Login to Gmail Account",
  "description": "",
  "id": "gmail-login;cenario-outline:-login-to-gmail-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Page title is Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters \"sonypriyatest@gmail.com\" id and click Next",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters \"testpwd123\" and click Next",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is gmail inbox page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_the_login_page()"
});
formatter.result({
  "duration": 4346243925,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_title_is_Gmail()"
});
formatter.result({
  "duration": 17954341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sonypriyatest@gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_email_id_and_click_Next(String)"
});
formatter.result({
  "duration": 10954316906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpwd123",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_and_click_Next(String)"
});
formatter.result({
  "duration": 68134842,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LT5824\u0027, ip: \u0027fe80:0:0:0:1065:42f5:2145:2975%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50994}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052), userDataDir\u003d/var/folders/bh/5nvtkhn92mg_b9v11xfd6rsjf0pqg_/T/.org.chromium.Chromium.Es6Igg}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f20fcd466963724408b86de27de17789\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:99)\n\tat stepDefinition.LoginStepDefinition.user_enters_password_and_click_Next(LoginStepDefinition.java:40)\n\tat ✽.Then User enters \"testpwd123\" and click Next(/Users/sony.priyadarshini/Documents/Sony_Personal_Code/CucumberAutomationFramework/src/main/java/feature/login.feature:27)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_gmail_inbox_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "cenario_outline: Login to Gmail Account",
  "description": "",
  "id": "gmail-login;cenario-outline:-login-to-gmail-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Page title is Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters \"dummyemail\" id and click Next",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters \"dummypwd\" and click Next",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is gmail inbox page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_the_login_page()"
});
formatter.result({
  "duration": 3671811757,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_title_is_Gmail()"
});
formatter.result({
  "duration": 17056587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dummyemail",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_email_id_and_click_Next(String)"
});
formatter.result({
  "duration": 5367233779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dummypwd",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_and_click_Next(String)"
});
formatter.result({
  "duration": 10325714722,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_gmail_inbox_page()"
});
formatter.result({
  "duration": 18202919,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(@aria-label,\u0027(sonypriyatest@gmail.com)\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LT5824\u0027, ip: \u0027fe80:0:0:0:1065:42f5:2145:2975%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51023}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052), userDataDir\u003d/var/folders/bh/5nvtkhn92mg_b9v11xfd6rsjf0pqg_/T/.org.chromium.Chromium.KhUd39}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8f9f478cdddfa9ed495874a0986dcbe8\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@aria-label,\u0027(sonypriyatest@gmail.com)\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat stepDefinition.LoginStepDefinition.user_is_gmail_inbox_page(LoginStepDefinition.java:47)\n\tat ✽.And User is gmail inbox page(/Users/sony.priyadarshini/Documents/Sony_Personal_Code/CucumberAutomationFramework/src/main/java/feature/login.feature:28)\n",
  "status": "failed"
});
});