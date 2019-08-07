module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google search': browser => {
        browser 
            .setValue('input[name="q"]', ['javascript training', browser.Keys.ENTER])       
            .pause(2000)
            .waitForElementVisible('#res')
            browser.expect.element('#res').text.to.contain('javascript');

    }
}
