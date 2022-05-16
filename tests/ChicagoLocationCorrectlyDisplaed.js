module.exports = {
    'Chicago Location Test'(browser) {
        browser.url('https://www.designory.com/locations/chicago')
            .windowMaximize('current')
            .assert.containsText('h1', 'CHI')
        browser.useXpath().getLocationInView('//a[@class=\'location\']')
            .assert.visible('//p[contains(text(),\'Phone\')]')

        browser.getCssProperty('//h2', 'font-size', function (result) {
            this.assert.equal(result.value, '40px')
        })

            // browser.useXpath().getLocationInView("//a[@class='location']")

        browser.useXpath()
            .waitForElementVisible("//a[@class='location']")
            .click("//a[@class='location']")
        browser.url(function (result) {
            this.assert.equal(result.value, "https://maps.googleapis.com/maps/api/staticmap?center  225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, " +
                "IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY")
        })
    }
    }


// Map URL is  "https://maps.googleapis.com/maps/api/staticmap?center=
// 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers=
// 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY"