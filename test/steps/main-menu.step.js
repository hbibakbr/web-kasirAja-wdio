const { When, Then } = require('@wdio/cucumber-framework');
const MainMenu = require('../../main/pageObject/main.menu.js');


When(/^user click on (.+)$/, async (menu) => {
    await MainMenu.clickOnMenu(menu)
});

Then(/^user redirect to url: (.+) page$/, async (url) => {
    await MainMenu.pageIsHaveUrl(url);
});