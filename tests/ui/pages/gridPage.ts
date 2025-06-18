export class gridPage {
    // Url and selectors
    static readonly url: string = 'http://localhost:3100/grid';
    static readonly selectors = {
      items: 'div#menu > div.item',
      itemName: 'h4[data-test-id="item-name"]', 
      itemPrice: 'p[id="item-price"]',  
      itemButton: '[data-test-id="add-to-order"]',

    };
  }