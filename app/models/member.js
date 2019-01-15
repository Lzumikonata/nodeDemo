const mongoose = require('mongoose')
const schema = mongoose.Schema

const memberSchema = new schema({
  memberName: String,
  salt: String,
  encryptPwd: String,
})
memberSchema.index({id: 1})

const Member = mongoose.model('member', memberSchema )

export default Member