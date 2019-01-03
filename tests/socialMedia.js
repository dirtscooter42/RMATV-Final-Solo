module.exports = {
    beforeEach: browser => {
        browser.url("https://www.rockymountainatvmc.com/")
            .waitForElementPresent('input[name="w"]', 5000)
    },
    after: browser => {
        browser.end()
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