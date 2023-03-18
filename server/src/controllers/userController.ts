import { Request, Response, NextFunction } from "express"

// type
import { UserType } from "../types/userType"

// tools
import bcrypt from 'bcrypt'
import uuid from 'uuid'

// Schema
import User from "../models/User"

// create user
export const handleCreateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userName, userEmail, userPassword } = req.body
  try {
    const user = new User({
      userName,
      userEmail,
      userPassword: bcrypt.hash(userPassword, 10)
    })
    await user.save()
  }
  catch (error) {
    next(error)
  }
}