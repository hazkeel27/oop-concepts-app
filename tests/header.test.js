const Header = require('../lib/header');
const { formatDate } = require('../lib/date.js');

describe('Header', () => {
    describe('render date', () => {
        it('verify the header renders correctly with the date', () => {
            const header = new Header();
            const htmlString = `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`;
            expect(header.render()).toEqual(htmlString);
        });
    });
});