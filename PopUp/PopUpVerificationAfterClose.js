module.exports = {
    'PopUpVerificationAfterClose'(browser) {
        browser.url('https://www.designory.com')
            .waitForElementVisible('.cookie-button')
            .click('.cookie-button');
        browser.useXpath().expect.element("//button[@class='cookie-button']").to.be.not.visible;
    }


}