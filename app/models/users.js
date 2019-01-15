const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
  userName: String,
  password: String,
  profession: String,
  id: Number
})
userSchema.index({id: 1})

const User = mongoose.model('user', userSchema )

export default User