var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    // menampilkan index pug
    res.render('index');
});

app.get('/hello/:name', function (req, res) {
   res.render('hello', {name : req.params.name}) ;
});

app.listen(3000);