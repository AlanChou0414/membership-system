import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userEmail: '',
  userPassword: ''
}

export const SignInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.userEmail = action.payload
    },
    setPassword(state, action) {
      state.userPassword = action.payload
    }
  }
})

export const { setEmail, setPassword } = SignInSlice.actions

export default SignInSlice.reducer