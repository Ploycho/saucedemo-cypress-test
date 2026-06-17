class CheckoutPage {
  get firstNameInput() { 
    return cy.get('[data-test="firstName"]'); 
  }
  get lastNameInput() { 
    return cy.get('[data-test="lastName"]'); 
  }
  get postalCodeInput() { 
    return cy.get('[data-test="postalCode"]'); 
  }
  get continueButton() { 
    return cy.get('[data-test="continue"]'); 
  }
  get totalPriceLabel() { 
    return cy.get('.summary_total_label'); 
  }
  get finishButton() { 
    return cy.get('[data-test="finish"]'); 
  }
  get completeHeader() { 
    return cy.get('.complete-header'); 
 }
  get cartItemNames() {
    return cy.get('.inventory_item_name');
  }
  get cartItemPrices() {
    return cy.get('.inventory_item_price');
  }
  get cartCount() {
    return cy.get('.shopping_cart_badge');
  }

  fillInformation(firstName, lastName, postalCode) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.postalCodeInput.type(postalCode);
    this.continueButton.click();
  }

  completeCheckout() { 
    this.finishButton.click(); 
  }
}

export default new CheckoutPage();