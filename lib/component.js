class Component {
    constructor(components = []) {
        this.components = components;
    }

    render() {
        throw new Error('Child class must implement render() method.');
    }

    renderInnerHTML() {
        return this.components
        .map((component) => {
          return typeof component === 'string' ? component : component.render();
        })
        .join('');
    }
}

module.exports = Component;