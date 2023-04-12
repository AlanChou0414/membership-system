import Cookies from "js-cookie"
import { Navigate, Outlet, } from "react-router-dom"

const PublicRoutes = () => {
  const token = Cookies.get('token')
  return (
    token ? <Navigate to='/' /> : <Outlet />
  )
}
export default PublicRoutes