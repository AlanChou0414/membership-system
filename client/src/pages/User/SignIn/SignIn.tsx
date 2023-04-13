import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from 'js-cookie'

//reducers
import { setToken } from "../../../slice/Auth/AuthSlice"
import { setField } from "../../../slice/SignIn/SignInSlice"
import { setUserData } from "../../../slice/User/UserSlice"
import { setAlert } from "../../../slice/Alert/AlertSlice"

import { setAllFormInput } from "../../../slice/Form/FormSlice"

//types
import { RootType } from "../../../store/configureStore"

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userEmail, userPassword } = useSelector((state: RootType) => state.SignIn)
  const inputs = useSelector((state: RootType) => state.Form)
  const alertMessage = useSelector((state: RootType) => state.Alert)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(setAllFormInput({ name, value }))
  }

  // signin
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_VAR_API_URL}/user/login`, {
        userEmail,
        userPassword
      })
      const { data } = response
      if (data) {
        dispatch(setToken(data.token))
        dispatch(setUserData({
          id: data.data._id,
          userName: data.data.userName,
          userEmail: data.data.userEmail
        }))
        Cookies.set('token', data.token, {
          expires: 7,
          // secure: true,
          // httpOnly: true
        })
        dispatch(setAlert(data.message))
        setTimeout(() => {
          navigate('/')
          dispatch(setAlert(''))
        }, 1000);
      }
    }
    catch (error: any) {
      if (error.message) {
        dispatch(setAlert(error.response.data.message))
        setTimeout(() => {
          dispatch(setAlert(''))
        }, 2000);
      }
    }
  }

  return (
    <section className='flex justify-center items-center m-40'>
      <div>
        <h1 className='text-4xl text-center'>Sign In</h1>
        <form className='flex flex-col mt-10  w-64' onSubmit={handleSubmit}>
          <label htmlFor="email">Email : </label>
          <input
            className='border p-2 rounded-lg'
            type="email"
            name="userEmail"
            id="userEmail"
            onChange={handleInputChange}
          />
          <label className='mt-3' htmlFor="password">Password : </label>
          <input
            className='border p-2 rounded-lg'
            type="password"
            name="userPassword"
            id="userPassword"
            onChange={handleInputChange}
          />
          <input
            className='border cursor-pointer mt-5 p-2 hover:bg-black hover:text-white transition duration-500 rounded-lg'
            type="submit" value="SEND" />
          <Link className='text-xl mt-3 text-blue-400 text-center' to='/Signup'>Sign Up?</Link>
          {
            alertMessage &&
            <div className='text-xl mt-3 text-red-400 text-center'>{alertMessage}</div>
          }
        </form>
      </div>
    </section>
  )
}

export default SignIn