// tests/userProfile/userProfile.spec.js

const { test, expect } = require('../../fixtures/testFixtures');
const userData = require('../../testData/userData');

test.describe('User Profile Module', () => {

    test.beforeEach(async ({ loginPage, userProfilePage }) => {

        await loginPage.gotoLoginPage();

        await loginPage.login(
            userData.validUser.email,
            userData.validUser.password
        );

        await userProfilePage.openMyAccount();
    });

    test('TC01 Verify My Account page opens', async ({ userProfilePage }) => {

        await expect(userProfilePage.page)
            .toHaveURL(/customer\/info/);
    });

    test('TC02 Verify profile fields visible', async ({ userProfilePage }) => {

        await expect(userProfilePage.firstName)
            .toBeVisible();

        await expect(userProfilePage.lastName)
            .toBeVisible();

        await expect(userProfilePage.email)
            .toBeVisible();
    });

    test('TC03 Verify profile update', async ({ userProfilePage }) => {

        await userProfilePage.updateProfile(
            'Khushi',
            'Agrawal'
        );

        await expect(userProfilePage.firstName)
            .toHaveValue('Khushi');

        await expect(userProfilePage.lastName)
            .toHaveValue('Agrawal');
    });

    test('TC04 Verify email field editable', async ({ userProfilePage }) => {

        await userProfilePage.email.fill(
            'capstone2026@gmail.com'
        );

        await expect(userProfilePage.email)
            .toHaveValue('capstone2026@gmail.com');
    });

    test('TC05 Verify invalid email validation', async ({ userProfilePage }) => {

        await userProfilePage.email.fill('invalidEmail');

        await userProfilePage.saveBtn.click();

        await expect(userProfilePage.validationError.first())
            .toContainText('Wrong email');
    });

    test('TC06 Verify change password page opens', async ({ userProfilePage }) => {

        await userProfilePage.openChangePasswordPage();

        await expect(userProfilePage.oldPassword)
            .toBeVisible();
    });

    test('TC07 Verify wrong old password validation', async ({ userProfilePage }) => {

        await userProfilePage.openChangePasswordPage();

        await userProfilePage.changePassword(
            'wrongPassword',
            'NewPass123',
            'NewPass123'
        );

        await expect(userProfilePage.errorMessage)
            .toBeVisible();
    });

    test('TC08 Verify password mismatch validation', async ({ userProfilePage }) => {

        await userProfilePage.openChangePasswordPage();

        await userProfilePage.changePassword(
            userData.validUser.password,
            'NewPass123',
            'Mismatch123'
        );

        await expect(userProfilePage.validationError)
            .toContainText('do not match');
    });

    test('TC09 Verify addresses page opens', async ({ userProfilePage }) => {

        await userProfilePage.openAddresses();

        await expect(userProfilePage.addNewAddressBtn)
            .toBeVisible();
    });

    test('TC10 Verify add new address', async ({ userProfilePage }) => {

        await userProfilePage.openAddresses();

        await userProfilePage.addAddress({

            firstName: 'Khushi',
            lastName: 'Agrawal',
            email: 'capstone2026@gmail.com',
            city: 'Nagpur',
            address1: 'ABC Street',
            zip: '440001',
            phone: '9876543210'
        });

        await expect(
            userProfilePage.page.locator('.address-list')
        ).toContainText('Nagpur');
    });

    test('TC11 Verify address mandatory field validation',
        async ({ userProfilePage }) => {

        await userProfilePage.openAddresses();

        await userProfilePage.addNewAddressBtn.click();

        await userProfilePage.addressSaveBtn.click();

        await expect(userProfilePage.validationError.first())
            .toBeVisible();
    });

    test('TC12 Verify orders page opens', async ({ userProfilePage }) => {

        await userProfilePage.openOrdersPage();

        await expect(userProfilePage.page)
            .toHaveURL(/customer\/orders/);
    });

    test('TC13 Verify account page title', async ({ userProfilePage }) => {

        await expect(
            userProfilePage.page.locator('.page-title')
        ).toContainText('My account');
    });

});