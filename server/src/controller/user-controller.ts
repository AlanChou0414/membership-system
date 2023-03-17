import UserModel from "../models/userModel"
import mongoose from "mongoose"

// user info
const getUserInfo = async (req, res) => {
  try {
    const users = await UserModel.find().then(user => res.json(user))
  }
  catch (err) {
    console.log(err)
  }
}

export {
  getUserInfo
}