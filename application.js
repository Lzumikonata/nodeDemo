import express from 'express'
const bodyParser = require('body-parser')
const routes = require('./routes/index')
// import './db/db.config'
import path from 'path'
import validate from './app/validate/authority.validate'
import adminLogin from './app/controller/admin'
import userAction from './app/controller/users'
import fs from 'fs'

import { execFile } from 'child_process'

const shPath = path.resolve(__dirname, 'command.sh')
console.log(shPath)
execFile(shPath, ['-m', 'edit my commit message again'], null, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行出错: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})

// import path from 'path'
// console.log(__dirname)
// const filePath = path.resolve(__dirname, '../message.txt')

// try {
//   fs.appendFileSync(filePath, '123')
//   fs.copyFileSync(filePath, 'nice.txt')
// } catch (er) {
//   console.log(er)
// }
// const fsPromise = fs.promises
// const writeSome = async () => {
//   let fd
//   try {
//      fd = await fsPromise.open(filePath, 'wx')
//   } finally {
//     if(fd !== undefined) {
//       await fsPromise.writeFile(fd, 'xixihaha')
//       await fd.close()
//     }
//   }
// }
// writeSome()
// fs.open(filePath, 'wx', (er, fd) => {
//   if (er) {
//     if (er.code === 'EEXIST') {
//       console.error('文件已存在');
//       return;
//     }
//
//     throw err;
//   }
//   fs.writeFileSync(fd, 'shijie', er => {
//     if (er) throw er
//   })
// })
// const rs = fs.createReadStream(path.resolve(__dirname, '../message.txt'), { start: 2, end: 5 })
// rs.on('readable', () => {
//   console.log(`read: ${rs.read()}`)
// })
// rs.on('end', () => {
//   console.log('end')
// })

//import cookie from 'cookie-parser'
// const os = require('os')
// console.log(os.release())
//const mysql = require('mysql')
// const dbConfig = require('./db/DBConfig')
// const UserSQL = require('./db/usersql')
// const pool = mysql.createPool(dbConfig.mysql)
// console.log(UserSQL.insert)
//console.log(path.join('foo', 'bar', 'baz/asdf', 'quux'))
const app = express()
const createServer = () => {
  const jsonParser = bodyParser.json()
  
  app.all('*', function(req, res, next) { //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    res.header("Access-Control-Expose-Headers", "Token")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', true)
    res.header("X-Powered-By",' 3.2.1');
    next()
  })
  
  app.use(jsonParser)
   //app.use(cookie())
  // app.get('/dowload_csv', (req, res) => {
  //   userAction.dowloadCSV(req, res, row => {
  //     return {"ID": row.id, "name": row.name, "psw": row.password, "pro": row.profession}
  //   }, 'testCsv')
  // })
  //  app.post('/user_admin', adminLogin.getAdmin)
 //  app.use(validate)
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