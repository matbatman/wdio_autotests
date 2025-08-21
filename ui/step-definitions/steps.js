const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given('Я на странице стим', async () => {
    await browser.url('https://store.steampowered.com/');
});

When(/^Я нажимаю на элемент меню '([^']+)'$/, async (elementMenu) => {
    const menuButton = await $(LoginPage.SELECTORS.TAB_NAME(elementMenu))
    await menuButton.click()
});

When(/^Я нахожусь на странице стим '([^']+)'$/, async (page) => {
    await expect(browser).toHaveUrl(expect.stringContaining(page))
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

When('Я нажимаю на элемент меню поиска', async () => {
    const searchButton = await $(LoginPage.SELECTORS.SEARCH_BUTTON)
    await searchButton.click()
});

Then('Отображается контейнер с результатами поиска', async () => {
    let elem = await $(LoginPage.SELECTORS.SEARCH_RESULTS_ROWS);
    await expect(elem).toBeDisplayed()
});

When(/^Я ввожу в поле ввода поиска '([^']+)'$/, async (gameName) => {
    const input = await $(LoginPage.SELECTORS.STORE_SEARCH_INPUT);
    await input.setValue(gameName)
});

When(/^Отображается игра '([^']+)'$/, async (gameName) => {
    let elem = await $(LoginPage.SELECTORS.GAME_NAME(gameName));
    await expect(elem).toBeDisplayed()

});

When(/^Я нажимаю на элемент популярных разделов '([^']+)'$/, async (popularName) => {
    const popularButton = await $(LoginPage.SELECTORS.POPULAR_NAME(popularName));
    await popularButton.click()
});



