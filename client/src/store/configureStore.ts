import { configureStore } from "@reduxjs/toolkit"
import SignInSlice from "../slice/SignIn/SignInSlice"

const store = configureStore({
  reducer: {
    user:SignInSlice
  }
})

export default store