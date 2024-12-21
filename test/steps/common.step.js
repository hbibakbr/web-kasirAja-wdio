const { Given, Then } = require('@wdio/cucumber-framework');
const BasePage = require('../../main/pageObject/base.page.js');
const MainMenu = require('../../main/pageObject/main.menu.js');
const LoginPage = require('../../main/pageObject/login.page.js');

Given(/^user visit page (.+)$/, async (url) => {
    await BasePage.navigateToPage(url);
})

Given(/^user login with valid credentials$/, async () => {
    await LoginPage.login();
})

Given(/^user click on ingin mencoba, daftar$/, async () => {
    await BasePage.clickOnRegisterButton();
})

Then(/^system display dashboard menu$/, async () => {
    await MainMenu.dashboardMenuIsDisplayed()
})