const { expect } = require('@playwright/test');

class ConfirmationPage {
  constructor(page) {
    this.page = page;
  }

  async verifyThankYou() {
    await expect(this.page.locator("h1")).toHaveText("Thank you");
  }

 async captureOrderNumber() {
     const orderText = await this.page.locator("div.section.order-completed ul.details li").first().textContent();
    const orderNumber = orderText.match(/\d+/)[0];
    console.log("Order Number:", orderNumber);
    return orderNumber;
  }
}

module.exports = ConfirmationPage;
