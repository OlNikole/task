module.exports = {
    'Menu Verification Menu Options '(browser) {
        browser.url('https://www.designory.com')
            .waitForElementVisible('.navicon')
            .click('.navicon');
        browser.useXpath()
            .click("//a[text()='WORK']")
            .click("//span[@class='navicon']")
        browser.useXpath().expect.element("//a[text()='WORK']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='ABOUT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CAREERS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='LOCATIONS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CONTACT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='NEWS']").to.be.visible;
        browser.useXpath()
            .click("//a[text()='ABOUT']")
            .click("//span[@class='navicon']")
        browser.useXpath().expect.element("//a[text()='WORK']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='ABOUT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CAREERS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='LOCATIONS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CONTACT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='NEWS']").to.be.visible;
        browser.useXpath()
            .click("//a[text()='CAREERS']")
            .click("//span[@class='navicon']")
        browser.useXpath().expect.element("//a[text()='WORK']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='ABOUT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CAREERS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='LOCATIONS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CONTACT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='NEWS']").to.be.visible;
        browser.useXpath()
            .click("//a[text()='CONTACT']")
            .click("//span[@class='navicon']")
        browser.useXpath().expect.element("//a[text()='WORK']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='ABOUT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CAREERS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='LOCATIONS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CONTACT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='NEWS']").to.be.visible;
        browser.useXpath()
            .click("//a[text()='NEWS']")
            .click("//span[@class='navicon']")
        browser.useXpath().expect.element("//a[text()='WORK']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='ABOUT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CAREERS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='LOCATIONS']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='CONTACT']").to.be.visible;
        browser.useXpath().expect.element("//a[text()='NEWS']").to.be.visible;



    }
}