var orm = require("orm");

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'node'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO phone (model, color, price) VALUES ('Nokie', 'White', '250')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

exports.Phone = con;