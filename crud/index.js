var express = require('express');
var mysql = require('mysql');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

function getMySQLConnection() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'irfan91',
        password : '123',
        database : 'ddmysql'
    });
}

app.get('/', function (req, res) {

    var buku = [];
    //connect ke db
    var connection = getMySQLConnection();
    connection.connect();

    connection.query('SELECT * FROM buku' , function (error, rows, fields) {
       
        if (error) res.status(500).json({"status_code":500,"error_message" : "internal server error"});
        
        for (let index = 0; index < rows.length; index++) {
            var book = {
                'buku_judul':rows[index].buku_judul,
                'buku_penulis':rows[index].buku_penulis,
                'buku_penerbit':rows[index].buku_penerbit,
                'buku_id':rows[index].buku_id,
            };
            
            buku.push(book);
        }
       
        
        res.render('index',{'books' : buku});

    });

  
    // menampilkan index pug
   
});

app.listen(3000);