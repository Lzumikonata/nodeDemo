import userModel from '../models/users'
import userData from '../init.data/user.data'

const userSession = {
  insertUsers:  () => new Promise((resolve, reject) => {
    userModel.insertMany(userData, async (err, user) => {
      // console.log('cuowu', err) 不论有没有admin结果都是null
      //console.log('zhengque', user) 如果有则是user信息 没有就是null
      if(err) { return reject(err) }
      resolve(user)
    })
  }),
  findUsers: () => new Promise((resolve, reject) => {
    userModel.find((err, user) => {
      if(err) {
        return reject(err)
      }
      resolve(user)
    })
  })
  
}


export default userSession