export class searchPage {
    // Url and selectors
    static readonly baseUrl = process.env.BASE_URL || 'http://localhost:3100';
    static readonly url = `${searchPage.baseUrl}/search`;
    static readonly selectors = {
      searchInput: 'input[name="searchWord"]',
      searchButton: 'button[type="submit"]',
      resultsContainer: 'p#result',
    };
  }