import { Navigate, Outlet, } from "react-router-dom"

// types
import { AuthType } from "../types/AuthType"

// auth
const auth: AuthType = { 'token': false }

const PrivateRoutes = () => {
  return (
    auth.token ? <Outlet /> : <Navigate to='/signin' />
  )
}
export default PrivateRoutes
