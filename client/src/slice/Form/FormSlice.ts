import { createSlice } from "@reduxjs/toolkit"

interface FormType {
  inputs: {
    [key: string]: string
  }
}

const initialState: FormType = {
  inputs: {}
}

const FormSlice = createSlice({
  name: 'From',
  initialState,
  reducers: {
    setFormInput: (state, action) => {
      const { name, value } = action.payload
      state.inputs = { [name]: value }
    },
    setAllFormInput: (state, action) => {
      state.inputs = {
        ...state.inputs,
        ...action.payload
      }
    },
    clearFormInput: (state) => {
      return initialState
    }
  }
})

export const {
  setFormInput,
  setAllFormInput,
  clearFormInput
} = FormSlice.actions

export default FormSlice.reducer