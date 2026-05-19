🔹Application Under Test

nopCommerce Demo Store
https://demo.nopcommerce.com

This is a public e-commerce demo web application designed for end-to-end automation testing. It supports workflows such as authentication, product browsing, cart operations, checkout, order history, user profile management, and contact form interactions.

🔹Project Overview

This repository contains a scalable and maintainable test automation framework built using Playwright with JavaScript (Node.js). The framework follows the Page Object Model design pattern and simulates real-world QA automation practices with proper structure and modularity.

🔹Project Objectives

1. Simulate real-world end-to-end QA scenarios.
2. Implement a robust Page Object Model architecture.
3. Improve test reliability and maintainability.
4. Achieve high coverage of business-critical functionalities.

🔹Tools and Technologies


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


🔹Test Strategy

1. Functional Testing
2. UI Testing
3. End-to-End Testing
4. Regression Testing
5. Negative and Edge Case Testing
6. Cross-Browser Testing

🔹Key Features Covered

| Module         | Functional Areas Covered  | Example Validations                                         |
| -------------- | ------------------------- | ----------------------------------------------------------- |
| Authentication | Register, login, logout   | Valid and invalid login, field validation, session handling |
| Product        | Catalog, details, sorting | Product information, categories, pagination, sorting checks |
| Search         | Search functionality      | Valid search, no-result scenarios, empty search             |
| Cart           | Cart operations           | Add and remove product, update quantity, persistence        |
| Checkout       | Complete purchase flow    | Address selection, shipping, payment, confirmation          |
| Orders         | Order history and details | Verify order list and order detail page                     |
| User Profile   | Account management        | Profile edit and credential updates                         |
| Contact        | Contact form              | Successful submission and validation errors                 |


🔹Test Coverage Summary

1. Eight or more business modules automated.
2. More than 120 test cases implemented.
3. Positive and negative scenarios covered.
4. Edge case validations included.
5. Cross-browser testing supported. 

🔹Project Structure

Capstone-Playwright-Project
│
├── pages
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── HomePage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── WishlistPage.js
│   ├── CheckoutPage.js
│   └── ProfilePage.js
│
├── tests
│   ├── authentication.spec.js
│   ├── productCatalogue.spec.js
│   ├── search.spec.js
│   ├── productDetails.spec.js
│   ├── cart.spec.js
│   ├── wishlist.spec.js
│   ├── checkout.spec.js
│   └── profile.spec.js
│
├── utils
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

🔹Execution Steps

1. Install dependencies
npm install

2. Install Playwright browsers
npx playwright install

3. Run the test suite
npx playwright test

4. View the HTML report
npx playwright show-report