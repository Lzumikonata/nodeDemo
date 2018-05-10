const sessionController = require('../app/controller/index')
const fs  = require("fs")
const path = require('path')
const url = path.resolve('users.json')
module.exports = app => {
  app.post('/user_name',(req, res) => {
 // const result = { 'name': req.body.name, 'uid': '2' }
  const file =fs.readFileSync(url, 'utf-8')
  res.status(200)
  res.json(file)
})
  app.get('/users_list', (req, res) => {sessionController.getList(req, res)})
}