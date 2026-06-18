import LoginPage from '../page-object/LoginPage';
import ProductListPage from '../page-object/ProductListPage';
import CartPage from '../page-object/CartPage';
import CheckoutPage from '../page-object/CheckoutPage';
import config from '../fixtures/config.json';

describe('SauceDemo E2E Test', () => {
  beforeEach(() => {
    LoginPage.navigate('https://www.saucedemo.com/');
  });

  it('Should complete a purchase successfully', () => {
    // Step 1: Login
    LoginPage.login(config.validUser, config.password);
    cy.url().should('include', '/inventory.html');

    // Step 2: Add any two products to the cart
    ProductListPage.addProductToCart('Sauce Labs Backpack');
    ProductListPage.addProductToCart('Sauce Labs Bike Light');

    // Step 3: Go to cart and proceed to checkout
    ProductListPage.goToCart();
    CartPage.proceedToCheckout();

    // Step 4: Fill in checkout information
    CheckoutPage.fillInformation('Ploy', 'QA', '10110');

    // Step 5: Verify cart count and total price
    CheckoutPage.totalPriceLabel.should('contain.text', 'Total: $43.18');
    CheckoutPage.cartCount.should('have.text', '2');
    CheckoutPage.cartItemNames.should('contain.text', 'Sauce Labs Backpack');
    CheckoutPage.cartItemNames.should('contain.text', 'Sauce Labs Bike Light');
    CheckoutPage.cartItemPrices.should('contain.text', '$29.99');
    CheckoutPage.cartItemPrices.should('contain.text', '$9.99');
   
    // Step 6: Verify order completion
    CheckoutPage.completeCheckout(); //click finish button
    CheckoutPage.completeHeader.should('have.text', 'Thank you for your order!');
  });

  it('Should display error message for locked out user', () => {
    // ทดสอบกรณีผู้ใช้โดนบล็อกระบบต้องแสดงerror message
    LoginPage.login(config.invalidUser, config.password);
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out.');
  });

  it('Should display error message for invalid username or password', () => {
    LoginPage.login('pppp', '11111');
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });


});


