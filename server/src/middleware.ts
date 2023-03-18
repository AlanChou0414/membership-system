import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

export default app