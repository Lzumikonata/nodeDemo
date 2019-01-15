import adminSession from '../services/admin'
import adminModel from '../models/admin'

const sessionController = {
  getAdmin: async (req, res) => {
    const adminResult = await adminSession.adminLogin(req.body.username)
    if(!adminResult) return res.send({ error: '不存在的用户名' })
    if(req.body.password + adminResult.salt === adminResult.encryptPwd) {
      const salt = Math.floor(Math.random()*899) + 100
      let token = parseInt(req.body.username) + Date.parse(new Date())
      res.set({'Token': token})
      res.send({ msg: '登录成功', token: token})
      await adminModel.update({ adminname: adminResult.username }, { salt: salt,encryptPwd: req.body.password+salt,token: token })
    }else {
      res.send({ msg: '密码错了，你登你妈呢' })
    }
  }
}
export default sessionController