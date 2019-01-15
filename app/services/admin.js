import adminModel from '../models/admin'

const adminAction = {
  adminLogin:  (username) => new Promise((resolve, reject) => {
    adminModel.findOne({ username }, async (err, user) => {
       // console.log('cuowu', err) 不论有没有admin结果都是null
        //console.log('zhengque', user) 如果有则是user信息 没有就是null
      if(err) { return reject(err) }
        resolve(user)
      })
  })
}
// findUserForID: (id) => new Promise((resolve, reject) => {
//   verifyModel.findOne({ id }, (err, user) => {
//     if (err) return reject(err)
//     resolve(user)
//   })
// }),

export default adminAction