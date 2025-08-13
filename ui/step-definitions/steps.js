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

