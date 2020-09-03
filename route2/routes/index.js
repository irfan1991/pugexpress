var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
   var body = `
   <h2>Halaman Utama</h2>
   <a href="http://localhost:3000/katalog/123">Katalog 123</a> |
   <a href="http://localhost:3000/katalog/456">Katalog 456</a> |
   <a href="http://localhost:3000/tidak-di-kenal">Route Lain</a> 
   `; 

   res.send(body);
});

module.exports= router;