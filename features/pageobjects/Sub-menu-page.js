const Page = require('./page');

class submenu extends Page {

    get btndoubleclick () {
        return $(`//button[@id='doubleClickBtn']`);
    }

    get btnrightclickme () {
        return $(`//button[@id='rightClickBtn']`);
    }

    get btnclick () {
        return $(`//button[.='Click Me']`);
    }

    get dragbox () {
        return $(`#draggable`);
    }

    get drop () {
        return $(`#droppable`)
    }
    async  doubleclick() {
        await this.btndoubleclick.doubleClick();
        await browser.pause(1000)
    }
    async  clickrightme() {
        await this.btnrightclickme.click({ button: 'right' })
        await browser.pause(1000)
    }
    async  oneclick() {
        await browser.pause(1000)
        await this.btnclick.click()
        await browser.pause(1000)
    }

    async clickBrowserBackBtn() {
        await browser.back()
        await browser.back()
    }

    async trydropbtn() {
        await browser.pause(1000)
        await this.dragbox.waitForExist(1000)
        await this.dragbox.dragAndDrop(await this.drop)
        await browser.pause(2000)
        
    }
}

module.exports = new submenu();
