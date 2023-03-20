import { Route, Routes } from "react-router-dom"

// pages
import Home from "../pages/Home/Home"
import Login from "../pages/User/Login/Login"
import SignUp from "../pages/User/SignUp/SignUp"

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  )
}

export default PublicRoutes