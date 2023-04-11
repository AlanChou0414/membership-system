import { createSlice } from "@reduxjs/toolkit"

export const SignInSlice = createSlice({
  name: 'SignIn',
  initialState: {
    userEmail: '',
    userPassword: ''
  },
  reducers: {
    setField(state, action) {
      const { name, value } = action.payload
      return {
        ...state,
        [name]: value
      }
    }
  }
})

export const { setField } = SignInSlice.actions

export default SignInSlice.reducer