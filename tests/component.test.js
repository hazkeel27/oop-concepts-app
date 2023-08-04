const Component = require('../lib/component');

describe('Component', () => {
    describe('render method', () => {
        it('verify that render() throws an error when called directly', () => {
            const component = new Component();
            const error = new Error('Child class must implement render() method.');
            expect(component.render).toThrowError(error);
        });
    });
});