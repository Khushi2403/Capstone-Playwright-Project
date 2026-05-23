const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const RegisterPage = require('../pages/RegisterPage');

const HomePage = require('../pages/HomePage');


exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },


    registerPage: async ({ page }, use) => {

        await use(new RegisterPage(page));
    },


    homePage: async ({ page }, use) => {

        await use(new HomePage(page));
    }
});


exports.expect = base.expect;
