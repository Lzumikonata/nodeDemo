const mongoose = require('mongoose')
const schema = mongoose.Schema

const adminSchema = new schema({
  adminName: String,
  salt: String,
  encryptPwd: String,
  token: String
})
adminSchema.index({id: 1})

const Admin = mongoose.model('admin', adminSchema )

module.exports = Admin