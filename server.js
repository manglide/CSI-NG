/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const Promise = require('q').Promise;

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'uLmWbu2map',
  database: 'asknigeria'
});

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/products', function (req, res) {
    const sql = "SELECT all_products.id AS product_ID, all_products.title AS productname,all_products.about AS description, all_products.manufacturer AS manufacturer, SUM(product_review.likes) AS likes, SUM(product_review.dislikes) AS dislikes, " +
    			"COUNT(product_review.user_comments) AS usercomments, AVG(product_review.rating) AS rating, products.price AS price, COUNT(`user_location_lat`) + COUNT(`user_location_lon`) AS locationcount, " +
          "all_products.ingredients AS ingredients FROM all_products " +
    			"JOIN product_review ON all_products.id = product_review.product_id " +
    			"JOIN products ON all_products.id = products.id " +
    			"WHERE all_products.about <> ''  " +
    			"GROUP BY all_products.id ORDER BY rating DESC";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      res.send(JSON.stringify({'data': result}));
    });
  });
  app.post('/productsAPI', function (req, res) {
    //const payload = {};
    const sql = "SELECT all_products.id AS product_ID, all_products.title AS productname,all_products.about AS description, all_products.manufacturer AS manufacturer, SUM(product_review.likes) AS likes, SUM(product_review.dislikes) AS dislikes, " +
          "COUNT(product_review.user_comments) AS usercomments, AVG(product_review.rating) AS rating, products.price AS price, COUNT(`user_location_lat`) + COUNT(`user_location_lon`) AS locationcount, " +
          " all_products.competitor_1 AS firstCompetition, all_products.competitor_2 AS secondCompetition, all_products.ingredients AS ingredients, " +
          "product_categories.category AS category FROM all_products " +
          "JOIN product_review ON all_products.id = product_review.product_id " +
          "JOIN products ON all_products.id = products.id " +
          "JOIN product_categories ON all_products.category = product_categories.id " +
          "WHERE all_products.about <> '' AND all_products.title = '" + req.body.data + "' " +
          "GROUP BY all_products.id ORDER BY rating DESC";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      // payload.data = JSON.stringify(result);
      // console.log(req.body.data + ' fed');
      res.send(JSON.stringify({'data': result}));
    });
  });
  // Get comments
  app.post('/comments', function (req, res) {
    const sqlComments = "SELECT likes AS likes, dislikes AS dislike, rating AS rate, " +
          " user_comments AS comment, user_location_lat AS latitude, user_location_lon AS longitude," +
          " date AS datePublished FROM product_review WHERE product_id = '" + req.body.data + "' ";
    connection.query(sqlComments, function(error, result) {
            if (error) throw error;
            res.send(JSON.stringify({'data': result}));
    });
  });
  // Get Areas of Product High Rating
  app.post('/areasofacceptance', function (req, res) {
    const sqlComments = "SELECT user_location_lat AS latitude, user_location_lon AS longitude," +
          " rating AS rate FROM product_review WHERE product_id = '" + req.body.data + "' AND `rating` BETWEEN '2.5' AND '5' ";
    connection.query(sqlComments, function(error, result) {
            if (error) throw error;
            res.send(JSON.stringify({'data': result}));
    });
  });
  // Get Areas of Product Low Rating
  app.post('/areasofrejection', function (req, res) {
    const sqlComments = "SELECT user_location_lat AS latitude, user_location_lon AS longitude," +
          " rating AS rate FROM product_review WHERE product_id = '" + req.body.data + "' AND `rating` BETWEEN '0' AND '2.5' ";
    connection.query(sqlComments, function(error, result) {
            if (error) throw error;
            res.send(JSON.stringify({'data': result}));
    });
  });
  // Get Locations Nearby
  app.post('/locationsNearBy', function (req, res) {
    const googleMapsClient = require('@google/maps').createClient({
      Promise: Promise,
      key: 'AIzaSyBJx99St761cS-K53mOq_1v9S1gPoIpHY4'
    });
    googleMapsClient.placesNearby({
      language: 'en',
      location: [req.body.lat, req.body.lon],
      radius: 50,
      type: 'market'
    })
    .asPromise()
    .then(response => {
      // console.log(JSON.stringify(response.json.results));
      // res.send(JSON.stringify({'data': response.json.results}));
      res.send(response.json.results);
    });
  });
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.get('/products', function (req, res) {
    const sql = "SELECT all_products.id AS product_ID, all_products.title AS productname,all_products.about AS description, all_products.manufacturer AS manufacturer, SUM(product_review.likes) AS likes, SUM(product_review.dislikes) AS dislikes, " +
    			"COUNT(product_review.user_comments) AS usercomments, AVG(product_review.rating) AS rating, products.price AS price, COUNT(`user_location_lat`) + COUNT(`user_location_lon`) AS locationcount, " +
          "all_products.ingredients AS ingredients FROM all_products " +
    			"JOIN product_review ON all_products.id = product_review.product_id " +
    			"JOIN products ON all_products.id = products.id " +
    			"WHERE all_products.about <> ''  " +
    			"GROUP BY all_products.id ORDER BY rating DESC";
      connection.query(sql, function (error, result) {
        if (error) throw error;
        res.send(JSON.stringify({result}));
      });
  });
  app.post('/productsAPI', function (req, res) {
    //const payload = {};
    const sql = "SELECT all_products.id AS product_ID, all_products.title AS productname,all_products.about AS description, all_products.manufacturer AS manufacturer, SUM(product_review.likes) AS likes, SUM(product_review.dislikes) AS dislikes, " +
          "COUNT(product_review.user_comments) AS usercomments, AVG(product_review.rating) AS rating, products.price AS price, COUNT(`user_location_lat`) + COUNT(`user_location_lon`) AS locationcount, " +
          " all_products.competitor_1 AS firstCompetition, all_products.competitor_2 AS secondCompetition, all_products.ingredients AS ingredients, " +
          "product_categories.category AS category FROM all_products " +
          "JOIN product_review ON all_products.id = product_review.product_id " +
          "JOIN products ON all_products.id = products.id " +
          "JOIN product_categories ON all_products.category = product_categories.id " +
          "WHERE all_products.about <> '' AND all_products.title = '" + req.body.data + "' " +
          "GROUP BY all_products.id ORDER BY rating DESC";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      // payload.data = JSON.stringify(result);
      // console.log(req.body.data + ' fed');
      res.send(JSON.stringify({'data': result}));
    });
  });
  // Get comments
  app.post('/comments', function (req, res) {
    const sqlComments = "SELECT likes AS likes, dislikes AS dislike, rating AS rate, " +
          " user_comments AS comment, user_location_lat AS latitude, user_location_lon AS longitude," +
          " date AS datePublished FROM product_review WHERE product_id = '" + req.body.data + "' ";
    connection.query(sqlComments, function(error, result) {
            if (error) throw error;
            res.send(JSON.stringify({'data': result}));
    });
  });
  // Get Locations Nearby
  app.post('/locationsNearBy', function (req, res) {
    const googleMapsClient = require('@google/maps').createClient({
      Promise: Promise,
      key: 'AIzaSyBJx99St761cS-K53mOq_1v9S1gPoIpHY4'
    });
    googleMapsClient.placesNearby({
      language: 'en',
      location: [req.body.lat, req.body.lon],
      radius: 50,
      type: 'market'
    })
    .asPromise()
    .then(response => {
      // console.log(JSON.stringify(response.json.results));
      // res.send(JSON.stringify({'data': response.json.results}));
      res.send(response.json.results);
    });
  });
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
