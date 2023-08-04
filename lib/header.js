const Component = require('./component');
const date = require('./date');

class Header extends Component {
    render() {
      const formatDate = date.formatDate(new Date());
      return `<header class="header"><h1>Todo Today</h1><p>${formatDate}</p></header>`;
    }
  }

  module.exports = Header;
  