var express = require('express');
var router = express.Router();

router.get('/:idproduk', function (req, res) {
   var body = `
   <h1>Halaman Katalog</h1>
        <p> Produk ${req.params.idproduk} </p>
   `; 

   res.send(body);
});

module.exports= router;