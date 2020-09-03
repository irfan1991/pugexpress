var express = require('express');
var app = express();

//membuat middleware
var logger = function (req, res , next) { 
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var nn = today.getMinutes();
    var ss = today.getSeconds();

    if (dd < 10) {
        dd = '0'+dd;
    }

    if (mm < 10) {
        mm = '0'+ mm;
    }
    if (hh < 10) {
        hh = '0'+ hh;
    }
    if (ss < 10) {
        ss = '0'+ ss;
    }
    
    var date = dd + '/' + mm + '/' + yyyy;
    var time = hh + ':' + nn + ';' + ss;
    console.log(`Terjadi permintaan GET pada ${date} ${time}`);
    next();
    
}

// menggunakan middleware loggernya
app.use(logger);

app.get('/', function (req, res) {
    res.end(`<h2>Demo Middleware</h2>`);
});

app.listen(3000);