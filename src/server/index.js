const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../App');

// Setup Express.js
const app = express();


// Define a route
app.get('/', function (req, res) {
  let content = ReactDOMServer.renderToString(React.createElement(App));

  res.send(content);
});


// Listen on port for web requests
app.listen(process.env.PORT || 3001);
