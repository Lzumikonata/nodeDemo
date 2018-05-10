const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')
const dgram = require('dgram')
const server = dgram.createSocket('udp4')
//console.log(server)
//const mysql = require('mysql')
// const dbConfig = require('./db/DBConfig')
// const UserSQL = require('./db/usersql')
// const pool = mysql.createPool(dbConfig.mysql)
// console.log(UserSQL.insert)
const createServer = () => {
  const app = express()
  const jsonParser = bodyParser.json()
  
  app.all('*', function(req, res, next) { //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next()
  })
  
  app.use(jsonParser)
  routes(app)
  //app.use(urlencodedParser)
  // app.post('/user_name',(req, res) => {
  //   console.log('err?')
  //   const result = {'name': req.body.name, 'uid': '2'}
  //   res.status(200)
  //   res.json(result)
  // })
  return app
}
module.exports = createServer()