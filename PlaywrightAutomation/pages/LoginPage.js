class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async openLoginPage() {
    await this.page.click("text=Log in");
  }


  async fillLoginForm(data) {
    await this.page.fill("#Email", data.email);
    await this.page.fill("#Password", data.password);
  }

  async submitForm() {
    await this.page.click(".button-1.login-button");
  }

  
}

module.exports = LoginPage;
