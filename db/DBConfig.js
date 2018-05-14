  const mongoose = require('mongoose')
  const url  = 'mongodb://localhost:27017/mongoTest'
  mongoose.connect(url)
  mongoose.Promise = global.Promise
  
  const db = mongoose.connection
  
  db.once('open', () => {    //connect db
    console.log('连接成功')
  })
  
  db.on('error', error => {    //error
    console.log(error)
    mongoose.disconnect()
  })
  
  db.on('close', () => {    //is re connect
    console.log('sql over, connect?')
    mongoose.connection(url, {server: {auto_reconnect:true} })
  })
  
  module.exports = db