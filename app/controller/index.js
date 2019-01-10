const adminModel = require('../models/admin')
 const sessionCotroller = {
    getAdmin(req, res, next) {
     const name = req.body.name
    // console.log(user_name)
     try {
       adminModel.find({ name }, (err,docs) => {
         res.send({
           status: 1,
           docs
         })
       } )
     } catch (err) {
       console.log(err)
     }
   },
 }
  

module.exports = sessionCotroller