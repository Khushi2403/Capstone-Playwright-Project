const { test, expect } = require('../../fixtures/testFixtures');

test.describe('Product Catalog - Sorting Tests', () => {

    test.beforeEach(async ({ productPage }) => {

        await productPage.gotoHomePage();

        await productPage.openCategory('books');
    });

    test('TC08 Verify Sort By Name A-Z', async ({ productPage }) => {

        await productPage.sortProducts('Name: A to Z');

        await expect(
            productPage.productTitles.first()
        ).toBeVisible();
    });

    test('TC09 Verify Sort By Name Z-A', async ({ productPage }) => {

        await productPage.sortProducts('Name: Z to A');

        await expect(
            productPage.productTitles.first()
        ).toBeVisible();
    });

    test('TC10 Verify Sort By Price Low to High', async ({ productPage }) => {

        await productPage.sortProducts('Price: Low to High');

        await expect(
            productPage.productTitles.first()
        ).toBeVisible();
    });

    test('TC11 Verify Sort By Price High to Low', async ({ productPage }) => {

        await productPage.sortProducts('Price: High to Low');

        await expect(
            productPage.productTitles.first()
        ).toBeVisible();
    });
});