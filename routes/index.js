const fs  = require("fs")
const path = require('path')
const url = path.resolve('users.json')
const admin = require('../app/controller/index')
// import adminLogin from '../app/controller/admin'
import cheerio from 'cheerio'
import superagent from 'superagent'
import sessionCotroller from '../app/controller/verify'
import userAction from '../app/controller/users'
import docAction from '../app/controller/docs'

module.exports = app => {
  // app.post('/user_name',adminLogin.getAdmin)
  app.get('/users_list', (req, res) => {const file =fs.readFileSync(url, 'utf-8')
    res.status(200)
    res.json(file)
  }
    )
  app.post('/user_login', sessionCotroller.getVerify)
  app.get('/reptile', (req, res, next) => {
    superagent.get('https://segmentfault.com/')
      .end((err, sres) => {
        if (err) {
          return next(err);
        }
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        let $ = cheerio.load(sres.text)
        let items = []
        $('a.mr10').each((idx, element) => {
          let $element = $(element);
          items.push({
            title: $element.text(),
            href: $element.attr('href')
          })
        })
        
        //writeFileSync
        res.send({ result: items })
      })
  })
  app.get('/init_user', userAction.initUsers)
  
  app.post('/create_doc', docAction.createDoc)
  app.post('/page_count', docAction.show)
  // app.get('/dowload_csv', (req, res) => {
  //   userAction.dowloadCSV(req, res, row => {
  //     return {"ID": row.id, "name": row.name, "psw": row.password, "pro": row.profession}
  //   }, userData, 'testCsv')
  // })
  //app.post('/user_admin', adminLogin.getAdmin)
}