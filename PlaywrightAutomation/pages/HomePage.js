class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToCategory(categoryPath) {
    const categories = categoryPath.split(" > ");

    for (let i = 0; i < categories.length; i++) {
      const cat = categories[i].trim();
      const locator = this.page.locator(`div.header-menu >> text=${cat}`).first();
      for (let attempt = 1; attempt <= 5; attempt++) {
        if (await locator.isVisible()) break;
        console.log(`⏳ Waiting for category "${cat}" to be visible (Attempt ${attempt})`);
        await this.page.waitForTimeout(1000);
      }

      await locator.waitFor({ state: "visible", timeout: 10000 });

      if (i < categories.length - 1) {
        await locator.hover();
        await this.page.waitForTimeout(800);
      } else {
        await locator.click({ timeout: 10000 });
      }
    }
  }
}

module.exports = HomePage;
