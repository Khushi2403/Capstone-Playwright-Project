class LoginPage {

    constructor(page) {

        this.page = page;

        this.loginLink = page.locator('.ico-login');

        this.emailInput = page.locator('#Email');

        this.passwordInput = page.locator('#Password');

        this.rememberMe = page.locator('#RememberMe');

        this.loginButton = page.locator('input[value="Log in"]');

        this.logoutLink = page.locator('.ico-logout');

        this.errorMessage = page.locator('.validation-summary-errors');

        this.accountName = page.locator('.account');
    }


    async gotoLoginPage() {

        await this.page.goto('https://demowebshop.tricentis.com/');

        await this.loginLink.click();
    }


    async login(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

         await Promise.all([
        this.page.waitForLoadState('networkidle'),
        this.loginButton.click()
    ])
    }


    async loginWithRememberMe(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.rememberMe.check();

        await this.loginButton.click();
    }


    async logout() {

        await this.logoutLink.click();
    }


    async getErrorText() {

        return await this.errorMessage.textContent();
    }
}

module.exports = LoginPage;