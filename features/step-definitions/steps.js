const { Given, When, Then } = require('@wdio/cucumber-framework');

const homepage = require('../pageobjects/home-page');
const menupage = require('../pageobjects/menu-page');
const Page = require('../pageobjects/page');
const SubMenuPage = require('../pageobjects/Sub-menu-page');

Given('I am on Homepage', async() => {
    await homepage.open()
    await browser.pause(1000)
})

// ELEMENT CODE //
When('I am click menu element', async() => {
    await homepage.clickbtnSubmitElement()
    await browser.pause(2000)
})

When('I am select sub menu buttons', async() => {
    await menupage.clickbtnbuttons()
    await browser.pause(2000)
})

When('I am assertion double click', async() => {
    await SubMenuPage.doubleclick()
    await browser.pause(1000)
})

When('I am assertion right click', async() => {
    await SubMenuPage.clickrightme()
    await browser.pause(1000)
})
When('I am assertion click me', async() => {
    await SubMenuPage.oneclick()
    await browser.pause(1000)
    await SubMenuPage.clickBrowserBackBtn()
    await browser.pause(2000)
})

// INTERACTION CODE //

When('I am click menu interaction', async() => {
    await homepage.clickbtnSubmitinteraction()
    await browser.pause(2000)
})

When('I am select sub menu dropable', async() => {
    await menupage.clickbtnDropable()
    await browser.pause(2000)
})

When('I am assertion drag and drop', async() => {
    await SubMenuPage.trydropbtn()
    await browser.pause(1000)
})
