import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { Navigate, Outlet, } from "react-router-dom"

const PrivateRoutes = () => {
  const token = Cookies.get('token')
  if (token) {
    const decoded = jwtDecode(token)
    console.log(decoded)
  }
  return (
    token ? <Outlet /> : <Navigate to='/signin' />
  )
}
export default PrivateRoutes
