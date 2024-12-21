const wdioAction = require('../utilities/wdio-helper.js');

class BasePage {
    get registerButton () {
        return 'a[href="/register"]';
    }

    // Method
    async navigateToPage (url) {
        await wdioAction.navigateToUrl(url);
    }

    async clickOnRegisterButton () {
        await wdioAction.clickOn(this.registerButton);
    }
}

module.exports = new BasePage();
