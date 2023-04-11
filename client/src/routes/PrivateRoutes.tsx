import Cookies from "js-cookie"
import { Navigate, Outlet, } from "react-router-dom"

const PrivateRoutes = () => {
  return (
    Cookies.get('token') ? <Outlet /> : <Navigate to='/signin' />
  )
}
export default PrivateRoutes
