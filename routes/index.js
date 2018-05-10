const sessionController = require('../app/controller/index')
module.exports = app => {
  app.post('/user_name',(req, res) => {
  const result = { 'name': req.body.name, 'uid': '2' }
  res.status(200)
  res.json(result)
})
  app.get('/users_list', (req, res) => {sessionController.getList(req, res)})
}