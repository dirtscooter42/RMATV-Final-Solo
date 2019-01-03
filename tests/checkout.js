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


}