const { test, expect } = require('../../fixtures/testFixtures');

test.describe('Product Catalog - View Mode Tests', () => {

    test.beforeEach(async ({ productPage }) => {

        await productPage.gotoHomePage();

        await productPage.openCategory('books');
    });

    test('TC12 Verify Grid View', async ({ productPage }) => {

        await productPage.switchToGridView();

        await expect(
            productPage.productGrid
        ).toBeVisible();
    });

    test('TC13 Verify List View', async ({ productPage }) => {

        await productPage.switchToListView();

        await expect(
            productPage.productList
        ).toBeVisible();
    });
});