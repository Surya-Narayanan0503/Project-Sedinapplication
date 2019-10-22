var express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hackothon"
});




app.post('/create', function (req, res) {
    var date = req.body.date;
    var project = req.body.project;
    var comments = req.body.comments;
    var time = req.body.time;

    con.connect(function (err) {
        console.log("Connected!");
        var sql = "INSERT INTO `datas` (date, project, comments , time) VALUES ('" + date + "','" + project + "','" + comments + "','" + time + "')";
        con.query(sql, function (err, result) {
            console.log("1 record inserted");
        });
    });


})

app.get('/get', function (req, res) {
    con.connect(function (err) {
        console.log("Connected!");
        var sql = "select * from datas";
        con.query(sql, function (err, result) {
            res.send(result);
        });
    });
})



app.listen(3000);
