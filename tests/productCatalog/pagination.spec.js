const { test, expect } = require('../../fixtures/testFixtures');

test.describe('Product Catalog - Pagination Tests', () => {

    test.beforeEach(async ({ productPage }) => {

        await productPage.gotoHomePage();

        await productPage.openCategory('apparel-shoes');
    });

    test('TC14 Verify Next Page Navigation', async ({ productPage, page }) => {

        await productPage.clickNextPage();

        await expect(page).toHaveURL(/pagenumber=2/);
    });
});