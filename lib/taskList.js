const Component = require('./component');

class TaskList extends Component {
  constructor(components = []) {
    super(components);
  }

  render() {
    return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
  }
}

module.exports = TaskList;