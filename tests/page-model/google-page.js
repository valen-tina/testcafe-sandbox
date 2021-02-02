import {t, Selector} from 'testcafe';

class GooglePage {
    constructor() {
        this.searchField = Selector(`input`).withAttribute('name', 'q');
        this.searchButton = Selector(`input`).withText("Google Search");
        this.luckySearchButton = Selector(`input`).withText("I'm Feeling Lucky");
        this.resultsList = Selector(`#rcnt`);
        this.firstLink = Selector(`#res h3`).nth(0);
    }

    async makeSearch(query) {
        await t.typeText(this.searchField, query)
                .pressKey('enter');
    }
    
}

export default new GooglePage();