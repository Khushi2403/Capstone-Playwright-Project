class ShoppingCartPage {

    constructor(page) {

        this.page = page;

        this.termsCheckbox = page.locator('#termsofservice');

        this.checkoutButton = page.getByRole('button', {
        name: 'Checkout'
    });
        this.simpleProduct = page.locator(
            'a:has-text("Build your own cheap computer")'
        );


        this.addToCartBtn = page.locator(
            '#add-to-cart-button-72'
        );

     
        this.successNotification = page.locator(
            '.bar-notification.success'
        );

       
        this.cartLink = page.locator(
            'span.cart-label:has-text("Shopping cart")'
        );

       
        this.cartRows = page.locator('.cart-item-row');

       
        this.qtyInput = page.locator('.qty-input');

       
        this.removeCheckbox = page.locator(
            'input[name="removefromcart"]'
        );

       
        this.updateCartButton = page.locator(
            'input[name="updatecart"]'
        );

     
        this.emptyCartMessage = page.locator(
            '.order-summary-content'
        );

        
        this.continueShoppingButton = page.locator(
            'input[name="continueshopping"]'
        );

       
        this.cartTotal = page.locator('.product-subtotal');
    }

    async gotoHome() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/'
        );
    }

    async openSimpleProduct() {

        await this.simpleProduct.click();
    }

    async addProductToCart() {

        await this.addToCartBtn.click();

        await this.page.waitForTimeout(2000);
    }

    async openCart() {

        await this.cartLink.first().click();
    }

    async removeProduct() {

        await this.removeCheckbox.first().check();

        await this.updateCartButton.click();
    }

    async updateQuantity(quantity) {

        await this.qtyInput.first().fill(quantity);

        await this.updateCartButton.click();
    }

    async checkout() {

    await this.termsCheckbox.check();

    await this.checkoutButton.click();
}
}

module.exports = ShoppingCartPage;