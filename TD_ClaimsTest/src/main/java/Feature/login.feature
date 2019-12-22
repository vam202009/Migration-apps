Feature: No Login

Scenario Outline: No Login Scenario

Given user is already on Page
When title of page is amazon.com
When user enter "<data>" in search field
When the title of the page is tabs
Then close the browser

Examples:
  | data |
  |tablets|