import { createSlice } from "@reduxjs/toolkit"
import { SignInType } from "./SignInType"

const initialState: SignInType = {
  user: {
    name: '',
    email: '',
    token: false
  }
}

export const SignInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    setSignIn(state, action) {

    }
  }
})

export const { setSignIn } = SignInSlice.actions

export default SignInSlice.reducer