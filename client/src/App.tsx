import { BrowserRouter, Route, Routes, } from "react-router-dom"

// layout
import MainLayout from "./layouts/Main/MainLayout"

// private
import PrivateRoutes from "./routes/PrivateRoutes"

// pages
import Home from "./pages/Home"
import SignIn from "./pages/User/SignIn"
import SignUp from "./pages/User/SignUp"
import Center from "./pages/User/Center"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route element={<PrivateRoutes />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/center' element={<Center />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
