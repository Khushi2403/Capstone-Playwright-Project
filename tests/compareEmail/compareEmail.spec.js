const { test, expect } = require('../../fixtures/testFixtures');
const userData = require('../../testData/userData');

test.describe('Compare + Email Module', () => {

    test.beforeEach(async ({ loginPage, compareEmailPage }) => {

        await loginPage.gotoLoginPage();

        await loginPage.login(
            userData.validUser.email,
            userData.validUser.password
        );

        await compareEmailPage.openComparePage();

        if (await compareEmailPage.clearCompareBtn.isVisible()) {
            await compareEmailPage.clearCompare();
        }

        await compareEmailPage.gotoHome();
    });

    test('TC01 Add product to compare', async ({ compareEmailPage }) => {

        await compareEmailPage.openProductByIndex(0);
        await compareEmailPage.addToCompare();

        await compareEmailPage.openProductByIndex(1);
        await compareEmailPage.addToCompare();

        await compareEmailPage.openComparePage();

        await expect(compareEmailPage.compareTable)
            .toBeVisible();

        const comparedProducts = compareEmailPage.page.locator(
            '.compare-products-table a'
        );

        await expect(comparedProducts).toHaveCount(2);
    });

   test('TC02 Compare success message', async ({ compareEmailPage }) => {

    await compareEmailPage.openFirstProduct();

    await compareEmailPage.addToCompare();

    await compareEmailPage.openComparePage();

    await expect(compareEmailPage.compareTable)
        .toBeVisible();

    const comparedProducts = compareEmailPage.page.locator(
        '.compare-products-table a'
    );

    await expect(comparedProducts.first())
        .toBeVisible();
});

    test('TC03 Clear compare list', async ({ compareEmailPage }) => {

        await compareEmailPage.openFirstProduct();

        await compareEmailPage.addToCompare();

        await compareEmailPage.openComparePage();

        await compareEmailPage.clearCompare();

        await expect(compareEmailPage.noCompareMsg)
            .toContainText('You have no items to compare.');
    });

    test('TC04 Compare page URL validation', async ({ compareEmailPage }) => {

        await compareEmailPage.openComparePage();

        await expect(compareEmailPage.page)
            .toHaveURL(/compareproducts/);
    });

    test('TC05 Open Email Friend page', async ({ compareEmailPage }) => {

        await compareEmailPage.openFirstProduct();

        await compareEmailPage.openEmailFriend();

        await expect(compareEmailPage.friendEmail)
            .toBeVisible();
    });

    test.skip('TC06 Send Email to Friend', async ({ compareEmailPage }) => {

        await compareEmailPage.openFirstProduct();

        await compareEmailPage.openEmailFriend();

        await compareEmailPage.sendEmail(
            'hritik123@gmail.com',
            userData.validUser.email,
            'Check this product!'
        );

        await expect(compareEmailPage.resultMsg)
            .toBeVisible({ timeout: 10000 });

        await expect(compareEmailPage.resultMsg)
            .toContainText('Your message has been sent');
    });

});