
const { test, expect } = require('../../fixtures/testFixtures');

const userData = require('../../testData/userData');


test.describe('Authentication - Logout Tests', () => {


    test.beforeEach(async ({ loginPage }) => {

        await loginPage.gotoLoginPage();

        await loginPage.login(
            userData.validUser.email,
            userData.validUser.password
        );
    });


    test('TC06 Verify Successful Logout', async ({ loginPage, page }) => {

        await loginPage.logout();

        await expect(page.locator('.ico-login')).toBeVisible();
    });


 test('TC07 Verify Redirect After Logout', async ({ loginPage, page }) => {

    await loginPage.logout();

    // await page.waitForURL(
    //     'https://demowebshop.tricentis.com/'
    // );

    await expect(page).toHaveURL(
        'https://demowebshop.tricentis.com/'
    );
});


 test('TC08 Verify Restricted Page Access After Logout', async ({ loginPage, page }) => {

    await loginPage.logout();

    await page.goto(
        'https://demowebshop.tricentis.com/customer/info'
    );

    await expect(page).toHaveURL(/.*login.*/);
});

});