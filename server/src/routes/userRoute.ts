import express from 'express'

// controllers
import {
  handleCreateUser,
  handleGetUsers,
  handleGetUser,
  handleUpdateUser,
  handleDeleteUser
} from '../controllers/userController'

const router = express.Router()

//http://localhost:3302/api/users
router.get('/users', handleGetUsers)

//http://localhost:3302/api/user/:id
router.get('/user/{id}', handleGetUser)

//http://localhost:3302/api/new
router.post('/new', handleCreateUser)

//http://localhost:3302/api/user/update/:id
router.put('/user/update/{id}', handleUpdateUser)

//http://localhost:3302/api/user/delete/:id
router.delete('/user/delete/{id}', handleDeleteUser)

export default router