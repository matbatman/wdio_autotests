const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    SELECTORS = {
        TAB_NAME: (elementMenu) => `//div[@class='supernav_container']//a[contains(text(), '${elementMenu}')]`,
        SEARCH_BUTTON: '#store_search_link img',
        SEARCH_RESULTS_ROWS: '#search_resultsRows',
        STORE_SEARCH_INPUT: '#store_nav_search_term',
        GAME_NAME: (someName) => `//span[@class='title'][text()='${someName}']`,
        POPULAR_NAME: (popularName) => `//a[@class='big_button'][contains(text(),'${popularName}')]`,
        
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
