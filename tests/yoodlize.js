module.exports = {
    beforeEach: browser => {
        browser.url("https://alpha.yoodlize.com")
    },
    after: browser => {
        browser.end()
    },
    'QAE-52 Check the See All links for each category and the Browse Categories tiles': browser => {
        browser
            // checking the first 'see all' link on the page
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Recreational Vehicles")
            .back()
        browser
            // checking the second 'see all' link on the page
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Outdoor Gear")
            .back()
        browser
            // checking the third 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Electronics")
            .back()
        browser
            // checking the fourth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Party & Wedding Equipment")
            .back()
        browser
            // checking the fifth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Tools")
            .back()
        browser
            // checking the sixth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Clothing")
            .back()
        browser
            // checking the seventh 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])',"Home and Kitchen")
            .back()
        browser
            // checking the eighth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Toys and Games")
            .back()
        browser
            // checking the ninth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Lawn and Garden")
            .back()
        browser
            // checking the tenth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Sporting Goods")
            .back()
        browser
            // checking the eleventh 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "DVDs & Video Games")
            .back()
        browser
            // checking the twelvth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Venues")
            .back()
        browser
            // checking the thirteenth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Local Experts")
            .back()
        browser
            // checking the fourteenth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Experiences")
            .back()
        browser
            // checking the fifteenth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Music")
            .back()
        browser
            // checking the sixteenth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[16]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Business Equipment")
            .back()
        browser
            // checking the seventeenth 'see all' link
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[17]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Misc")
            .back()
        browser
            // checking the first 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[1]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Tools")
            .back()
        browser
            // checking the second 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[2]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Outdoor Gear")
            .back()
        browser
            // checking the third 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[3]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Electronics")
            .back()
        browser
            // checking the fourth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[4]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Party & Wedding")
            .back()
        browser
            // checking the fifth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[5]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Recreational Vehicles")
            .back()
        browser
            // checking the sixth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[6]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Clothing")
            .back()
        browser
            // checking the seventh 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[7]')
            .pause(3000)
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Home and Kitchen")
            .back()
        browser
            // checking the eighth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[8]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Toys and Games")
            .back()
        browser
            // checking the ninth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[9]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Lawn and Garden")
            .back()
        browser
            // checking the tenth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[10]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Sporting Goods")
            .back()
        browser
            // checking the eleventh 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[11]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "DVDs & Video Games")
            .back()
        browser
            // checking the twelvth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[12]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Venues")
            .back()
        browser
            // checking the thirteenth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[13]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Local Experts")
            .back()
        browser
            // checking the fourteenth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[14]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Experiences")
            .back()
        browser
            // checking the fifteenth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[15]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Music")
            .back()
        browser
            // checking the sixteenth 'Browse Category' tile
            .click('(//div[@class="f-1 f-cc"])[16]')
            .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Misc")
            .back()

    },
    'QAE-53 search for Rubix Cube in top search bar and verify item view information': browser =>
        browser
            // Searching for an item
            .useXpath()
            .setValue('//div[@class="form-control"]', ["Rubix Cube", browser.Keys.ENTER])
            


    }


