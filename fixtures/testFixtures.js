const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const RegisterPage = require('../pages/RegisterPage');

const HomePage = require('../pages/HomePage');

const ProductPage = require('../pages/ProductPage');

const ShoppingCartPage = require('../pages/ShoppingCartPage');

const CompareEmailPage = require('../pages/CompareEmailPage');

const UserProfilePage = require('../pages/UserProfilePage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },


    registerPage: async ({ page }, use) => {

        await use(new RegisterPage(page));
    },


    homePage: async ({ page }, use) => {

        await use(new HomePage(page));
    },

    productPage: async ({ page }, use) => {

        await use(new ProductPage(page));
    },

    shoppingCartPage: async ({ page }, use) => {
        await use(new ShoppingCartPage(page));
    },

   compareEmailPage: async ({ page }, use) => {
        await use(new CompareEmailPage(page));
    },

    userProfilePage: async ({ page }, use) => {

    await use(new UserProfilePage(page));
},
});


exports.expect = base.expect;
