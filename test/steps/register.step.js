const { When, Then } = require('@wdio/cucumber-framework');
const RegisterPage = require('../../main/pageObject/register.page.js')

When(/^user provide nama toko: (.+)$/, async (namaToko) => {
    await RegisterPage.inputNamaToko(namaToko);
});

When(/^user provide email: (.+)$/, async (email) => {
    await RegisterPage.inputEmail(email)
});

When(/^user provide password: (.+)$/, async (password) => {
    await RegisterPage.inputPassword(password)
});

When(/^user click daftar$/, async () => {
    await RegisterPage.clickOnDaftar()
});

Then(/^system directed user to (.+) page$/, async (url) => {
    await RegisterPage.directToLoginPage(url);
});

Then(/^system register display error message: (.+)$/, async (message) => {
    await RegisterPage.errorMessageIsHaveText(message);
});