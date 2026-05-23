
const { test, expect } = require('../../fixtures/testFixtures');

const userData = require('../../testData/userData');


function generateRandomEmail() {

    return `user${Date.now()}@gmail.com`;
}


test.describe('Authentication - Registration Tests', () => {


    test('TC09 Verify Registration with Valid Male User', async ({ registerPage }) => {

        const email = generateRandomEmail();

        await registerPage.gotoRegisterPage();

        await registerPage.registerUser(
            'male',
            'John',
            'Doe',
            email,
            'Test@123'
        );

        await expect(registerPage.successMessage).toBeVisible();
    });


    test('TC10 Verify Registration with Valid Female User', async ({ registerPage }) => {

        const email = generateRandomEmail();

        await registerPage.gotoRegisterPage();

        await registerPage.registerUser(
            userData.validUser.gender,
            userData.validUser.firstName,
            userData.validUser.lastName,
            email,
            userData.validUser.password
        );

        await expect(registerPage.successMessage).toBeVisible();
    });


    test('TC11 Verify Registration with Existing Email', async ({ registerPage, page }) => {

        await registerPage.gotoRegisterPage();

        await registerPage.registerUser(
            userData.validUser.gender,
            userData.validUser.firstName,
            userData.validUser.lastName,
            userData.validUser.email,
            userData.validUser.password
        );

        await expect(page.locator('.message-error')).toBeVisible();
    });


    test('TC12 Verify Password Mismatch Validation', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/register');

        await page.locator('#gender-female').check();

        await page.locator('#FirstName').fill('Khushi');

        await page.locator('#LastName').fill('Agrawal');

        await page.locator('#Email').fill(generateRandomEmail());

        await page.locator('#Password').fill('Test@123');

        await page.locator('#ConfirmPassword').fill('Wrong@123');

        await page.locator('#register-button').click();

        await expect(
    page.getByText(
        'The password and confirmation password do not match.')).toBeVisible();
    });

});