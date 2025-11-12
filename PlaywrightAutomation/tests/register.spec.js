const { test, expect } = require("@playwright/test");
const fs = require("fs");

const RegisterPage = require("../pages/RegisterPage");

const registerData = JSON.parse(
  fs.readFileSync("test-data/registerData.json", "utf8")
);

registerData.forEach((data) => {
  test(`User Registration Test - ${data.firstName}`, async ({ page }) => {
    
    const register = new RegisterPage(page);

    await page.goto("https://demowebshop.tricentis.com/");

    await register.openRegisterPage();

    data.email = data.email.replace("{{ts}}", Date.now());

    await register.selectGender(data.gender);

    await register.fillRegistrationForm(data);

    await register.submitForm();

    await expect(page.getByText("Your registration completed")).toBeVisible();

    await register.continueToHome();
  });
});
