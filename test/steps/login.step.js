const { When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../main/pageObject/login.page.js')

When(/^user input email: (.+)$/, async (email) => {
    await LoginPage.inputEmail(email)
});

When(/^user input password: (.+)$/, async (password) => {
    await LoginPage.inputPassword(password)
});

When(/^user click login$/, async () => {
    await LoginPage.clickOnLoginButton()
});

Then(/^system login display error message: (.+)$/, async (message) => {
    await LoginPage.errorMessageIsHaveText(message);
});