import adminModel from '../models/admin'

const validate = async (req, res, next) => {
  //console.log(req.getHeader())
  adminModel.findOne({token: req.query.token}, (err, docs) => {
   if(docs) {
     next()
   } else {
     res.send({'err': '没登录，滚'})
   }
  })
  
  // res.send({error: '没登录，滚'})
  
  
  
   // if(!req.body.username||!req.body.password) {
   //   res.send({ msg:'信息不能为空' })
   // } else {
   //   const memberUser = await memberModel.findOne({ username: req.body.username })
   //   if(!memberUser) {
   //     res.send({ msg: '用户名错误' })
   //   } else {
   //     next()
   //   }
   // }
  
  
}
export default validate