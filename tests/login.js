module.exports = {
    beforeEach: browser => {
        browser.url("https://www.rockymountainatvmc.com/Login")
            .waitForElementPresent('button[id="loginBtn"]', 5000)
    },
    after: browser => {
        browser.end()
    },

    'Logging in 1' : browser => {
        browser.setValue('input[name="email"]', 'motoxman393@hotmail.com')
        .setValue('input[name="password"]', 'asdf123456')
        .click('button[id="loginBtn"]')
        browser.expect.element('input[name="firstName"]').value.to.contain('JARED')
    },

    'Logging in 2' : browser => {
        browser.setValue('input[name="email"]', 'jared.shepherd87@gmail.com')
        .setValue('input[name="password"]', 'asdf123456')
        .click('button[id="loginBtn"]')
        browser.expect.element('input[name="firstName"]').value.to.contain('JARED')
    },
}
