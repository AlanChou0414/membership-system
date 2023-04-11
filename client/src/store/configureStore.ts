import { configureStore } from "@reduxjs/toolkit"

//slice
import SignInSlice from "../slice/SignIn/SignInSlice"
import AuthSlice from "../slice/Auth/AuthSlice"

const store = configureStore({
  reducer: {
    user: SignInSlice,
    token: AuthSlice
  }
})

export default store