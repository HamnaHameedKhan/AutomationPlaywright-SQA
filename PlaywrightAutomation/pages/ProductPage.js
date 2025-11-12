const { expect } = require("@playwright/test");

class ProductPage {
  constructor(page) {
    this.page = page;
  }


   async addToCartById(className) {
    const addButton = this.page.locator(className);

    await addButton.click(); 
    await this.page.waitForTimeout(1000); 
  }

  
  async verifyCartQuantity(quantity) {
    const cartBadge = this.page.locator(".cart-qty");
    
    await expect(cartBadge).toHaveText(`(${quantity})`);
  }
}

module.exports = ProductPage;
