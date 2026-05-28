const { test, expect } = require('../../fixtures/testFixtures');
const userData = require('../../testData/userData');

test.describe('User Profile Module', () => {

    test.beforeEach(async ({ loginPage, userProfilePage, page }) => {

        await loginPage.gotoLoginPage();

        await loginPage.login(
            userData.validUser.email,
            userData.validUser.password
        );

       
        await expect(page).toHaveURL(/home|account|profile|dashboard|com/);

      
        await userProfilePage.openProfile();
    });

    
    test('TC01 Verify profile fields visible', async ({ userProfilePage }) => {
        await expect(userProfilePage.firstName).toBeVisible();
        await expect(userProfilePage.lastName).toBeVisible();
        await expect(userProfilePage.email).toBeVisible();
    });


    
    test('TC02 Verify addresses section', async ({ userProfilePage }) => {
        await userProfilePage.openAddresses();
        await expect(userProfilePage.addressesLink).toBeVisible();
    });

  
    test('TC03 Verify orders section', async ({ userProfilePage }) => {
        await userProfilePage.openOrders();
        await expect(userProfilePage.ordersLink).toBeVisible();
    });

});