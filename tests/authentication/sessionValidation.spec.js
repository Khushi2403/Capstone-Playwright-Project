const { test, expect } = require('../../fixtures/testFixtures');

const userData = require('../../testData/userData');


test.describe('Authentication Session Tests', () => {


    test('TC17 Verify Session Persistence After Refresh', async ({ loginPage, page }) => {

        await loginPage.gotoLoginPage();

        await loginPage.login(
            userData.validUser.email,
            userData.validUser.password
        );

        await page.reload();

        await expect(page.locator('.account').first()).toBeVisible();
    });


    test(' TC18 Verify Remember Me Functionality', async ({ loginPage, page }) => {

        await loginPage.gotoLoginPage();

        await loginPage.loginWithRememberMe(
            userData.validUser.email,
            userData.validUser.password
        );

       await expect(page.locator('.account').first()).toBeVisible();
    });

});