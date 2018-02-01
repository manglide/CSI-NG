// <server.js file > //
require('babel-core/register')({
  presets: ['react']
});

// REQUIRES
const express = require('express');
const app = express();

// REACT (for SEO)
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// This is our React component
// NOTE : we require the app.js file NOT the main.js
const Comp = React.createFactory(require('./app/app'));

// HTML REACT OUTPUT
const seo = ReactDOMServer.renderToString(Comp());

// MIDDLEWARES
app.use(express.static(__dirname + '/dist'));
app.set('view engine', 'ejs');
// app.set('views', './views');

// Serve index file
app.get('/', function(req, res) {
  res.locals.seo = seo;
  res.render('index');
});

// Listen
const server = app.listen(3636, 'localhost', function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server listening http://%s:%s', host, port);
});
