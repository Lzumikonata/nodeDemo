const mongoose = require('mongoose')
const schema = mongoose.Schema

const adminSchema = new schema({
  name: String,
  value: String,
  human: String
})
adminSchema.index({id: 1})

const Admin = mongoose.model('site', adminSchema )

module.exports = Admin