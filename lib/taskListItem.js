const Component = require('./component');

class TaskListItem extends Component {
  constructor(components = [], priority = false) {
    super(components);
    this.priority = priority;
  }

  render() {
    const priorityClass = this.priority ? ' tasks-item-priority' : '';
    return `<li class="tasks-item${priorityClass}">${this.renderInnerHTML()}</li>`;
  }
}

module.exports = TaskListItem;