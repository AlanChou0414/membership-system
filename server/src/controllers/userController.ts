import { Request, Response, NextFunction } from "express"

// type
import { UserType } from "../types/userType"
interface ApiFn {
  req: Request
  res: Response
  next: NextFunction
}

// tools
import bcrypt from 'bcrypt'
import uuid from 'uuid'

// Schema
import User from "../models/User"


// get users
export const handleGetUsers = async ({ req, res, next }: ApiFn): Promise<void> => {
  try {
    const users = await User.find()
    res.status(200).json({ data: users, message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}

// get user:id
export const handleGetUser = async ({ req, res, next }: ApiFn): Promise<void> => {
  const { userId } = req.body
  try {
    const user = await User.find({
      _id: userId
    })
    res.status(200).json({ data: user, message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}

// create user
export const handleCreateUser = async ({ req, res, next }: ApiFn): Promise<void> => {
  const { userName, userEmail, userPassword } = req.body
  try {
    const user = new User({
      userName,
      userEmail,
      userPassword: bcrypt.hash(userPassword, 10)
    })
    await user.save()
    res.status(200).json({ message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}


// update user
export const handleUpdateUser = async ({ req, res, next }: ApiFn): Promise<void> => {
  const { userName, userEmail, userPassword, refreshToken } = req.body
  try {
    const updateUser = await User.updateOne(
      { refreshToken },
      { userEmail },
      { runValidators: true }
    )
    res.status(200).json({ message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}


// delete user
export const handleDeleteUser = async ({ req, res, next }: ApiFn): Promise<void> => {
  const { userId } = req.body
  try {
    const deleteUser = await User.deleteOne({ userId })
    res.status(200).json({ message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}


