import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.URL

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(url!)
    console.log(res)
  }
  catch (err) {
    console.error(err)
  }
}