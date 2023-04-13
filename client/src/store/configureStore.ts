import { configureStore, combineReducers } from "@reduxjs/toolkit"

//slice
import SignInSlice from "../slice/SignIn/SignInSlice"
import SignupSlice from "../slice/Signup/SignupSlice"
import AuthSlice from "../slice/Auth/AuthSlice"
import UserSlice from "../slice/User/UserSlice"
import AlertSlice from "../slice/Alert/AlertSlice"
import FormSlice from "../slice/Form/FormSlice"

const rootReducers = combineReducers({
  User: UserSlice,
  SignIn: SignInSlice,
  Signup: SignupSlice,
  Token: AuthSlice,
  Alert: AlertSlice,
  Form: FormSlice
})

const store = configureStore({
  reducer: rootReducers
})

export type RootType = ReturnType<typeof rootReducers>
export default store