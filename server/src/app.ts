import express from 'express'
import { connectDB } from './connectDB/connectDB'

const app = express()

app.listen(connectDB, () => console.log('Server is working!'))