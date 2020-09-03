var express = require('express');
var app = express();

var index = require('./routes/index.js');
var katalog = require('./routes/katalog.js');
var notfound = require('./routes/notfound.js');

app.use('/',index);
app.use('/katalog', katalog);
app.use('*', notfound);

app.listen(3000);