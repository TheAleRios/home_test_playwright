export class loginPage {
    // Url and selectors
    static readonly url: string = 'http://localhost:3100/login';
    static readonly selectors = {
      usernameField: 'input[id="username"]',
      passwordField: 'input[id="password"]',
      signinButton: 'button[id="signin-button"]',
      welcomeMessage: 'div[id="welcome-message"] h2',
      userWelcomeMessage: 'p[data-id="username"]',
      errorMessage: 'h2[id="message"]',
    };
  }