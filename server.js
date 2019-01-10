// const express = require('express')
// const fs  = require("fs")
// const dbConfig = require('./db/DBConfig')
// const UserSQL = require('./db/usersql')
// const pool = mysql.createPool(dbConfig.mysql)
// console.log(UserSQL.insert)
import Socket from './app/services/socket'

const app = require('./application')
  const server = app.listen(2333, () => {
    let host = server.address().address
    let port = server.address().port
    console.log(`Example app listening at http://${host}`, port);
  })
app.set('socket', new Socket(server));



