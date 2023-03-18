import { Document } from "mongoose"

export interface UserType<Document> {
  userName: string
  userEmail: string
  userPassword: string
  refreshToken: string
}