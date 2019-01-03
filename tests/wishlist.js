module.exports = {
    beforeEach: browser => {
        browser.url("https://www.rockymountainatvmc.com/")
            .waitForElementPresent('input[name="w"]', 5000)
    },
    after: browser => {
        browser.end()
    },

    'Add Item to Wish List' : browser => {
        browser.setValue('input[name="w"]', 'tusk led light bar')
        .waitForElementPresent('button[id="MagGlassBtn"]', 5000)
        .click('button[id="MagGlassBtn"]')
        .waitForElementPresent('.sli_title', 5000)
        .click('img[title="Tusk Curved LED Light Bar"]')
        .useXpath()
        .waitForElementPresent('//a[text()=" Add to wish list "]', 5000)
        .click('//a[text()=" Add to wish list "]')
        .useCss()
        .waitForElementPresent('input[name="email"]', 5000)
        .pause(300)
        .clearValue('input[name="email"]')
        .setValue('input[name="email"]', 'jared.shepherd87@gmail.com')
        .waitForElementPresent('input[name="password"]', 5000)
        .setValue('input[name="password"]', 'asdf123456')
        .waitForElementPresent('button[id="loginBtn"]', 5000)
        .click('button[id="loginBtn"]')
        .useXpath()
        .waitForElementPresent('//a[text()="Go to your Wish List "]', 5000)
        .click('//a[text()="Go to your Wish List "]')
        .useCss()
        .waitForElementPresent('input[class="addCartBtn"]', 5000)
        .click('input[class="addCartBtn"]')
    }

}
