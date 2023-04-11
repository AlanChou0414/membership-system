import { createSlice } from "@reduxjs/toolkit"

export const UserSlice = createSlice({
  name: 'User',
  initialState: {
    id: '',
    userName: '',
    userEmail: ''
  },
  reducers: {
    setUserData(state, action) {
      return action.payload
    }
  }
})

export const { setUserData } = UserSlice.actions
export default UserSlice.reducer