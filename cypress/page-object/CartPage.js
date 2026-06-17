class CartPage {
  get checkoutButton() { 
    return cy.get('[data-test="checkout"]'); 
  }

  proceedToCheckout() { 
    this.checkoutButton.click();
  }
}
export default new CartPage();