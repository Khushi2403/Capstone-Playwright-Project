class HomePage {

    constructor(page) {

        this.page = page;

        this.accountName = page.locator('.account').first();

        this.loginLink = page.locator('.ico-login');
    }
}

module.exports = HomePage;