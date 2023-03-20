import { Route, Routes } from "react-router-dom"

// pages
import Center from "../pages/User/Center/Center"

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/center' element={<Center />} />
    </Routes>
  )
}

export default PrivateRoutes