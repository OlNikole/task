module.exports = {
    'Menu Verification test'(browser) {
        browser.url('https://www.designory.com')
            .waitForElementVisible('.navicon')
            .click('.navicon');

        browser.useXpath().expect.element("//a[text()='WORK']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='ABOUT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CAREERS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='LOCATIONS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CONTACT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='NEWS']").to.be.visible;
     }
}
