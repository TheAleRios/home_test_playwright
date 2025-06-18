import { Given, When, Then } from '@cucumber/cucumber';
import { checkoutPage } from '../pages/checkoutPage';
import { page } from '../support/hooks';
import { expect } from '@playwright/test';

Given('user goes to the checkout page',{ timeout: 20000 }, async function () {
  await page.goto(checkoutPage.url);
});

Given('the cart total price is correctly displayed', async function () {

   const productPriceElements = await page.locator(checkoutPage.selectors.productPrices).allTextContents();
   const prices = productPriceElements.map(text => parseFloat(text.replace('$', '')));
   const calculatedTotal = prices.reduce((sum, price) => sum + price, 0);
 
   const totalText = await page.locator(checkoutPage.selectors.totalPrice).innerText();
   const displayedTotal = parseFloat(totalText.replace('$', ''));

   expect(calculatedTotal).toBeCloseTo(displayedTotal, 2);
});


When('user enters {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', async function (fullname: string, email: string, address: string, city: string, state: string, zip: string, cname: string, ccnum: string, expyear: string, cvv: string) {
  await page.fill(checkoutPage.selectors.fullnameField, fullname);
  await page.fill(checkoutPage.selectors.emailField, email);
  await page.fill(checkoutPage.selectors.addressField, address);
  await page.fill(checkoutPage.selectors.cityField, city);
  await page.fill(checkoutPage.selectors.stateField, state);
  await page.fill(checkoutPage.selectors.zipField, zip);
  await page.fill(checkoutPage.selectors.cnameField, cname);
  await page.fill(checkoutPage.selectors.ccnumField, ccnum);
  await page.fill(checkoutPage.selectors.expyearField, expyear);
  await page.fill(checkoutPage.selectors.cvvField, cvv);
});

When('user selects {string} as the expiration month', async function (expmonth: string) {
  await page.selectOption(checkoutPage.selectors.selectMonth, expmonth);
  });

When ('user checks the shipping address checkbox', async function () {
  const checkbox = page.locator(checkoutPage.selectors.shippingCheckbox);

  const isChecked = await checkbox.isChecked().catch(e => {
    console.error('isChecked error:', e);
    return false;
  });

  if (!isChecked) {
    await checkbox.check();
  } else {
    console.log('Already checked');
  }

  });

  When ('user unchecks the shipping address checkbox', async function () {

  const checkbox = page.locator(checkoutPage.selectors.shippingCheckbox);

  const isChecked = await checkbox.isChecked().catch(e => {
    console.error('isChecked error:', e);
    return false;
  });

  if (isChecked) {
    await checkbox.uncheck();
  } else {
    console.log('Already unchecked');
  }

    });

When('user clicks on the checkout button',{ timeout: 20000 }, async function () {

const button = page.locator('button.btn:has-text("Continue to checkout")');

await button.waitFor({ state: 'visible', timeout: 5000 }); 
await expect(button).toBeEnabled();                      
await button.click();     

});

Then ('user should see an order confirmation number', async function () {
  const text = await page.locator(checkoutPage.selectors.orderNumber).textContent();
  expect(text?.trim()).toMatch(/^Order Number: \d+$/);
});

When('user prepares to capture browser alert', function () {
  this.dialogPromise = new Promise(resolve => {
    page.once('dialog', dialog => {
      this.alertDialog = dialog;
      resolve(dialog);
    });
  });
});


Then('user verifies that alert appeared', async function () {
  const dialog = await this.dialogPromise;
  console.log('There is an alert with message:', dialog.message());
});


Then('user accepts the alert', async function () {
  if (!this.alertDialog) {
    throw new Error('No alert was captured');
  }

  await this.alertDialog.accept();
  this.alertDialog = null;

});

Then('no browser alert should be present', async function () {

  if (this.alertDialog) {
    throw new Error('Alert is still present');
  }

});