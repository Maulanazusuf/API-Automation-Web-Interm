const Page = require('./page');

class homepage extends Page {

    get btnSubmitElement () {
        return $(`[viewBox='0 0 448 512']`);
    }

    get btnSubmitInteraction () {
        return $(`[viewBox='0 0 1024 1024']`);
    }

    async  clickbtnSubmitElement() {
        await this.btnSubmitElement.scrollIntoView()
        await this.btnSubmitElement.click()
        await browser.pause(1000)
    }

    async  clickbtnSubmitinteraction() {
        await this.btnSubmitInteraction.scrollIntoView()
        await this.btnSubmitInteraction.click()
        await browser.pause(1000)
    }

    open() {
        return super.open('')
    }

}

module.exports = new homepage();
