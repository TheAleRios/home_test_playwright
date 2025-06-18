export class searchPage {
    // Url and selectors
    static readonly url: string = 'http://localhost:3100/search';
    static readonly selectors = {
      searchInput: 'input[name="searchWord"]',
      searchButton: 'button[type="submit"]',
      resultsContainer: 'p#result',
    };
  }