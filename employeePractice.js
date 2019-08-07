module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Check the homepage': browser => {
        browser
            .verify.containsText('.titleText', 'Employee Manager')
            .pause(300)
            .verify.containsText('#noEmployee', 'No Employee Selected')
            .pause(300)
    },
    'Modify employee info': browser => {
        browser
            .click('[name="employee1"]')
            .pause(300)
            .clearValue('input[name="nameEntry"]')
            .pause(300)
            .setValue('input[name="nameEntry"]', 'Test Name')
            .pause(300)
            .clearValue('input[name="phoneEntry"]')
            .pause(300)
            .setValue('input[name="phoneEntry"]', '5558675309')
            .pause(300)
            .clearValue('input[name="titleEntry"]')
            .pause(300)
            .setValue('input[name="titleEntry"]', 'HCIC')
            .pause(300)
            .click('[name="save"]')
            .pause(300)
            .verify.containsText('.listContainer', 'Test Name')
            .pause(3000)
    },
    'Verify Changed Info Persists': browser => {
        browser
            .click('[name="employee1"]')
            .pause(300)
            .clearValue('input[name="nameEntry"]')
            .pause(300)
            .setValue('input[name="nameEntry"]', 'Test Name')
            .pause(300)
            .clearValue('input[name="phoneEntry"]')
            .pause(300)
            .setValue('input[name="phoneEntry"]', '5558675309')
            .pause(300)
            .clearValue('input[name="titleEntry"]')
            .pause(300)
            .setValue('input[name="titleEntry"]', 'HCIC')
            .pause(300)
            .click('[name="save"]')
            .pause(300)
            .verify.containsText('.listContainer', 'Test Name')
            .pause(3000)
            .click('[name="employee4"]')
            .pause(300)
            .click('[name="employee1"]')
            .pause(300)

    },
    'Verify cancel button does not save changes': browser => {
        browser
            .click('[name="employee8"]')
            .pause(300)
            .clearValue('input[name="nameEntry"]')
            .pause(300)
            .clearValue('input[name="phoneEntry"]')
            .pause(300)
            .clearValue('input[name="titleEntry"]')
            .pause(300)
            .click(".neutralButton")
            .pause(300)
            .verify.containsText('.listContainer', 'Ruby Estrada')
            .pause(3000)
    }
}