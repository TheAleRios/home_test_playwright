export class checkoutPage {
  // Url and selectors
  static readonly url: string = 'http://localhost:3100/checkout';
  static readonly selectors = {
    fullnameField: 'input[id="fname"]',
    emailField: 'input[id="email"]',
    addressField: 'input[id="adr"]',
    cityField: 'input[id="city"]',
    stateField: 'input[id="state"]',
    zipField: 'input[id="zip"]',
    cnameField: 'input[id="cname"]',
    ccnumField: 'input[id="ccnum"]',
    selectMonth: 'select[id="expmonth"]',
    expyearField: 'input[id="expyear"]',
    cvvField: 'input[id="cvv"]',
    checkoutButton: 'button.btn:has-text("Continue to checkout")',
    shippingCheckbox: 'input[name="sameadr"]',
    orderNumber: '[data-id="ordernumber"]',
    productPrices: '.container > p:not(:has-text("Total")) > span.price',
    totalPrice: 'p:has-text("Total") > span.price',

  };
}