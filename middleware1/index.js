var express = require('express');
var app = express();
var logger = require('./logger.js');

app.use(logger());

app.get('/', function (req, res) {
    res.end(`<h2>Demo Middleware</h2>`);
});

app.listen(3000);