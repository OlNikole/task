module.exports ={
    'PopUpVerificationNotVisibleAfterAccepting'(browser) {
        browser.url('https://www.designory.com')
            .waitForElementVisible('.cookie-x-button')
            .click('.cookie-x-button');
        browser.useXpath().expect.element("//button[@class='cookie-button']").to.be.not.visible;

    }
}