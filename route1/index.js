var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var body = `
    <h2>Halaman Utama</h2>
    <a href="http://localhost:3001/katalog/123">Katalog 123</a> |
    <a href="http://localhost:3001/katalog/456">Katalog 456</a> |
    <a href="http://localhost:3001/tidak-di-kenal">Route Lain</a> 
    `;
    res.send(body) ;
});

app.get('/katalog/:idproduk', function (req,res) {
    res.send(`<h1>Halaman Katalog</h1>
        <p> Produk ${req.params.idproduk} </p>
    `);
})




app.get('*', function (req,res) {
    res.send(`<h1>404:Halaman Tidak Dikenal</h1>`);
})

app.listen(3001);