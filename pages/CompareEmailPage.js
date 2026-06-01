const { expect } = require('@playwright/test');

class CompareEmailPage {
    constructor(page) {
        this.page = page;

        this.products = page
            .locator('.product-item h2 a')
            .filter({ hasNotText: 'Gift Card' });

        
        this.addToCompareBtn = page.locator('.add-to-compare-list-button').first();

        this.compareTable = page.locator('.compare-products-table');

        this.clearCompareBtn = page.locator('.clear-list');

        this.noCompareMsg = page.locator('body');

        this.emailFriendBtn = page.locator('.email-a-friend-button');

        this.friendEmail = page.locator('#FriendEmail');

        this.yourEmail = page.locator('#YourEmailAddress');

        this.personalMsg = page.locator('#PersonalMessage');

        this.sendEmailBtn = page.locator('input[name="send-email"]');

        this.resultMsg = page.locator('.result');

        this.successMsg = page.locator('.bar-notification.success');
    }

    async gotoHome() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async openFirstProduct() {
        await this.gotoHome();

        const firstProduct = this.products.first();

        await firstProduct.waitFor({ state: 'visible' });

        await firstProduct.click();

        await this.page.waitForLoadState('networkidle');
    }


async openProductByIndex(index) {

    const productUrls = [
        'https://demowebshop.tricentis.com/141-inch-laptop',
        'https://demowebshop.tricentis.com/build-your-cheap-own-computer',
        'https://demowebshop.tricentis.com/build-your-own-computer',
        'https://demowebshop.tricentis.com/simple-computer'
    ];

    await this.page.goto(productUrls[index]);

    await this.page.waitForLoadState('networkidle');
}

   async addToCompare() {

    const compareBtn = this.page.locator(
        '.button-2.add-to-compare-list-button'
    );

    await compareBtn.waitFor({ state: 'visible' });

    await compareBtn.click();

    await this.page.waitForTimeout(2000);
}

    async openComparePage() {
        await this.page.goto(
            'https://demowebshop.tricentis.com/compareproducts'
        );

        await this.page.waitForLoadState('networkidle');
    }

    async clearCompare() {

    if (await this.clearCompareBtn.isVisible()) {

        await this.clearCompareBtn.click();

        await expect(this.noCompareMsg)
            .toContainText('You have no items to compare.');
    }
}

    async openEmailFriend() {

        await expect(this.emailFriendBtn).toBeVisible();

        await this.emailFriendBtn.click();
    }

    async sendEmail(friendEmail, yourEmail, message) {

        await this.friendEmail.fill(friendEmail);

        await this.yourEmail.fill(yourEmail);

        await this.personalMsg.fill(message);

        await this.sendEmailBtn.click();
    }
}

module.exports = CompareEmailPage;