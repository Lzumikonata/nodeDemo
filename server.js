// const express = require('express')
// const fs  = require("fs")
// const dbConfig = require('./db/DBConfig')
// const UserSQL = require('./db/usersql')
// const pool = mysql.createPool(dbConfig.mysql)
// console.log(UserSQL.insert)
const app = require('./application')
  const server = app.listen(8081, () => {
    let host = server.address().address
    let port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port);
  })



