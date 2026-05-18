# Playwright Automation Framework (JavaScript + POM)

## Project Overview
This project automates UI testing using Playwright with JavaScript and Page Object Model (POM).I created reusable values like application URLs into a separate utility file to improve maintainability and avoid hardcoded test data

---

## Tools Used
- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

---

## How to Install

npm install

To Install browsers:

npx playwright install

## How to Run Tests

Run all tests: npx playwright test

Run in headed mode: npx playwright test --headed

## Project Structure

pages/
tests/
utils
package.json
playwright.config.js
README.md

## Test Scenarios

### 1. Basic Assertions
- Verify page title
- Verify visible elements

### 2. Search Scenario
- Search for Restaurants
- Validate results are displayed

## Assumptions/Limitations
- Website UI may change over time
- Locators may need updates
- Tripadvisor site has bot-detection and CAPTCHA protection mechanisms that may intermittently block automated browser sessions.


## Improvements
- Add CI/CD pipeline
- Add Allure reports
- Add cross-browser testing