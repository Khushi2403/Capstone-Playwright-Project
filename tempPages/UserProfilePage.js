class UserProfilePage {
    constructor(page) {
        this.page = page;

        this.profileLink = page.getByRole('link', { name: 'My account' });

        this.addressesLink = page.getByRole('link', { name: 'Addresses' }).first();

        this.ordersLink = page.getByRole('link', { name: 'Orders' }).first();


        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');

        this.saveButton = page.getByRole('button', { name: 'Save' });
      this.successMessage = page.locator('body');
        
    }

    async openProfile() {
        await this.profileLink.click();

        await this.page.waitForLoadState('domcontentloaded');
    }

    async openAddresses() {
        await this.addressesLink.click();
    }

    async openOrders() {
        await this.ordersLink.click();
    }

    async updateFirstName(name) {
        await this.firstName.fill(name);
    }

    async updateLastName(name) {
        await this.lastName.fill(name);
    }

    async saveProfile() {
        await this.saveButton.click();
    }
}

module.exports = UserProfilePage;