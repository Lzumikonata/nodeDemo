
const express = require('express')
const app = express()
const fs = require("fs")

app.all('*', function(req, res, next) { //设置请求头
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next()
})

app.get('/users_list', (req, res) => {   //这个就是我们的接口了
  const jsonData = fs.readFileSync( __dirname + '/' + 'users.json', 'utf-8')//同步读取文件
  res.status(200)
  res.json(jsonData)
});

var server = app.listen(8081, () => {
  let host = server.address().address
  let port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port);
})

