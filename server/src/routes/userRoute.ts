import express from 'express'

// controllers
import {
  handleCreateUser
} from '../controllers/userController'

const router = express.Router()

//http://localhost:3302/user/new
router.post('/new', handleCreateUser)

export default router