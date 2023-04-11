import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const tokenSlice = createSlice({
  name: 'Token',
  initialState: Cookies.get('token') || null,
  reducers: {
    setToken(state, action) {
      return action.payload
    }
  }
})

export const { setToken } = tokenSlice.actions
export default tokenSlice.reducer