var yoodlizePage
module.exports = {
    beforeEach: browser => {
        yoodlizePage = browser.page.yoodlizePage()
        yoodlizePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'QAE-52 Check the See All links for each category and the Browse Categories tiles': browser => {
        yoodlizePage
            // checking the first 'see all' link on the page
            .click('@recVehicles')
            .verify.containsText('@results', "Recreational Vehicles")
            .api.back()
        yoodlizePage
            // checking the second 'see all' link on the page
            .click('@outdoorGear')
            .verify.containsText('@results', "Outdoor Gear")
            .api.back()
        yoodlizePage
            // checking the third 'see all' link
            .click('@electronics')
            .verify.containsText('@results', "Electronics")
            .api.back()
        yoodlizePage
            // checking the fourth 'see all' link
            .click('@partyWedding')
            .verify.containsText('@results', "Party & Wedding Equipment")
            .api.back()
        yoodlizePage
            // checking the fifth 'see all' link
            .click('@tools')
            .verify.containsText('@results', "Tools")
            .api.back()
        yoodlizePage
            // checking the sixth 'see all' link
            .click('@clothing')
            .api.pause(1500)
        yoodlizePage
            .verify.containsText('@results', "Clothing")
            .api.back()
        yoodlizePage
            // checking the seventh 'see all' link
            .click('@homeKitchen')
            .verify.containsText('@results', "Home and Kitchen")
            .api.back()
        yoodlizePage
            // checking the eighth 'see all' link
            .click('@toysGames')
            .verify.containsText('@results', "Toys and Games")
            .api.back()
        yoodlizePage
            // checking the ninth 'see all' link
            .click('@lawnGarden')
            .verify.containsText('@results', "Lawn and Garden")
            .api.back()
        yoodlizePage
            // checking the tenth 'see all' link
            .click('@sportingGoods')
            .verify.containsText('@results', "Sporting Goods")
            .api.back()
        yoodlizePage
            // checking the eleventh 'see all' link
            .click('@dvdVideoGames')
            .verify.containsText('@results', "DVDs & Video Games")
            .api.back()
        yoodlizePage
            // checking the twelvth 'see all' link
            .click('@venues')
            .verify.containsText('@results', "Venues")
            .api.back()
        yoodlizePage
            // checking the thirteenth 'see all' link
            .click('@localExperts')
            .verify.containsText('@results', "Local Experts")
            .api.back()
        yoodlizePage
            // checking the fourteenth 'see all' link
            .click('@experiences')
            .verify.containsText('@results', "Experiences")
            .api.back()
        yoodlizePage
            // checking the fifteenth 'see all' link
            .click('@music')
            .verify.containsText('@results', "Music")
            .api.back()
        yoodlizePage
            // checking the sixteenth 'see all' link
            .click('@bizEquip')
            .verify.containsText('@results', "Business Equipment")
            .api.back()
        yoodlizePage
            // checking the seventeenth 'see all' link
            .click('@misc')
            .verify.containsText('@results', "Misc")
            .api.back()
        yoodlizePage
            // checking the first 'Browse Category' tile
            .click('@toolsTile')
            .verify.containsText('@results', "Tools")
            .api.back()
        yoodlizePage
            // checking the second 'Browse Category' tile
            .click('@outdoorGearTile')
            .verify.containsText('@results', "Outdoor Gear")
            .api.back()
        yoodlizePage
            // checking the third 'Browse Category' tile
            .click('@electronicsTile')
            .verify.containsText('@results', "Electronics")
            .api.back()
        yoodlizePage
            // checking the fourth 'Browse Category' tile
            .click('@partyWeddingTile')
            .verify.containsText('@results', "Party & Wedding")
            .api.back()
        yoodlizePage
            // checking the fifth 'Browse Category' tile
            .click('@recVehicleTile')
            .verify.containsText('@results', "Recreational Vehicles")
            .api.back()
        yoodlizePage
            // checking the sixth 'Browse Category' tile
            .click('@clothingTile')
            .verify.containsText('@results', "Clothing")
            .api.back()
        yoodlizePage
            // checking the seventh 'Browse Category' tile
            .click('@homeKitchenTile')
            .verify.containsText('@results', "Home and Kitchen")
            .api.back()
        yoodlizePage
            // checking the eighth 'Browse Category' tile
            .click('@toysGamesTile')
            .verify.containsText('@results', "Toys and Games")
            .api.back()
        yoodlizePage
            // checking the ninth 'Browse Category' tile
            .click('@lawnGardenTile')
            .verify.containsText('@results', "Lawn and Garden")
            .api.back()
        yoodlizePage
            // checking the tenth 'Browse Category' tile
            .click('@sportingGoodsTile')
            .verify.containsText('@results', "Sporting Goods")
            .api.back()
        yoodlizePage
            // checking the eleventh 'Browse Category' tile
            .click('@dvdVideoGamesTile')
            .verify.containsText('@results', "DVDs & Video Games")
            .api.back()
        yoodlizePage
            // checking the twelvth 'Browse Category' tile
            .click('@venuesTile')
            .verify.containsText('@results', "Venues")
            .api.back()
        yoodlizePage
            // checking the thirteenth 'Browse Category' tile
            .click('@localExpertsTile')
            .verify.containsText('@results', "Local Experts")
            .api.back()
        yoodlizePage
            // checking the fourteenth 'Browse Category' tile
            .click('@experiencesTile')
            .verify.containsText('@results', "Experiences")
            .api.back()
        yoodlizePage
            // checking the fifteenth 'Browse Category' tile
            .click('@musicTile')
            .verify.containsText('@results', "Music")
            .api.back()
        yoodlizePage
            // checking the sixteenth 'Browse Category' tile
            .click('@miscTile')
            .verify.containsText('@results', "Misc")
            .api.back()
        // },
        // 'QAE-53 search for Rubix Cube in top search bar and verify item view information': browser =>
        //     browser
        //         // Searching for an item
        //         .useXpath()
        //         .setValue('//div[@class="form-control"]', ["Rubix Cube", browser.Keys.ENTER])



    }

}
