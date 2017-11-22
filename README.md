# jsx-native
Build JSX using native ES6 templates. No transpiling required for Node.js and modern browsers.

* Returns strings for fast rendering on the server
* Returns a full JSX virtual DOM on the client

## Usage

Just use the `jsx` tagged template literal and write normal HTML markup inside native ES6 templates.

```javascript
const { jsx } = require('jsx-native');
const Greeting = require('./Greeting');

class App extends PureComponent {
  render() {
    return jsx`
      <div class="App">
        <${Greeting} name="John Doe" />
      </div>
    `;
  }
}
```

## Caveats
* This project is an *experimental exploration* of what might be possible. There will be lots of edge cases this doesn't handle.
* This should not be used in production yet, as the client-side JSX gerneation is not cached or memoized yet, and thus is very likely to have slow client render times
* Events are not supported right now  ("onClick", "on[Whatever]", etc. - working on it!)
