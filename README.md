#  Enterprise QA Automation Framework using Playwright (JavaScript)

##  Application Under Test

👉 **nopCommerce Demo Store**  
https://demo.nopcommerce.com  

This is a sample e-commerce web application used for automation testing practice.

It supports complete end-to-end business workflows such as:

- User authentication (Login/Logout)
- Product browsing and search
- Shopping cart operations
- Checkout and order placement
- Order history management



## 📌 Project Overview

This project is an **Enterprise-Level Test Automation Framework** built using **Playwright with JavaScript (Node.js)**.

It simulates real-world QA automation workflows by testing an e-commerce application using a **scalable, modular, and maintainable automation framework** based on industry best practices.

The framework follows the **Page Object Model (POM)** design pattern for better structure, reusability, and maintainability.


## 🎯 Project Objective

- Simulate real-world end-to-end QA workflows
- Implement Page Object Model (POM) architecture
- Improve test reliability and maintainability
- Achieve high coverage of business-critical scenarios

##  Key Features Covered

### 🔐 Authentication Module
- User registration
- Valid login
- Invalid login validation
- Logout functionality

### 🛍️ Product Module
- Product listing validation
- Product detail page verification
- Category navigation
- Sorting functionality

### 🔎 Search Module
- Valid product search
- Invalid search handling
- Empty search validation

### 🛒 Cart Module
- Add product to cart
- Remove product from cart
- Update product quantity
- Cart persistence validation

### 💳 Checkout Module
- End-to-end checkout workflow validation
- Address verification
- Order confirmation validation

### 📦 Orders Module
- Order history validation
- Order details verification

### 👤 User Profile Module
- Profile update functionality
- Account information validation

### 📬 Contact Module
- Contact form submission
- Form validation messages


## 🧰 Tools & Technologies

- **Language:** JavaScript (Node.js)
- **Automation Tool:** Playwright
- **Design Pattern:** Page Object Model (POM)
- **Test Runner:** Playwright Test Runner
- **Reporting:** HTML Reports / Allure Reports
- **Version Control:** Git & GitHub
- **IDE:** Visual Studio Code
- **CI/CD:** GitHub Actions (optional)


## 🧪 Test Strategy

- Functional Testing
- UI Testing
- End-to-End Testing
- Regression Testing
- Negative Testing


## 📊 Test Coverage Summary

- ✅ 8+ Business Modules Automated  
- ✅ 120+ Test Cases Implemented  
- ✅ Positive & Negative Scenarios Covered  
- ✅ Edge Case Validation  
- ✅ Cross-Browser Testing Support  


## 🏗 Framework Architecture

- Page Object Model (POM)
- Modular test structure
- Reusable utility functions
- Centralized configuration management
- Data-driven testing (JSON)
- Parallel test execution support
- Clean separation of test layers


## 📁 Project Structure
├── pages/
├── tests/
├── test-data/
├── utils/
├── config/
├── playwright.config.js
├── package.json
└── README.md

## ▶️ How to Run the Project

1. Install dependencies
npm install

2. Install Playwright browsers
npx playwright install

3. Run test cases
npx playwright test

4. Generate HTML report
npx playwright show-report
