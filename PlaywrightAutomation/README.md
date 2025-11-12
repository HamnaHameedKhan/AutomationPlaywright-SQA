# Demo WebShop Automation Suite


## 1. Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HamnaHameedKhan/AutomationPlaywright-SQA.git
   cd PlaywrightAutomation
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**  
   ```bash
   npx playwright install
   ```

4. **Run the test suite:**  
   - Headless mode: `npx playwright test`  
   - Specific file with browser:  
   - for Registeration 
     `npx playwright test tests/register.spec.js --project=chromium --headed`

     - for purchase-flow
     `npx playwright test tests/purchase.spec.js --project=chromium --headed`

5. **View test reports:**  
   ```bash
   npx playwright show-report
   ```

---

## 2. Environment

- **Framework:** Playwright  
- **Language:** JavaScript (Node.js)  
- **Node Version:** 20.18.0 
- **Playwright Version:** ^1.40.0  
- **OS:** Windows 10  
- **Browsers Tested:** Chromium, Firefox, WebKit  

---

## 3. Test Scenarios

### Automated Test Coverage
- **User Registration:** Register new users using dataset emails.  
- **Login:** Login with registered users from dataset.  
- **Product Selection & Purchase Flow:**  
  - Navigate categories  
  - Select products  
  - Add products to cart  
  - Verify cart quantity dynamically  
  - Checkout: Billing, shipping, payment selection  
  - Confirm order and capture order number  
- **Order Verification:** Verify thank-you page and order number display.

## 4. Artifacts
  
- **Reports:** Open via `npx playwright show-report`  

> Playwright automatically saves screenshots and videos for failed tests.

---