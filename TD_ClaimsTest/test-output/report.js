$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vam20/eclipse-workspace/TD_ClaimsTest/src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "No Login",
  "description": "",
  "id": "no-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "No Login Scenario",
  "description": "",
  "id": "no-login;no-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is amazon.com",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cdata\u003e\" in search field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the title of the page is tabs",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "no-login;no-login-scenario;",
  "rows": [
    {
      "cells": [
        "data"
      ],
      "line": 12,
      "id": "no-login;no-login-scenario;;1"
    },
    {
      "cells": [
        "tablets"
      ],
      "line": 13,
      "id": "no-login;no-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "No Login Scenario",
  "description": "",
  "id": "no-login;no-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is amazon.com",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"tablets\" in search field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the title of the page is tabs",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_already_on_Page()"
});
formatter.result({
  "duration": 5885531000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.title_of_page_is_amazon()"
});
formatter.result({
  "duration": 5576400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tablets",
      "offset": 12
    }
  ],
  "location": "StepDefination.user_enter_data_in_search_field(String)"
});
formatter.result({
  "duration": 2315228699,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.the_title_of_the_page_is_tabs()"
});
formatter.result({
  "duration": 132231900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 673996499,
  "status": "passed"
});
});