import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { Provider } from "react-redux"

//store
import store from "./store/configureStore"

// layout
import MainLayout from "./layouts/Main/MainLayout"

// private
import PrivateRoutes from "./routes/PrivateRoutes"
import PublicRoutes from "./routes/PublicRoutes"

// pages
import Home from "./pages/Home"
import SignIn from "./pages/User/SignIn"
import SignUp from "./pages/User/SignUp"
import Center from "./pages/User/Center"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            
            {/* private */}
            <Route element={<PrivateRoutes />}>
              <Route index element={<Home />} />
              <Route path='/center' element={<Center />} />
            </Route>

            {/* public */}
            <Route element={<PublicRoutes />}>
              <Route path='/Signin' element={<SignIn />} />
              <Route path='/Signup' element={<SignUp />} />
            </Route>

            {/* notfound */}
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
