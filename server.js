'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
require('pug');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

fccTesting(app); // For fCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  // Change the response to render the Pug template
  res.render('index');
});

app.set('view engine', 'pug');
app.set('views', './views/pug');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

