
const { test, expect } = require("@playwright/test");
const fs = require("fs");

const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");
const ProductPage = require("../pages/ProductPage");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");
const ConfirmationPage = require("../pages/ConfirmationPage");

const purchaseData = JSON.parse(fs.readFileSync("test-data/purchaseData.json", "utf8"));

purchaseData.forEach((purchase) => {
  test(`E2E Purchase Flow - ${purchase.productName}`, async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const confirm = new ConfirmationPage(page);

    await page.goto("https://demowebshop.tricentis.com/");

    // LOGIN 
    const user = {
      email: purchase.email,
      password: purchase.password
};
    await login.openLoginPage();
    await login.fillLoginForm(user);
    await login.submitForm();



    // Purchase flow

    await home.navigateToCategory(purchase.productCategory);

    await product.addToCartById(".button-2.product-box-add-to-cart-button");
    await product.verifyCartQuantity(1);

    await cart.goToCheckout();

    await checkout.fillBillingDetails(purchase.billing);
    await checkout.continueShippingAddress(true);
    await checkout.selectShippingMethod();
    await checkout.selectPaymentMethod();
    await checkout.continuePaymentInfo();
    await checkout.confirmOrder();

    await confirm.verifyThankYou();

    const orderNumber = await confirm.captureOrderNumber();
    expect(orderNumber).not.toBeNull();
    console.log(`Order placed successfully! Order number: ${orderNumber}`);
  });
});
