import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: { type: String, require: true },
  description: { type: String, require: true },
})

export default mongoose.model('UserModel', userSchema)