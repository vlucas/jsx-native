const { PureComponent } = require('react');


const { jsx } = require('./jsx-tmpl/index');
const Content = require('./Content');

class App extends PureComponent {
  render() {
    return jsx`
      <div class="App">
        <${Content} name="John Doe" />
      </div>
    `;
  }
}

module.exports = App;
