import mongoose, { Schema } from "mongoose"

const userSchema: Schema = new mongoose.Schema({
  userName: {
    type: String,
    require: true
  },
  userEmail: {
    type: String,
    require: true
  },
  userPassword: {
    type: String,
    require: true
  },
  refreshToken: String
})

const User = mongoose.model('User', userSchema)

export default User