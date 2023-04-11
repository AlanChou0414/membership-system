import { createSlice } from "@reduxjs/toolkit"

export const AlertSlice = createSlice({
  name: 'Alert',
  initialState: '',
  reducers: {
    setAlert(state, action) {
      return action.payload
    }
  }
})

export const { setAlert } = AlertSlice.actions
export default AlertSlice.reducer