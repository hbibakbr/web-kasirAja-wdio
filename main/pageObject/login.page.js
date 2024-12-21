const wdioAction = require('../utilities/wdio-helper.js');
const wdioExpect = require('../utilities/wdio-expect.js');

class LoginPage {
    get emailField () {
        return 'input[id=email]';
    }

    get passwordField () {
        return 'input[id=password]';
    }

    get loginButton () {
        return 'button[type=submit]'
    }

    get errorMessage () {
        return 'div[role=alert]'
    }

    // Action Method
    async login () {
        await wdioAction.enterText(this.emailField, 'halo@test.com');
        await wdioAction.enterText(this.passwordField, 'secret_password');
        await wdioAction.clickOn(this.loginButton);
    }

    async inputEmail (email) {
        if (email == 'empty_email') {
            email = ''
        }

        await wdioAction.enterText(this.emailField, email);
    }

    async inputPassword (password) {
        if (password == 'empty_password') {
            password = ''
        }

        await wdioAction.enterText(this.passwordField, password);
    }

    async clickOnLoginButton () {
        await wdioAction.clickOn(this.loginButton);
    }

    // Expect Method

    async errorMessageIsHaveText (message) {
        await wdioExpect.toHaveText(this.errorMessage, message)
    }

}

module.exports = new LoginPage();