var express = require('express');
var app = express();
const fs = require("fs")

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.html" );
// })


// app.get('/process_get', function(req, res) {
//   var response = {
//     'saywhat': req.query.first_name
//   }
//   res.end(JSON.stringify(response))
// })

var server = app.listen(8085, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})