# CAPSTONE PROJECT – PLANNING DOCUMENT

---

## PROJECT OVERVIEW

| Field | Details |
|------|---------|
| Website Under Test | https://demowebshop.tricentis.com/ |
| Framework | Playwright v1.4x+ |
| Language | JavaScript |
| Runtime | Node.js |
| Domain | E-Commerce (B2C) |
| Design Pattern | Page Object Model (POM) |
| Test Cases | 120+ (8 modules × 15 each) |
| Reporting | Playwright HTML Report / Allure Report |
| CI/CD | GitHub Actions / Jenkins (Headless Execution) |
| AI Tools Used | ChatGPT, GitHub Copilot |

---

## WHY DEMO WEB SHOP?

| Reason | Explanation |
|------|-------------|
| Realistic E-Commerce Flow | Includes login, cart, checkout, wishlist, orders |
| Industry Standard UI | Mimics production-level e-commerce applications |
| Complex Scenarios | Supports guest vs registered user flows |
| Feature Rich | Product filtering, sorting, payments, address management |
| Ideal for Automation | Covers full end-to-end user journey |

---

## SERVICES & TEST CASE BREAKDOWN (8 × 15 = 120 TEST CASES)

| # | Service / Module | Key Test Scenarios | Test Cases |
|--|------------------|--------------------|-----------|
| 1 | Authentication | Login, logout, registration, invalid login, session validation, password rules, email validation, guest vs registered flow, redirection checks, empty fields, account lock simulation | 15 |
| 2 | Product Catalog | Search product, filter by category, sort by price, product details validation, pagination, grid/list view, invalid search, breadcrumbs, out-of-stock handling, UI validation | 15 |
| 3 | Shopping Cart | Add/remove items, update quantity, cart persistence, subtotal validation, apply coupon, gift card validation, empty cart handling, checkout redirect, tax calculation | 15 |
| 4 | Wishlist & Compare | Add/remove wishlist items, move to cart, compare products, duplicate handling, empty state validation, sharing wishlist, attribute comparison | 15 |
| 5 | User Profile | Update profile, email change, password change, order history, newsletter toggle, address validation, reward points, account settings validation | 15 |
| 6 | Checkout Process | Guest checkout, registered checkout, billing/shipping flow, payment methods, order confirmation, invalid card handling, tax validation, order ID generation | 15 |
| 7 | Customer Support | Contact form, validation checks, email format validation, currency switch, language change, footer links, newsletter subscription, responsive UI checks | 15 |
| 8 | E2E & Network Mocking | Full purchase flow, API interception, network failure simulation, response mocking, timeout handling, trace viewer generation, performance validation | 15 |

---

## IMPLEMENTATION MILESTONES

| Milestone | Deliverable |
|----------|-------------|
| M1 – Setup & Configuration | Node.js project setup, Playwright installation, multi-browser config |
| M2 – Framework Design (POM) | Page Object Model creation, reusable methods, locator strategy |
| M3 – UI & Interaction Handling | Dropdowns, alerts, popups, tabs, hover actions |
| M4 – Test Development (E2E Flows) | Full user journeys + assertions |
| M5 – Reporting & CI/CD | HTML + Allure reports, GitHub Actions pipeline |
| M6 – Advanced Features & Finalization | API mocking, network failure simulation, documentation |

---

## TEST STRATEGY

- Functional Testing – Core feature validation  
- UI Testing – UI & layout validation  
- Regression Testing – Ensure stability after changes  
- End-to-End Testing – Full user flows  
- Negative Testing – Invalid inputs handling  
- Cross Browser Testing – Chromium, Firefox, WebKit  

---

## DELIVERABLES

- Automation Framework (Playwright POM-based)  
- 120+ Test Cases  
- Execution Reports (HTML + Allure)  
- CI/CD Pipeline (GitHub Actions)  
- Documentation (README + Planning Doc)  

---

## CONCLUSION

This Capstone Project demonstrates a complete real-world automation testing framework for an e-commerce application. It ensures maximum test coverage, scalability, maintainability, and industry-level automation practices using Playwright.