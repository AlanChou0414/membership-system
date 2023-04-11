import { Response, NextFunction, Request } from "express"

// Schema
import User from "../models/User"

// tools
import bcrypt from 'bcrypt'

// get users
export const handleGetUsers = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
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
export const handleGetUser = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  const userId = req.params.id
  try {
    const user = await User.findOne({ _id: userId })
    res.status(200).json({ data: user, message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}

// login
export const handleUserLogin = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  const { userEmail, userPassword } = req.body
  try {
    const user = await User.findOne({ userEmail })
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(userPassword, user.userPassword)
    if (!isMatch) {
      throw new Error('Invalid login credentials')
    }
    const token = await user.generateAuthToken()
    res.status(200).json({ data: user, message: 'success!', token })
  }
  catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : error })
    next(error)
  }
}

// signup user
export const handleCreateUser = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  const { userEmail } = req.body
  try {
    const check = await User.findOne({ userEmail })
    if (check) {
      throw new Error('The user has registered!')
    }
    const user = await new User(req.body)
    await user.save()
    //use User schema methods (generateAuthToken())
    const token = await user.generateAuthToken()
    res.status(200).json({ token, message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : error })
    next(error)
  }
}

// update user TODO:
export const handleUpdateUser = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
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

// delete user TODO:
export const handleDeleteUser = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  const userId = req.params.id
  try {
    await User.deleteOne({ _id: userId })
    res.status(200).json({ message: 'success!' })
  }
  catch (error) {
    res.status(500).json({ message: error })
    next(error)
  }
}