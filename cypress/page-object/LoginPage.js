class LoginPage {
  get usernameInput() { 
    return cy.get('[data-test="username"]'); 
  }
  get passwordInput() { 
    return cy.get('[data-test="password"]'); 
  }
  get loginButton() {
    return cy.get('[data-test="login-button"]'); 
  }
  get errorMessage() { 
    return cy.get('[data-test="error"]'); 
  }

  navigate(url) {
    cy.visit(url);
  }

  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();