import { Given, When, Then } from '@cucumber/cucumber';
import { loginPage } from '../pages/loginPage';
import { page } from '../support/hooks';
import { expect } from '@playwright/test';

Given('user goes to the login page',{ timeout: 20000 }, async function () {
  await page.goto(loginPage.url);
});

When('user enters {string} and {string}', async function (username: string, password: string) {
  await page.fill(loginPage.selectors.usernameField, username);
  await page.fill(loginPage.selectors.passwordField, password);
//  await page.waitForTimeout(2000);
});

When('user clicks on the login button', async function () {
  await page.click(loginPage.selectors.signinButton);

});

Then('user should see the welcome page with a welcome message for {string}', async function (username: string) {

  const welcomeMessage = await  page.locator(loginPage.selectors.welcomeMessage).textContent();
  const userWelcomeMessage = await page.locator(loginPage.selectors.userWelcomeMessage).textContent();

  expect(welcomeMessage).toBe('Welcome!');
  expect(userWelcomeMessage).toBe(username);
 

});

Then('user sees error message {string}', async function (errorMessage: string) {
  
  const Message = await page.locator(loginPage.selectors.errorMessage).textContent();
  expect(errorMessage).toBe(errorMessage);
});

