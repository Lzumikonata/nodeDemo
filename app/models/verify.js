import mongoose from 'mongoose'
const schema = mongoose.Schema

const verifySchema = new schema({
  username: String,
  password: String,
  id: Number
})
verifySchema.index({id: 1})

const Verify = mongoose.model('verify', verifySchema)

export default Verify