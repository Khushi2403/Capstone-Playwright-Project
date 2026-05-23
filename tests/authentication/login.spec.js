
const { test, expect } = require('../../fixtures/testFixtures');

const userData = require('../../testData/userData');


test.describe('Authentication - Login Tests', () => {


    test.beforeEach(async ({ loginPage }) => {

        await loginPage.gotoLoginPage();
    });


    test('TC01 Verify Login with Valid Credentials', async ({ loginPage, homePage }) => {

        await loginPage.login(
            userData.validUser.email,
            userData.validUser.password
        );

        await expect(homePage.accountName).toBeVisible();
    });


    test('TC02 Verify Login with Invalid Password', async ({ loginPage }) => {

        await loginPage.login(
            userData.validUser.email,
            'wrongPassword'
        );

        await expect(loginPage.errorMessage).toBeVisible();
    });


    test('TC03 Verify Login with Invalid Email', async ({ loginPage }) => {

        await loginPage.login(
            'wrong@gmail.com',
            userData.validUser.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
    });


    test('TC04 Verify Login Using Enter Key', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/login');

        await page.locator('#Email').fill(userData.validUser.email);

        await page.locator('#Password').fill(userData.validUser.password);

        await page.keyboard.press('Enter');

        await expect(page.locator('.account').first()).toBeVisible();
    });


  test('TC05 Verify Copy Paste Login', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');

    // Copy-Paste Email
    await page.locator('#Email').fill(userData.validUser.email);

    await page.locator('#Email').press('Control+A');

    await page.locator('#Email').press('Control+C');

    await page.locator('#Email').fill('');

    await page.locator('#Email').press('Control+V');

    // Copy-Paste Password
    await page.locator('#Password').fill(userData.validUser.password);

    await page.locator('#Password').press('Control+A');

    await page.locator('#Password').press('Control+C');

    await page.locator('#Password').fill('');

    await page.locator('#Password').press('Control+V');

    await page.locator('input[value="Log in"]').click();

    await expect(page.locator('.account').first()).toBeVisible();
});

});