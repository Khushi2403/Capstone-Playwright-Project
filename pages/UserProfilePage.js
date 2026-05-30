// pages/UserProfilePage.js

class UserProfilePage {
  constructor(page) {
    this.page = page;

    // account / sidebar
    this.myAccountLink = page.getByRole('link', { name: 'My account' });
    this.ordersLink = page.locator('a[href="/customer/orders"]').last();
    this.addressesLink = page.getByRole('link', { name: 'Addresses' }).last();
    this.changePasswordLink = page.getByRole('link', { name: 'Change password' });

    // profile fields
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.email = page.locator('#Email');

    // buttons
    this.saveButton = page.locator('input[value="Save"]');

    // password fields
    this.oldPassword = page.locator('#OldPassword');
    this.newPassword = page.locator('#NewPassword');
    this.confirmPassword = page.locator('#ConfirmNewPassword');
    this.changePasswordButton = page.locator(
      'input[value="Change password"]'
    );
  }

  async openMyAccount() {
    await this.myAccountLink.waitFor({
      state: 'visible',
      timeout: 15000,
    });

    await this.myAccountLink.click();

    await this.email.waitFor({
      state: 'visible',
      timeout: 15000,
    });
  }

  async openOrders() {
    await this.ordersLink.click();
    await this.page.waitForURL('**/customer/orders');
  }

  async openAddresses() {
    await this.addressesLink.click();
    await this.page.waitForURL('**/customer/addresses');
  }

  async openChangePassword() {
    await this.changePasswordLink.click();

    await this.oldPassword.waitFor({
      state: 'visible',
      timeout: 15000,
    });
  }

  async updateProfile(first, last) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);

    await this.saveButton.click();
  }

 
  async changePasswordFlow(oldPwd, newPwd) {
    await this.oldPassword.fill(oldPwd);
    await this.newPassword.fill(newPwd);
    await this.confirmPassword.fill(newPwd);

    await this.changePasswordButton.click();
  }
}

module.exports = UserProfilePage;