import express from 'express'
import middleware from './middleware'
import { connectDB } from './connect/connectDB'

// router
import userRouter from './routes/userRoute'

const app = express()

connectDB()

app.use(middleware)
app.use('/api', userRouter)

export default app