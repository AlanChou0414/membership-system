import { Outlet } from 'react-router-dom'

// components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-screen-xl'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout