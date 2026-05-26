const { test, expect } = require('../../fixtures/testFixtures');

test.describe('Product Catalog - Product Details Tests', () => {

    test.beforeEach(async ({ productPage }) => {

        await productPage.gotoHomePage();

        await productPage.openCategory('books');
    });

    test('TC15 Verify Product Details Page Opens', async ({ productPage, page }) => {

        const productName =
            await productPage.productTitles.first().textContent();

        await productPage.openFirstProduct();

        await expect(
            productPage.pageTitle
        ).toContainText(productName.trim());
    });

    test('TC16 Verify Product Price Is Visible', async ({ productPage }) => {

        await productPage.openFirstProduct();

        await expect(
            productPage.productPrice
        ).toBeVisible();
    });

    test('TC17 Verify Add To Cart Button Is Visible', async ({ productPage }) => {

        await productPage.openFirstProduct();

        await expect(
            productPage.addToCartButton
        ).toBeVisible();
    });

    test('TC18 Verify Breadcrumb Is Visible', async ({ productPage }) => {

        await productPage.openFirstProduct();

        await expect(
            productPage.breadcrumb
        ).toBeVisible();
    });
});