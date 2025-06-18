export class gridPage {
    // Url and selectors
    static readonly baseUrl = process.env.BASE_URL || 'http://localhost:3100';
    static readonly url = `${gridPage.baseUrl}/grid`;
    static readonly selectors = {
      items: 'div#menu > div.item',
      itemName: 'h4[data-test-id="item-name"]', 
      itemPrice: 'p[id="item-price"]',  
      itemButton: '[data-test-id="add-to-order"]',

    };
  }