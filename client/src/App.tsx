import { BrowserRouter, Route, Routes, } from "react-router-dom"

// layout
import MainLayout from "./layouts/Main/MainLayout"

// private
import PrivateRoutes from "./routes/PrivateRoutes"

// pages
import Home from "./pages/Home/Home"
import Login from "./pages/User/Login/Login"
import SignUp from "./pages/User/SignUp/SignUp"
import Center from "./pages/User/Center/Center"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/center' element={<Center />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
