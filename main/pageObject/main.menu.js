const wdioExpect = require('../utilities/wdio-expect.js');
const wdioAction = require('../utilities/wdio-helper.js');

class MainMenu {
    get dashboardMenu () {
        return 'a[href="/dashboard"]'
    }

    get penjualanMenu () {
        return 'a[href="/sales"]'
    }

    get pembelianMenu () {
        return 'a[href="/purchases"]'
    }

    get kategoriMenu () {
        return 'a[href="/categories"]'
    }

    get produkMenu () {
        return 'a[href="/products"]'
    }

    get penggunaMenu () {
        return 'a[href="/users"]'
    }

    get pelangganMenu () {
        return 'a[href="/customers"]'
    }

    get profilMenu () {
        return 'button[id=menu-button-3]'
    }

    // Action Method
    async clickDashboardMenu () {
        await wdioAction.clickOn(this.dashboardMenu);
    }

    async clickOnSalesMenu () {
        await wdioAction.clickOn(this.penjualanMenu);
    }

    async clickOnPurchasesMenu () {
        await wdioAction.clickOn(this.pembelianMenu);
    }

    async clickOnCategoryMenu () {
        await wdioAction.clickOn(this.kategoriMenu);
    }

    async clickOnProductMenu () {
        await wdioAction.clickOn(this.produkMenu);
    }

    async clickOnUserMenu () {
        await wdioAction.clickOn(this.penggunaMenu);
    }

    async clickOnCustomerMenu () {
        await wdioAction.clickOn(this.pelangganMenu);
    }

    async clickOnProfileMenu () {
        await wdioAction.clickOn(this.profilMenu);
    }

    async clickOnMenu (menu) {
        if (menu = 'sales menu') {
            this.clickOnSalesMenu();
        }
        
        if (menu = 'purchase menu') {
            this.clickOnPurchasesMenu();
        }

        if (menu = 'category menu') {
            this.clickOnCategoryMenu();
        }

        if (menu = 'product menu') {
            this.clickOnProductMenu();
        }

        if (menu = 'user menu') {
            this.clickOnUserMenu();
        }

        if (menu = 'customer menu') {
            this.clickOnCustomerMenu();
        }

        if (menu = 'dashboard menu') {
            this.clickDashboardMenu();
        }

    }

    // Expect Method
    async dashboardMenuIsDisplayed () {
        await wdioAction.isExisting(this.dashboardMenu);
    }

    async pageIsHaveUrl (url) {
        await wdioExpect.isUrlContains(url)
    }
}

module.exports = new MainMenu();