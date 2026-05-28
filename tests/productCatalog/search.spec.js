const { test, expect } = require('../../fixtures/testFixtures');


test.describe('Product Catalog - Search Tests', () => {


    test.beforeEach(async ({ productPage }) => {

        await productPage.gotoHomePage();
    });


    test('TC01 Verify Search with Valid Product', async ({ productPage }) => {

        await productPage.searchProduct('Laptop');

        await expect(
            productPage.productTitles.first()
        ).toBeVisible();
    });


    test('TC02 Verify Search with Invalid Product', async ({ productPage }) => {
        await productPage.gotoHomePage();
        await productPage.searchProduct('abcdefxyz');

        await expect(
            productPage.noResultMessage
        ).toBeVisible({ timeout: 10000 });
    });


    test('TC03 Verify Search Box Visibility', async ({ productPage }) => {

        await expect.soft(
            productPage.searchBox
        ).toBeVisible({ timeout: 10000 });
    });

});