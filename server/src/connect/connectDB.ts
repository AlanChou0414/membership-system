import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri: string = process.env.URI!

export const connectDB = async () => {
  try {
    await mongoose.connect(uri)
    console.log('Connected MongoDB')
  }
  catch (error) {
    console.error(error)
  }
}