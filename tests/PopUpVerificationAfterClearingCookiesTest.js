module.exports ={
    'PopUpVerificationAfterClearingCookiesTest'(browser) {
        browser.url('https://www.designory.com');
        browser.execute(function() {
            return localStorage.clear();
        })
            browser.useXpath().expect.element("//button[@class='cookie-button']").to.be.visible;

    }
}
//Verify that after clearing cookies the “cookie notice” shows up again.