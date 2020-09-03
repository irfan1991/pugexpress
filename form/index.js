var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    // menampilkan index pug
    res.render('index');
});

app.post('/', function (req, res) {
   // mengambil data yg dikirim dari form
   var nama = req.body.nama;
   
   // menampilkan di hello.pug
   res.render('hello', {nama : nama});
});

app.listen(3000);