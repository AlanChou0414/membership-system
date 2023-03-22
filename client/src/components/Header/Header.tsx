import { NavLink } from 'react-router-dom'

// icons
import { FaUserCircle } from "react-icons/fa"

// types
import { MenuOptionType } from '../../types/HeaderType'

// options
const MenuOption: MenuOptionType = {
  options: [
    {
      title: 'Sign in / Sign up',
      link: '/login'
    },
    {
      title: 'Center',
      link: '/center'
    },
  ]
}

const Header = () => {
  return (
    <header className='bg-dark h-20 sticky flex items-center text-light'>
      <div className='container flex mx-auto max-w-screen-xl items-center justify-between'>
        <NavLink to='/'>
          <h1 className='text-3xl'>Membership System</h1>
        </NavLink>
        <ul>
          <NavLink to='/signin'>
            <FaUserCircle size={35} />
          </NavLink>
          {
            // MenuOption.options.map(option => (
            //   <NavLink
            //     key={option.title}
            //     className='text-ml mr-1 ml-1 p-2'
            //     to={option.link}
            //   >
            //     {option.title}
            //   </NavLink>
            // ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header