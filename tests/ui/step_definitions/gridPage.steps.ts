import { Given, When, Then } from '@cucumber/cucumber';
import { gridPage } from '../pages/gridPage';
import { page } from '../support/hooks';
import { expect } from '@playwright/test';

Given('user goes to the grid page',{ timeout: 20000 }, async function () {
  await page.goto(gridPage.url);
});

When('user checks the grid item {string} in position {string} is present', async function (itemName: string, positionStr: string) {
  const position = parseInt(positionStr, 10) - 1; 

  const items = await page.locator(gridPage.selectors.items); 
  const count = await items.count();

  if (position >= count) {
    throw new Error(`Position ${position + 1} is out of range. There are only ${count} items.`);
  }

  const item = items.nth(position);
  const itemTitle = await item.locator(gridPage.selectors.itemName).innerText();
  const cleanName = itemTitle.trim();

  expect(cleanName).toBe(itemName);

});

Then('user should see that the price of {string} in position {string} is {string}', async function (itemName: string, positionStr: string, priceStr: string) {
  const position = parseInt(positionStr, 10) - 1; 

  const items = await page.locator(gridPage.selectors.items); 
  const count = await items.count();

  if (position >= count) {
    throw new Error(`Position ${position + 1} is out of range. There are only ${count} items.`);
  }

  const item = items.nth(position);
  const itemTitle = await item.locator(gridPage.selectors.itemName).innerText();
  const itemPrice = await item.locator(gridPage.selectors.itemPrice).innerText();

  const cleanName = itemTitle.trim();

  expect(cleanName).toBe(itemName);
  expect(itemPrice).toBe(priceStr);



});

Then('all the items have a non empty title, price, image and a button', async function () {
  const items = page.locator(gridPage.selectors.items);
  const itemCount = await items.count();

  for (let i = 0; i < itemCount; i++) {
    const item = items.nth(i);

    // ✅ Verify title
    const title = await item.locator(gridPage.selectors.itemName).innerText();
    expect(title.trim()).not.toBe('');

    // ✅ Verify price
    const price = await item.locator(gridPage.selectors.itemPrice).innerText();
    expect(price.trim()).not.toBe('');

    // ✅ Verify image
    const imgSrc = await item.locator('img').getAttribute('src');
    expect(imgSrc).not.toBeNull();
    expect(imgSrc?.trim()).not.toBe('');

    // ✅ Verify button
    const button = item.locator(gridPage.selectors.itemButton);
    await expect(button).toBeVisible();

    console.log(`✅ Item ${i + 1} OK`);
  }
});

