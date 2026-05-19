# Capstone Project Planning Document – Khushi Agrawal

![Playwright](https://img.shields.io/badge/Playwright-Automation-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow)
![POM](https://img.shields.io/badge/Design-Page_Object_Model-blue)

---

🔹**Application Under Test**

nopCommerce Demo Store
https://demo.nopcommerce.com

This is a public e-commerce demo web application designed for end-to-end automation testing. It supports workflows such as authentication, product browsing, cart operations, checkout, order history, user profile management, and contact form interactions.

🔹**Project Overview**

This repository contains a scalable and maintainable test automation framework built using Playwright with JavaScript (Node.js). The framework follows the Page Object Model design pattern and simulates real-world QA automation practices with proper structure and modularity.

🔹**Project Objectives**

1. Simulate real-world end-to-end QA scenarios.
2. Implement a robust Page Object Model architecture.
3. Improve test reliability and maintainability.
4. Achieve high coverage of business-critical functionalities.

🔹**Tools and Technologies**


| Category        | Technology                      |
| --------------- | ------------------------------- |
| Language        | JavaScript (Node.js)            |
| Automation      | Playwright                      |
| Test Design     | Page Object Model (POM)         |
| Test Runner     | Playwright Test Runner          |
| Reporting       | HTML Reports and Allure Reports |
| Version Control | Git and GitHub                  |
| IDE             | Visual Studio Code              |
| CI/CD           | GitHub Actions (optional)       |


🔹**Test Strategy**

1. Functional Testing
2. UI Testing
3. End-to-End Testing
4. Regression Testing
5. Negative and Edge Case Testing
6. Cross-Browser Testing

🔹**Key Features Covered**

| Module             | Functional Areas Covered                                          | Example Validations Performed                                                                          |
| ------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Authentication     | Registration, Login, Logout, Session management                   | Valid and invalid login, field validations, remember me, session persistence, access control           |
| Product Catalogue  | Categories, sub-categories, sorting, pagination, compare products | Product info visibility, sorting by price and name, breadcrumb navigation, grid and list view, filters |
| Search             | Keyword search, category search, suggestions                      | Valid and invalid search, partial keywords, empty search, result persistence after refresh             |
| Product Details    | Product information page, reviews, add to cart, add to wishlist   | Image, price, description, quantity selection, add to cart, add to wishlist                            |
| Cart               | Cart operations, mini cart, coupon, quantity update               | Add and remove items, subtotal validation, cart persistence, move to wishlist                          |
| Wishlist           | Wishlist management                                               | Add to wishlist, remove item, move to cart, persistence after login                                    |
| Checkout (E2E)     | Complete order placement workflow                                 | Address validation, shipping and payment selection, order confirmation, terms validation               |
| Orders and Profile | Order history, profile update, address book                       | Order details, invoice view, profile edit, password change, address management                         |
| Customer Support   | Contact Us form                                                   | Form validations, successful submission, error messages                                                |
| UI and Network     | UI element checks, API mocking                                    | Logo and menu visibility, layout checks, responsive view, API interception using route                 |



🔹**Test Coverage Summary**

| Category              | Coverage Details                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Business Modules      | 8+ major modules automated including Authentication, Product, Search, Cart, Wishlist, Checkout, Orders, Profile, and Contact |
| Test Case Coverage    | 120+ test cases covering all functional flows                                                                                |
| Test Design Approach  | Includes positive, negative, and edge case scenarios                                                                         |
| Validation Types      | Field validations, UI validations, functional validations, and data validations                                              |
| Cross-Browser Testing | Execution supported across Chromium, Firefox, and WebKit using Playwright                                                    |
| Advanced Scenarios    | Includes E2E workflows and API/network mocking scenarios                                                                     |
| Framework Design      | Built using Page Object Model (POM) with modular and reusable components                                                     |


🔹**Project Structure**
```
Capstone-Playwright-Project
│
├── pages
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── HomePage.js
│   ├── ProductCataloguePage.js
│   ├── ProductDetailsPage.js
│   ├── CartPage.js
│   ├── WishlistPage.js
│   ├── CheckoutPage.js
│   ├── OrdersPage.js
│   ├── ProfilePage.js
│   └── ContactPage.js
│
├── tests
│   ├── authentication.spec.js
│   ├── productCatalogue.spec.js
│   ├── productDetails.spec.js
│   ├── search.spec.js
│   ├── cart.spec.js
│   ├── wishlist.spec.js
│   ├── checkoutE2E.spec.js
│   ├── orders.spec.js
│   ├── profile.spec.js
│   ├── contact.spec.js
│   ├── uiValidation.spec.js
│   └── networkMocking.spec.js
│
├── utils
│   ├── testData.js
│   └── helpers.js
│
├── playwright.config.js
├── package.json
└── README.md
```

🔹**Execution Steps**

1. Install dependencies  
```bash
npm install

2. Install Playwright browsers
npx playwright install

3. Run the test suite
npx playwright test

4. View the HTML report
npx playwright show-report
---

