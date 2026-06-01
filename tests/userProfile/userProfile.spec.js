// tests/userProfile/userProfile.spec.js

const { test, expect } = require('../../fixtures/testFixtures');

const userData = require('../../testData/userData');

test.describe('User Profile Module - 15 Test Cases', () => {

  test.beforeEach(async ({ loginPage, userProfilePage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login(
      userData.validUser.email,
      userData.validUser.password
    );

  
    await userProfilePage.openMyAccount();
  });


  test('TC01 Profile page load', async ({ userProfilePage }) => {
    await expect(userProfilePage.email).toBeVisible();
  });

 
  test('TC02 Update profile', async ({ userProfilePage }) => {
    await userProfilePage.updateProfile('John', 'Doe');
  });

 
  test('TC03 Email visible', async ({ userProfilePage }) => {
    await expect(userProfilePage.email).toBeVisible();
  });

  
  test('TC04 Orders navigation', async ({ userProfilePage }) => {
    await userProfilePage.openOrders();

    await expect(userProfilePage.page).toHaveURL(/orders/);
  });

 
  test('TC05 Email validation', async ({ userProfilePage }) => {

    await userProfilePage.email.fill('invalid-email');

    await userProfilePage.saveButton.click();
  });


 test('TC06 Verify Email Field Contains User Email', async ({ userProfilePage }) => {

  await expect(userProfilePage.email)
    .toHaveValue(userData.validUser.email);

});


  test('TC07 Address navigation', async ({ userProfilePage }) => {

    await userProfilePage.openAddresses();

    await expect(userProfilePage.page).toHaveURL(/addresses/);
  });

  
  test('TC08 Change password open', async ({ userProfilePage }) => {

    await userProfilePage.openChangePassword();

    await expect(userProfilePage.oldPassword).toBeVisible();
  });

 
  test('TC09 Password mismatch', async ({ userProfilePage }) => {

    await userProfilePage.openChangePassword();

    await userProfilePage.changePasswordFlow(
      'wrongpassword',
      'newpassword123'
    );
  });

 
  test('TC10 Verify Save Button Visible', async ({ userProfilePage }) => {

  await expect(userProfilePage.saveButton)
    .toBeVisible();

});


  test('TC11 Save profile', async ({ userProfilePage }) => {

    await userProfilePage.updateProfile('Test', 'User');
  });

 
  test('TC12 Password fields visible', async ({ userProfilePage }) => {

    await userProfilePage.openChangePassword();

    await expect(userProfilePage.newPassword).toBeVisible();

    await expect(userProfilePage.confirmPassword).toBeVisible();
  });

 
  test('TC13 Invalid email', async ({ userProfilePage }) => {

    await userProfilePage.email.fill('wrong');

    await expect(userProfilePage.email).toHaveValue('wrong');
  });


  test('TC14 Orders page', async ({ userProfilePage }) => {

    await userProfilePage.openOrders();

    await expect(userProfilePage.page).toHaveURL(/orders/);
  });

 
  test('TC15 UI stability', async ({ userProfilePage }) => {

    await expect(userProfilePage.firstName).toBeVisible();

    await expect(userProfilePage.lastName).toBeVisible();

    await expect(userProfilePage.email).toBeVisible();
  });

});