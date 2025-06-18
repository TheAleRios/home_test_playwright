import { Given, When, Then } from '@cucumber/cucumber';
import { searchPage } from '../pages/searchPage';
import { page } from '../support/hooks';
import { expect } from '@playwright/test';

Given('user goes to the search page',{ timeout: 20000 }, async function () {
  await page.goto(searchPage.url);
});

When('user searches for {string}', { timeout: 5000 }, async function (searchWord: string) {
  await page.waitForSelector(searchPage.selectors.searchInput, { state: 'visible' });
  await page.fill(searchPage.selectors.searchInput, searchWord);

});

When('user click on search button', { timeout: 5000 }, async function () {
  await page.waitForSelector(searchPage.selectors.searchButton, { state: 'visible' });
  await page.click(searchPage.selectors.searchButton);
});

Then('user should see the result {string}', async function (expectedResult: string) {
  const resultLocator = page.locator(searchPage.selectors.resultsContainer);
  await expect(resultLocator).toHaveText(expectedResult, { timeout: 5000 });

});