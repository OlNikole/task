module.exports = {
    'Menu Verification Relevant Pages '(browser) {
        browser.url('https://www.designory.com')
            .waitForElementVisible('.navicon')
            .click('.navicon');
        browser.useXpath().click("//a[text()='WORK']")
            .assert.containsText("//h1[@class='heading-2']",'Our Work.');
         browser.useXpath()
             .waitForElementVisible("//span[@class='navicon']")
             .click("//span[@class='navicon']")
             .click("//a[text()='ABOUT']")
             .assert.title('Print & Digital Agency | Designory');
        browser.useXpath()
            .waitForElementVisible("//span[@class='navicon']")
            .click("//span[@class='navicon']")
            .click("//a[text()='CAREERS']")
            .assert.title('Careers | Designory');
        browser.useXpath()
            .waitForElementVisible("//span[@class='navicon']")
            .click("//span[@class='navicon']")
            .click("//a[text()='CONTACT']")
            .assert.title('Contact | Designory');
        browser.useXpath()
            .waitForElementVisible("//span[@class='navicon']")
            .click("//span[@class='navicon']")
            .click("//a[text()='NEWS']")
            .assert.title('Designory News & Awards | Designory');




        // browser.useXpath()
        //     .waitForElementVisible("//span[@class='navicon']")
        //     .click("//span[@class='navicon']")
        //     .click("//a[text()='LOCATIONS']")
        //     .elements('css selector', '#LOCATIONS > tbody > tr > td', function (elements) {
        //                 elements.value.forEach(function (elementsObj, index) {
        //                     browser.elementIdText(elementsObj.ELEMENT, function (result) {
        //                     //    if (index % 3 == 0) {
        //                             console.log('\n' + result.value)
        //                         //}
        //                    })
        //                 })
        //
        //             })
    }
}