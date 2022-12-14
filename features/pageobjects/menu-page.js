const Page = require('./page');

class menupage extends Page {

    get btnbuttons () {
        return $(`//span[.='Buttons']`);
    }

    get btndropable () {
        return $(`//li[.='Droppable']`);
    }

    async  clickbtnDropable() {
        await this.btndropable.scrollIntoView()
        await browser.pause(2000)
        await this.btndropable.click()
    }

    async  clickbtnbuttons() {
        await this.btnbuttons.scrollIntoView()
        await browser.pause(2000)
        await this.btnbuttons.click()
    }

    open() {
        return super.open('')
    }

}

module.exports = new menupage();
