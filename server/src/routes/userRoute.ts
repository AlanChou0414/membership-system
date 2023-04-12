import express from 'express'

// controllers
import {
  handleCreateUser,
  handleGetUsers,
  handleGetUser,
  handleUpdateUser,
  handleDeleteUser,
  handleUserLogin
} from '../controllers/userController'

const router = express.Router()

//http://localhost:3302/api/users
//https://membership-system.herokuapp.com/api/users
router.get('/users', handleGetUsers)

//http://localhost:3302/api/user/:id
router.get('/user/:id', handleGetUser)

//http://localhost:3302/api/user/login
router.post('/user/login', handleUserLogin)

//http://localhost:3302/api/new
router.post('/new', handleCreateUser)

//TODO:
//http://localhost:3302/api/user/update/:id
router.put('/user/update/:id', handleUpdateUser)
//TODO:
//http://localhost:3302/api/user/delete/:id
router.delete('/user/delete/:id', handleDeleteUser)

export default router