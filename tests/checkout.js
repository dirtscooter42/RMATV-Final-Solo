module.exports = {
    beforeEach: browser => {
        browser.url("https://www.rockymountainatvmc.com/")
            .waitForElementPresent('input[name="w"]', 5000)
    },
    after: browser => {
        browser.end()
    },

    'Add item to Cart' : browser => {
        browser.setValue('input[name="w"]', 'tusk led light bar')
        .waitForElementPresent('button[id="MagGlassBtn"]', 5000)
        .click('button[id="MagGlassBtn"]')
        .waitForElementPresent('.sli_title', 5000)
        .click('img[title="Tusk Curved LED Light Bar"]')
        .waitForElementPresent('input[alt="Add To Cart"]', 5000)
        .click('input[alt="Add To Cart"]')
        .waitForElementPresent('span[class="icn-cart"]', 5000)
        .click('a[href="../../../Cart"]')
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
},

'Link to Facebook' : browser => {
    browser.click('area[href="https://www.facebook.com/rmatvmc"]')
    browser.url('https://www.facebook.com/rmatvmc')
    browser.assert.urlContains('https://www.facebook.com/rmatvmc')
},

'Link to Instagram' : browser => {
    browser.click('area[href="http://instagram.com/rmatvmc"]')
    browser.url('https://www.instagram.com/rmatvmc/')
    browser.assert.urlContains('https://www.instagram.com/rmatvmc/')
},

'Link to Twitter' : browser => {
    browser.click('area[href="http://twitter.com/RMatvmc"]')
    browser.url('https://twitter.com/RMatvmc')
    browser.assert.urlContains('https://twitter.com/RMatvmc')
},

// 'Link to Google Plus' : browser => {
//     browser.click('area[href="https://plus.google.com/u/0/b/101196208721834778089/101196208721834778089/posts"]')
//     browser.url('https://plus.google.com/u/0/+rmatvmc')
//         .waitForElementPresent('input[class="Ax4B8 ZAGvjd"]')
//     browser.assert.urlContains('https://plus.google.com/u/0/+rmatvmc')
// },

'Link to Youtube' : browser => {
    browser.click('area[href="http://www.youtube.com/user/RockyMountainATVMC"]')
    browser.url('https://www.youtube.com/user/RockyMountainATVMC')
    browser.assert.urlContains('https://www.youtube.com/user/RockyMountainATVMC')
},

}