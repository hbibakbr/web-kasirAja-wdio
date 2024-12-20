const wdioAction = require('../utilities/wdio-helpers.js');

class BasePage {
    // Method
    async navigateToPage(url) {
        await wdioAction.navigateToUrl(url);
    }
}

module.exports = new BasePage();
