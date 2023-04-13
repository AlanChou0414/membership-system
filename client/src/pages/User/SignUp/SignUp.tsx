import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import Cookies from "js-cookie"

//slice
import { setSignupInput } from "../../../slice/Signup/SignupSlice"
import { setAlert } from "../../../slice/Alert/AlertSlice"

//type
import { RootType } from "../../../store/configureStore"

const SignUp = () => {
  const {
    userName,
    userEmail,
    userPassword
  } = useSelector((state: RootType) => state.Signup)
  const alertMessage = useSelector((state: RootType) => state.Alert)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(setSignupInput({ name, value }))
  }

  //signup
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_VAR_API_URL}/new`, {
        userName,
        userEmail,
        userPassword
      })
      const { token, message } = response.data
      Cookies.set('token', token)
      dispatch(setAlert(message))
      setTimeout(() => {
        dispatch(setAlert(''))
        navigate('/')
      }, 2000)
    } catch (error: any) {
      if (error.message) {
        dispatch(setAlert(error.response.data.message))
        setTimeout(() => {
          dispatch(setAlert(''))
        }, 2000)
      }
    }
  }

  return (
    <section className='flex justify-center items-center m-40'>
      <div>
        <h1 className='text-4xl text-center'>Sign Up</h1>
        <form className='flex flex-col mt-10  w-64' onSubmit={handleSubmit}>
          <label htmlFor="userName">Name : </label>
          <input
            className='border p-2 rounded-lg'
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={handleInputChange} />
          <label className='mt-3' htmlFor="userEmail">Email : </label>
          <input
            className='border p-2 rounded-lg'
            type="email"
            name="userEmail"
            id="userEmail"
            value={userEmail}
            onChange={handleInputChange}
          />
          <label className='mt-3' htmlFor="userPassword">Password : </label>
          <input
            className='border p-2 rounded-lg'
            type="password"
            name="userPassword"
            id="userPassword"
            value={userPassword}
            onChange={handleInputChange}
          />
          <input
            className='border cursor-pointer mt-5 p-2 hover:bg-black hover:text-white transition duration-500 rounded-lg'
            type="submit"
            value="SEND"
          />
          {
            alertMessage &&
            <div className='text-xl mt-3 text-red-400 text-center'>{alertMessage}</div>
          }
          <Link className='text-xl mt-3 text-blue-400 text-center' to='/Signin'>Sign In?</Link>
        </form>
      </div>
    </section>
  )
}

export default SignUp