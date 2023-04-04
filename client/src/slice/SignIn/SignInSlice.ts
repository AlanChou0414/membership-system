import { createSlice } from "@reduxjs/toolkit"
import { SignInType } from "./SignInType"

const initialState: SignInType = {
  name: '',
  email: '',
  token: false
}

export const SignInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    
  }
})