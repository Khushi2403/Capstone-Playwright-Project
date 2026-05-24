const { test, expect } = require('../../fixtures/testFixtures');


test.describe('Product Catalog - Category and Filter Tests', () => {


    test.beforeEach(async ({ productPage }) => {

        await productPage.gotoHomePage();
    });


    test('TC04 Verify Books Category Navigation', async ({ productPage, page }) => {

        await productPage.openCategory('books');

        await expect(page).toHaveURL(/books/);
    });


    test('TC05 Verify Computers Category Navigation', async ({ productPage, page }) => {

        await productPage.openCategory('computers');

        await expect(page).toHaveURL(/computers/);
    });


    test('TC06 Verify Electronics Category Navigation', async ({ productPage, page }) => {

        await productPage.openCategory('electronics');

        await expect(page).toHaveURL(/electronics/);
    });


    test('TC07 Verify Jewelry Category Navigation', async ({ productPage, page }) => {

        await productPage.openCategory('jewelry');

        await expect(page).toHaveURL(/jewelry/);
    });

});