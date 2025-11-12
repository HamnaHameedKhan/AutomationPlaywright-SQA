class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async openRegisterPage() {
    await this.page.click("text=Register");
  }

  async selectGender(gender) {
    if (gender === "male") {
     await this.page.waitForSelector("#gender-male", { state: "visible" });
      await this.page.click("#gender-male");
    } else {
      await this.page.waitForSelector("#gender-female", { state: "visible" });
      await this.page.click("#gender-female");
    }
  }

  async fillRegistrationForm(data) {
    await this.page.fill("#FirstName", data.firstName);
    await this.page.fill("#LastName", data.lastName);

    await this.page.fill("#Email", data.email);
    await this.page.fill("#Password", data.password);
    await this.page.fill("#ConfirmPassword", data.confirmPassword);
  }

  async submitForm() {
    await this.page.click("#register-button");
  }

  async continueToHome() {
    await this.page.click("text=Continue");
  }
}

module.exports = RegisterPage;
