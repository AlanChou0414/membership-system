import { createSlice } from "@reduxjs/toolkit"

const SignupSlice = createSlice({
  name: 'Signup',
  initialState: {
    userName: '',
    userEmail: '',
    userPassword: ''
  },
  reducers: {
    setSignupInput(state, action) {
      const { name, value } = action.payload
      return {
        ...state,
        [name]: value
      }
    }
  }
})

export const { setSignupInput } = SignupSlice.actions
export default SignupSlice.reducer