const { test, expect } = require('../../fixtures/testFixtures');

const userData = require('../../testData/userData');


test.describe('Authentication Validation Tests', () => {


    test('TC13 Verify Password Field is Masked', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/login');

        const type = await page.locator('#Password').getAttribute('type');

        expect(type).toBe('password');
    });


  test('TC14 Verify Empty Email Validation', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/login'
    );

    await page.locator('input[value="Log in"]').click();

    await expect(page.locator('.validation-summary-errors')).toBeVisible();
});


    test('TC15 Verify Empty Password Validation', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/login');

        await page.locator('#Email').fill(userData.validUser.email);

        await page.locator('input[value="Log in"]').click();

        await expect(page.locator('.validation-summary-errors')).toBeVisible();
    });


    test('TC16 Verify Soft Assertions for Login UI', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/login');

        await expect.soft(page.locator('#Email')).toBeVisible();

        await expect.soft(page.locator('#Password')).toBeVisible();

        await expect.soft(page.locator('input[value="Log in"]')).toBeVisible();
    });

});