class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillBillingDetails(data) {
    await this.page.fill("#BillingNewAddress_FirstName", data.firstName);
    await this.page.fill("#BillingNewAddress_LastName", data.lastName);
    await this.page.fill("#BillingNewAddress_Email", data.email);
    await this.page.selectOption("#BillingNewAddress_CountryId", { label: data.country });
    await this.page.fill("#BillingNewAddress_City", data.city);
    await this.page.fill("#BillingNewAddress_Address1", data.address1); 
    await this.page.fill("#BillingNewAddress_Address2", data.address2); 
    await this.page.fill("#BillingNewAddress_ZipPostalCode", data.zip);
    await this.page.fill("#BillingNewAddress_PhoneNumber", data.phone);
    await this.page.click("input.button-1.new-address-next-step-button");
  }

async continueShippingAddress() {
  const continueBtn = this.page.locator('#shipping-buttons-container .button-1.new-address-next-step-button');
  await continueBtn.waitFor({ state: 'visible' });
  await this.page.waitForSelector('#shipping-buttons-container .button-1.new-address-next-step-button:not([disabled])', {
    timeout: 20000,
  });
  await continueBtn.click();
}



  async selectShippingMethod() {
  const groundOption = this.page.locator("#shippingoption_0");
  await groundOption.waitFor({ state: "visible", timeout: 20000 });
  await groundOption.check();
  await this.page.waitForTimeout(1000);
  await this.page.click("input.button-1.shipping-method-next-step-button");
}


  async selectPaymentMethod() {
  await this.page.check("#paymentmethod_0");
  await this.page.click("input.button-1.payment-method-next-step-button");
}

  async continuePaymentInfo() {
    const continueBtn = this.page.locator("input.button-1.payment-info-next-step-button");
    await continueBtn.waitFor({ state: "visible" });
    await continueBtn.click();
  }

 async confirmOrder() {
  const container = this.page.locator("#confirm-order-buttons-container");
  await container.waitFor({ state: "visible", timeout: 20000 });

  const confirmOrderBtn = container.locator("input.button-1.confirm-order-next-step-button");
  await confirmOrderBtn.waitFor({ state: "visible", timeout: 20000 });

  await this.page.waitForFunction((selector) => {
    const btn = document.querySelector(selector);
    return btn && !btn.disabled;
  }, "#confirm-order-buttons-container input.button-1.confirm-order-next-step-button");
  await confirmOrderBtn.click();

  
}



 
}

module.exports = CheckoutPage;
