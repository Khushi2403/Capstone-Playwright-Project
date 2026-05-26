const { test, expect } = require('../../fixtures/testFixtures');

test.describe('Shopping Cart Module', () => {

    test.beforeEach(async ({ shoppingCartPage, context }) => {

        await context.clearCookies();

        await shoppingCartPage.gotoHome();
    });

    test('TC01 Add product to cart', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.cartRows.first()
        ).toBeVisible();
    });

    test('TC02 Open cart page', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.page
        ).toHaveURL(/cart/);
    });

    test('TC03 Verify success notification', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await expect(
            shoppingCartPage.successNotification
        ).toBeVisible();
    });

    test('TC04 Update quantity', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await shoppingCartPage.updateQuantity('2');

        await expect(
            shoppingCartPage.qtyInput.first()
        ).toHaveValue('2');
    });

    test('TC05 Remove product', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await shoppingCartPage.removeProduct();

        await expect(
            shoppingCartPage.emptyCartMessage
        ).toContainText('Your Shopping Cart is empty!');
    });

    test('TC06 Cart total visible', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.cartTotal.first()
        ).toBeVisible();
    });

    test('TC07 Cart persists after refresh', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await shoppingCartPage.page.reload();

        await expect(
            shoppingCartPage.cartRows.first()
        ).toBeVisible();
    });

    test('TC08 Continue shopping visible', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.continueShoppingButton
        ).toBeVisible();
    });

    test('TC09 Quantity input visible', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.qtyInput.first()
        ).toBeVisible();
    });

    test('TC10 Remove checkbox visible', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.removeCheckbox.first()
        ).toBeVisible();
    });

    test('TC11 Update cart button visible', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.updateCartButton
        ).toBeVisible();
    });

    test('TC12 Empty cart validation', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.page
        ).toHaveURL(/cart/);
    });

    test('TC13 Cart URL validation', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.page.url()
        ).toContain('cart');
    });

    test('TC14 Multiple quantity update', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await shoppingCartPage.updateQuantity('3');

        await expect(
            shoppingCartPage.qtyInput.first()
        ).toHaveValue('3');
    });

    test('TC15 Cart item visibility', async ({ shoppingCartPage }) => {

        await shoppingCartPage.openSimpleProduct();

        await shoppingCartPage.addProductToCart();

        await shoppingCartPage.openCart();

        await expect(
            shoppingCartPage.cartRows
        ).toHaveCount(1);
    });

});