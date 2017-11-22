const { jsx } = require('./jsx-tmpl/index');
const React = require('react');

class Content extends React.PureComponent {
  handleClick() {
    alert('Clicked me!');
  }

  render() {
    return jsx`
      <div class="content">
        <p>
          HELLO THERE, ${this.props.name}!
        </p>
        <a onClick=${this.handleClick} href="#">Click Me</a>
      </div>
    `;
  }
}

module.exports = Content;
