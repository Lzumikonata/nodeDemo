import mongoose from 'mongoose'
const schema = mongoose.Schema

const docSchema = new schema({
  docName: String,
  userId: Number
})
docSchema.index({id: 1})

const docModel = mongoose.model('doc', docSchema )

export default docModel