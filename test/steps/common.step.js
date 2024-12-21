const { Given } = require('@wdio/cucumber-framework');
const BasePage = require('../../main/pageObject/base.page.js');

Given(/^user visit page (.+)$/, async (url) => {
    await BasePage.navigateToPage(url);
})

Given(/^user click on ingin mencoba, daftar$/, async () => {
    await BasePage.clickOnRegisterButton();
})