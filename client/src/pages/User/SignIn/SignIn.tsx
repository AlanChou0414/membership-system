import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setToken } from "../../../slice/Auth/AuthSlice"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from 'js-cookie'

//types
import { FormDataType } from "../../../types/FormDataType"

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [formData, setFormData] = useState<FormDataType>({
    userEmail: '',
    userPassword: ''
  })
  const [alert, setAlert] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  )

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { userEmail, userPassword } = formData
    try {
      const response = await axios.post(`${import.meta.env.VITE_VAR_API_URL}/user/login`, {
        userEmail,
        userPassword
      })
      const { data } = response
      if (data) {
        dispatch(setToken(data.token))
        Cookies.set('token', data.token, {
          expires: 7,
          // secure: true,
          // httpOnly: true
        })
        setAlert(data.message)
        setTimeout(() => {
          navigate('/')
          setAlert('')
        }, 1000);
      }
    }
    catch (error: any) {
      if (error.message) {
        setAlert(error.response.data.message)
        setTimeout(() => {
          setAlert('')
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
            value={formData?.userEmail}
            onChange={handleInputChange}
          />
          <label className='mt-3' htmlFor="password">Password : </label>
          <input
            className='border p-2 rounded-lg'
            type="password"
            name="userPassword"
            id="userPassword"
            value={formData?.userPassword}
            onChange={handleInputChange}
          />
          <input
            className='border cursor-pointer mt-5 p-2 hover:bg-black hover:text-white transition duration-500 rounded-lg'
            type="submit" value="SEND" />
          <Link className='text-xl mt-3 text-blue-400 text-center' to='/Signup'>Sign Up?</Link>
          {
            alert &&
            <div className='text-xl mt-3 text-red-400 text-center'>{alert}</div>
          }
        </form>
      </div>
    </section>
  )
}

export default SignIn