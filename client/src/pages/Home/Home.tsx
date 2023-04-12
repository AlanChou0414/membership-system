import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect } from "react"
import axios from "axios"
import Cookies from "js-cookie"

//type
import { RootState } from "../../types/RootState"
interface DecodedToken {
  _id: string
}

//slice
import { setUserData } from "../../slice/User/UserSlice"
import { setAlert } from "../../slice/Alert/AlertSlice"

const Home = () => {
  const { userName, userEmail } = useSelector((state: RootState) => state.User)
  const alertMessage = useSelector((state: RootState) => state.Alert)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token')
    const decoded: DecodedToken = jwtDecode(token!) as DecodedToken
    const getUserData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_VAR_API_URL}/user/${decoded!._id}`)
      const { data } = response
      dispatch(setUserData(data.data))
    }
    getUserData()
  }, [])

  const handleUserLogout = () => {
    Cookies.remove('token')
    dispatch(setAlert('Logout success!'))
    setTimeout(() => {
      navigate('/signin')
      dispatch(setAlert(''))
    }, 1000);
  }

  return (
    <section className='flex justify-center items-center m-40'>
      <div>
        <h1 className='text-4xl text-center'>Welcome</h1>
        <div className='flex flex-col mt-10  w-64'>
          <div>Name : {userName}</div>
          <div>Email : {userEmail}</div>
          <input
            className='border cursor-pointer mt-5 p-2 hover:bg-black hover:text-white transition duration-500 rounded-lg'
            type="button" value="Logout" onClick={handleUserLogout} />
        </div>
        {
          alertMessage &&
          <div className='text-xl mt-3 text-red-400 text-center'>{alertMessage}</div>
        }
      </div>
    </section>
  )
}

export default Home
