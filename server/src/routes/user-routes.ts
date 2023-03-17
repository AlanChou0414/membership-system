import express from 'express'

const router = express.Router()

// controllers
import {
  getUserInfo
} from '../controller/user-controller'


router.get('/user/info', getUserInfo)


export default router