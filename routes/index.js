const fs  = require("fs")
const path = require('path')
const url = path.resolve('users.json')
const admin = require('../app/controller/index')
module.exports = app => {
  app.post('/user_name',admin.getAdmin)
  app.get('/users_list', (req, res) => {const file =fs.readFileSync(url, 'utf-8')
    res.status(200)
    res.json(file)})
}