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

app.put('/submitform', function(req, res, next) {
    console.log(req.body.date);
    console.log(req.body.time);
    console.log(req.body.project);
    console.log(req.body.comments);
    con.connect(function(err) {
  if (err) throw  err;
  console.log("connected");
  var sql = "INSERT INTO `datas`(`date`,`time`, `project`,`comments`) VALUES ('"+req.body.date+"','"+req.body.time+"','"+req.body.project+"','"+req.body.comments+"')";
  con.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("table created");
  });
});

  res.json({ rows });
});


app.listen(3000);