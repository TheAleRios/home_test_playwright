# Cucumber with Playwright Framework

This repository demonstrates how to set up and run end-to-end tests using Cucumber and Playwright. It provides a structured approach to writing and executing tests for web applications.

## System Requirements

- **Node

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   npx playwright install
   ```

## Running Tests
1. To execute the tests, use the following command:
   ```bash
   npm run test
   ```   

###### This command performs the following actions:
###### - require-module ts-node/register: Registers TypeScript support.
###### - require ./tests/ui/support/hooks.ts: Includes setup hooks before tests run.
###### - require ./tests/ui/step_definitions/*.ts: Loads step definitions for the tests.
###### - format progress-bar: Displays a progress bar during test execution.
###### - ./tests/ui/features/*.feature: Specifies the location of feature files to execute.
###### - generate html reports

2. Also you can use another command to run test in different browsers:
   ```bash
   npm run test:firefox
   ``` 

   ```bash
   npm run test:chromium
   ```   

   ```bash
   npm run test:webkit
   ```   


## Project Structure

```bash
.
├── tests/
│   └── ui/
│       ├── features/
│       │   ├── checkoutPage.feature
│       │   ├── gridPage.feature
│       │   ├── loginPage.feature
│       │   └── searchPage.feature
│       │  
│       ├── pages/
│       │   ├── checkoutPage.ts
│       │   ├── gridPage.ts
│       │   ├── loginPage.ts
│       │   └── searchPage.ts
│       ├── step_definitions/
│       │   ├── checkoutPage.steps.ts
│       │   ├── gridPage.steps.ts
│       │   ├── loginPage.steps.ts
│       │   └── searchPage.steps.ts
│       └── support/
│           └── hooks.ts
├── reports/
├── package.json
├── cucumber.js
├── generateReport.js
├── README.md
├── playwright.config.ts
└── tsconfig.json


```
- tests/: Contains test scripts that utilize Playwright for browser automation.
- features/: Contains Gherkin feature files and corresponding step definitions.
- pages/: Define pages url and locators
- step_definitions/: Implements the steps defined in feature files.
- support/: Define support file (hooks and utils files)
- package.json: Manages project dependencies and scripts.
- playwright.config.js: Configures Playwright settings.
- cucumber.js: Configures Cucumber settings.


## Docker Integration

Additional Notes
- Installing with Docker:

Docker work is aimed to improve environment setup
```bash
   docker build -t playwright-tests .
   ```
This step installs the container.

```bash
   docker run --rm playwright-tests
   ```
This step runs all the tests in the container.

## Reports
After the test completes, the user can run:
```bash
   npm run generateReport
   ```
Test execution reports are generated in the ./reports directory. You can open the cucumber_report.html file in your browser to view a detailed summary of the results.

- Report examples:
![Report image 1](./reports/examples/report_01.png)
![Report image 2](./reports/examples/report_02.png)


Feel free to contribute to this framework or report issues via the repository's issue tracker.

##

 ###### Author: Alejandro Rios 