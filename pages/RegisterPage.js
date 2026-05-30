// pages/RegisterPage.js

class RegisterPage {

    constructor(page) {

        this.page = page;

        this.registerLink = page.locator('.ico-register');

        this.genderMale = page.locator('#gender-male');

        this.genderFemale = page.locator('#gender-female');

        this.firstName = page.locator('#FirstName');

        this.lastName = page.locator('#LastName');

        this.email = page.locator('#Email');

        this.password = page.locator('#Password');

        this.confirmPassword = page.locator('#ConfirmPassword');

        this.registerButton = page.locator('#register-button');

        this.successMessage = page.locator('.result');
    }


    async gotoRegisterPage() {

        await this.page.goto('https://demowebshop.tricentis.com/');

        await this.registerLink.click();
    }


    async selectGender(gender) {

        if (gender.toLowerCase() === 'male') {

            
            await this.genderMale.check();

        } else {

       
           await this.genderFemale.check();
        }
    }


    async registerUser(
        gender,
        firstName,
        lastName,
        email,
        password
    ) {

        await this.selectGender(gender);

        await this.firstName.fill(firstName);

        await this.lastName.fill(lastName);

        await this.email.fill(email);

        await this.password.fill(password);

        await this.confirmPassword.fill(password);

        await this.registerButton.click();
    }
}

module.exports = RegisterPage;