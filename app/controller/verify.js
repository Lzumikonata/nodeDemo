import verifyModel from '../models/verify'


const sessionCotroller = {
  getVerify: async (req, res, next) => {
    const data = { username: req.body.username, password: req.body.password }
    
    console.log(data)
    try {
      // username, password => validate
      // findUserForname => user => salt
      // req.body.password + salt => fn => userPass
      // userPass === user.pass
      // const user = await xxxservice.findUserForId(id)
      const result = await verifyModel.find(data)
      res.send(result)
    } catch (err) {
      res.send(err)
    }
  },
  
  
  // findUserForID: (id) => new Promise((resolve, reject) => {
  //   verifyModel.findOne({ id }, (err, user) => {
  //     if (err) return reject(err)
  //     resolve(user)
  //   })
  // }),
}
export default sessionCotroller