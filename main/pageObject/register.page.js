const wdioAction = require('../utilities/wdio-helper.js');
const wdioExpect = require('../utilities/wdio-expect.js');
const { generateRandomEmail } = require('../utilities/random-email.js')


class RegisterPage {
    get namaTokoField () {
        return 'input[id=name]';
    }

    get emailField () {
        return 'input[id=email]';
    }

    get passwordField () {
        return 'input[id=password]';
    }

    get daftarButton () {
        return 'button[type=submit]'
    }

    get errorMessage () {
        return 'div[role=alert]'
    }

    get successMessageTitle () {
        return 'div[role=alert]'
    }

    get successMessageDesc () {
        return 'div[role=alert]'
    }

    // Action Method
    async inputNamaToko (namaToko) {
        if (namaToko == 'empty_name') {
            namaToko = ''
        }

        await wdioAction.enterText(this.namaTokoField, namaToko);
    }

    async inputEmail (email) {
        if (email === 'random_email') {
            email = generateRandomEmail()
        }

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

    async clickOnDaftar () {
        await wdioAction.clickOn(this.daftarButton);
    }

    // Expect Method
    async directToLoginPage (url) {
        await wdioExpect.isUrlContains(url)
    }

    async successMessageIsHaveText (message) {
        await wdioExpect.toHaveText(this.successMessageTitle, message)
    }

    async errorMessageIsHaveText (message) {
        await wdioExpect.toHaveText(this.errorMessage, message)
    }
}

module.exports = new RegisterPage();