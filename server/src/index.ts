import dotenv from 'dotenv'
import app from './app'
dotenv.config()

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server is working it http://localhost:${port}`)
})