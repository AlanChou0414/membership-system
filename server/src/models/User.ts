import mongoose, { Schema, Document, Model } from "mongoose"

//tools
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dayjs from 'dayjs'

//type
interface IUser extends Document {
  userName: string
  userEmail: string
  userPassword: string
  created_at: string
  tokens: {
    token: string,
    updated_at: string
  }[]
  generateAuthToken: () => Promise<string>
}

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
  created_at: {
    type: String,
    require: true
  },
  tokens: [{
    token: {
      type: String,
      require: true
    },
    updated_at: {
      type: String,
      require: true
    }
  }]
})

// hash password before user save or create
userSchema.pre<IUser>('save', async function (next) {
  const user = this
  const now = dayjs().format('YYYY-MM-DD hh:mm:ss')
  if (!user.isModified('userPassword')) {
    return next()
  }
  user.userPassword = await bcrypt.hash(user.userPassword, 10)
  this.created_at = now
  next()
})

// build token of create user or user login
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, 'mysecretkey')
  const updated_at = dayjs().format('YYYY-MM-DD hh:mm:ss')
  this.tokens = this.tokens.concat({ token, updated_at })
  await this.save()
  return token
}

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema)

export default User