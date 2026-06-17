class ProductListPage {
  get cartBadge() { 
    return cy.get('.shopping_cart_badge'); 
  }
  get cartButton() { 
    return cy.get('.shopping_cart_link'); 
  }

  addProductToCart(productName) {
    // ดึงสินค้าจากข้อความชื่อสินค้าแล้วกดปุ่ม Add to cart ด้านใน
    cy.contains('.inventory_item', productName).find('button').click();
  }
  goToCart() { 
    this.cartButton.click(); 
  }
}
export default new ProductListPage();