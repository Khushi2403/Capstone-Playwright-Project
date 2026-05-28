// pages/UserProfilePage.js

class UserProfilePage {

    constructor(page) {

        this.page = page;

        // Profile
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');

        this.saveBtn = page.locator(
            'button[name="save-info-button"]'
        );

        this.validationError = page.locator(
            '.field-validation-error'
        );

        // Change Password
        this.changePasswordLink = page.getByRole('link', {
            name: /change password/i
        });

        this.oldPassword = page.locator('#OldPassword');

        this.newPassword = page.locator('#NewPassword');

        this.confirmPassword = page.locator('#ConfirmNewPassword');

        this.changePasswordBtn = page.locator(
            'button.change-password-button'
        );

        this.errorMessage = page.locator('.message-error');

        // Addresses
        this.addressesLink = page.getByRole('link', {
            name: /addresses/i
        });

        this.addNewAddressBtn = page.locator(
            'button.add-address-button'
        );

        this.addressFirstName = page.locator('#Address_FirstName');

        this.addressLastName = page.locator('#Address_LastName');

        this.addressEmail = page.locator('#Address_Email');

        this.addressCity = page.locator('#Address_City');

        this.address1 = page.locator('#Address_Address1');

        this.addressZip = page.locator(
            '#Address_ZipPostalCode'
        );

        this.addressPhone = page.locator(
            '#Address_PhoneNumber'
        );

        this.addressSaveBtn = page.locator(
            'button.save-address-button'
        );
    }

    async openMyAccount() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/customer/info'
        );
    }

    async updateProfile(first, last) {

        await this.firstName.fill(first);

        await this.lastName.fill(last);

        await this.saveBtn.scrollIntoViewIfNeeded();

        await this.saveBtn.click();
    }

    async openChangePasswordPage() {

        await this.changePasswordLink.click();
    }

    async changePassword(oldPass, newPass, confirmPass) {

        await this.oldPassword.fill(oldPass);

        await this.newPassword.fill(newPass);

        await this.confirmPassword.fill(confirmPass);

        await this.changePasswordBtn.scrollIntoViewIfNeeded();

        await this.changePasswordBtn.click();
    }

    async openAddresses() {

        await this.addressesLink.click();
    }

    async addAddress(address) {

        await this.addNewAddressBtn.click();

        await this.addressFirstName.fill(address.firstName);

        await this.addressLastName.fill(address.lastName);

        await this.addressEmail.fill(address.email);

        await this.addressCity.fill(address.city);

        await this.address1.fill(address.address1);

        await this.addressZip.fill(address.zip);

        await this.addressPhone.fill(address.phone);

        await this.addressSaveBtn.click();
    }

    async openOrdersPage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/customer/orders'
        );
    }
}

module.exports = UserProfilePage;