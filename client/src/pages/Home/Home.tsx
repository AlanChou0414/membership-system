import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import useSWR from 'swr'
import axios from "axios"
import Cookies from "js-cookie"

//type
import { RootType } from "../../store/configureStore"
interface DecodedToken {
  _id: string
}

//slice
import { setUserData } from "../../slice/User/UserSlice"
import { setAlert } from "../../slice/Alert/AlertSlice"

const Home = () => {
  const { userName, userEmail } = useSelector((state: RootType) => state.User)
  const alertMessage = useSelector((state: RootType) => state.Alert)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = Cookies.get('token')
  const decoded: DecodedToken = jwtDecode(token!) as DecodedToken

  const { data, error } = useSWR(
    `${import.meta.env.VITE_VAR_API_URL}/user/${decoded!._id}`,
    async url => {
      try {
        const response = await axios.get(url)
        const { data } = response
        dispatch(setUserData(data.data))
        return data
      } catch (error) {
        console.log(error)
      }
    }
  )

  const handleUserLogout = () => {
    Cookies.remove('token')
    dispatch(setAlert('Logout success!'))
    setTimeout(() => {
      navigate('/signin')
      dispatch(setAlert(''))
    }, 1000);
  }

  if (!data) return <div>Loading...</div>
  if (error) return <div>Api Error</div>

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
