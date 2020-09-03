var express = require('express');
var router = express.Router();

router.get('*', function (req, res) {
   var body = `
   <h1>404:Halaman Tidak Dikenal</h1>
   `; 

   res.send(body);
});

module.exports= router;