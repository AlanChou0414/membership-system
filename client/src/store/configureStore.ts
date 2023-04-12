import { configureStore } from "@reduxjs/toolkit"

//slice
import SignInSlice from "../slice/SignIn/SignInSlice"
import SignupSlice from "../slice/Signup/SignupSlice"
import AuthSlice from "../slice/Auth/AuthSlice"
import UserSlice from "../slice/User/UserSlice"
import AlertSlice from "../slice/Alert/AlertSlice"

const store = configureStore({
  reducer: {
    User: UserSlice,
    SignIn: SignInSlice,
    Signup: SignupSlice,
    Token: AuthSlice,
    Alert: AlertSlice
  }
})

export default store