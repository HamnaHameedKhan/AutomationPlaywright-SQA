class CartPage {
  constructor(page) {
    this.page = page;
  }

  async goToCheckout() {
    await this.page.click("text=Shopping cart");

    const termsCheckbox = this.page.locator("#termsofservice");
    if (!(await termsCheckbox.isChecked())) {
      await termsCheckbox.check();
    }

        await this.page.click("#checkout");
  }
}

module.exports = CartPage;
