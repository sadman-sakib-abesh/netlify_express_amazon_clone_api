'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser);
app.get('/', (req, res) => {
  res.send("did it")
});

module.exports.handler = serverless(app);