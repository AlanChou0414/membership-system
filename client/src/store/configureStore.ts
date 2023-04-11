import { configureStore } from "@reduxjs/toolkit"

//slice
import SignInSlice from "../slice/SignIn/SignInSlice"
import AuthSlice from "../slice/Auth/AuthSlice"
import UserSlice from "../slice/User/UserSlice"
import AlertSlice from "../slice/Alert/AlertSlice"

const store = configureStore({
  reducer: {
    User: UserSlice,
    SignIn: SignInSlice,
    Token: AuthSlice,
    Alert: AlertSlice
  }
})

export default store