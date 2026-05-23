# Authentication Module Synopsis

## Module Overview

The Authentication Module validates all major authentication functionalities of the Demowebshop application using Playwright with JavaScript.

The module is designed using the **Page Object Model (POM)** framework to ensure:
- Reusability
- Maintainability
- Scalability
- Clean test structure

Website Under Test: https://demowebshop.tricentis.com/

---

# Authentication Module Structure

```text
tests/
└── authentication/
    ├── login.spec.js
    ├── logout.spec.js
    ├── registration.spec.js
    ├── authValidation.spec.js
    └── sessionValidation.spec.js
```


# Test File Details

## 1. login.spec.js

Purpose-This file validates login functionality using valid and invalid credentials.

Test Cases Covered

| TC ID | Test Case Description               | Validation Performed                    |
| ----- | ----------------------------------- | --------------------------------------- |
| TC01  | Verify Login with Valid Credentials | Successful login and account visibility |
| TC02  | Verify Login with Invalid Password  | Error message validation                |
| TC03  | Verify Login with Invalid Email     | Invalid email handling                  |
| TC04  | Verify Login Using Enter Key        | Keyboard-based login functionality      |
| TC05  | Verify Copy Paste Login             | Input handling and login validation     |


## 2. logout.spec.js

Purpose-This file validates logout functionality and access restrictions after logout.

Test Cases Covered

| TC ID | Test Case Description                      | Validation Performed             |
| ----- | ------------------------------------------ | -------------------------------- |
| TC06  | Verify Successful Logout                   | Logout link and login visibility |
| TC07  | Verify Redirect After Logout               | URL redirection validation       |
| TC08  | Verify Restricted Page Access After Logout | Unauthorized access prevention   |


## 3. registration.spec.js

Purpose-This file validates new user registration functionality.

Test Cases Covered

| TC ID | Test Case Description                      | Validation Performed                |
| ----- | ------------------------------------------ | ----------------------------------- |
| TC09  | Verify Registration with Valid Male User   | Successful male user registration   |
| TC10  | Verify Registration with Valid Female User | Successful female user registration |
| TC11  | Verify Registration with Existing Email    | Existing email validation           |
| TC12  | Verify Password Mismatch Validation        | Password confirmation validation    |


## 4. authValidation.spec.js

Purpose-This file validates UI-level authentication validations and field behaviors.

Test Cases Covered

| TC ID | Test Case Description               | Validation Performed            |
| ----- | ----------------------------------- | ------------------------------- |
| TC13  | Verify Password Field is Masked     | Password field type validation  |
| TC14  | Verify Empty Email Validation       | Required email field validation |
| TC15  | Verify Empty Password Validation    | Required password validation    |
| TC16  | Verify Soft Assertions for Login UI | Multiple UI element validations |


## 5. sessionValidation.spec.js

Purpose-This file validates user session behavior and persistence.

Test Cases Covered

| TC ID | Test Case Description                    | Validation Performed              |
| ----- | ---------------------------------------- | --------------------------------- |
| TC17  | Verify Session Persistence After Refresh | User session retention validation |
| TC18  | Verify Remember Me Functionality         | Persistent login validation       |



# Key Features Implemented
- Page Object Model (POM)
- Cross-browser testing
- Reusable fixtures
- Centralized test data
- Soft assertions
- URL validations
- Session handling
- Login and logout validations
- Registration validations


# Supporting Framework Files

| File            | Purpose                                |
| --------------- | -------------------------------------- |
| LoginPage.js    | Login page locators and methods        |
| HomePage.js     | Home page locators                     |
| RegisterPage.js | Registration page locators and methods |
| testFixtures.js | Reusable fixture setup                 |
| userData.js     | Test data management                   |



# Execution Command

```text
npx playwright test tests/authentication
```



