import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET_KEY

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const decoded = jwt.verify(token, SECRET!)
    // req.user = decoded
    next()
  } catch (error) {
    return res.status(403).json({ message: 'Forbidden' })
  }
}