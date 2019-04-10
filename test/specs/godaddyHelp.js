const assert = require('assert');

describe('godaddy help page', () => {
    it('should have the right title', () => {
        browser.url('https://www.godaddy.com/help');
        const title = browser.getTitle();
        assert.equal(title, 'GoDaddy Help and Support | Customer Knowledge Base – GoDaddy Help');
    });
});