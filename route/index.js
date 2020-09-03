var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var body = `
    <h2>Halaman Utama</h2>
    <a href="http://localhost:3001/katalog">Katalog</a> |
    <a href="http://localhost:3001/kontak">Kontak</a> |
    <a href="http://localhost:3001/tidak-di-kenal">Route Lain</a> 
    `;
    res.send(body) ;
});

app.get('/katalog', function (req,res) {
    res.send(`<h1>Halaman Katalog</h1>
        <p> Produk ${req.params.idproduk} </p>
    `);
})


app.get('/kontak', function (req,res) {
    res.send(`<h1>Halaman Kontak</h1>`);
})


app.get('*', function (req,res) {
    res.send(`<h1>404:Halaman Tidak Dikenal</h1>`);
})

app.listen(3001);