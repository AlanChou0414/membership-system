import { Link } from 'react-router-dom'

// types
import { MenuOptionType } from '../../types/HeaderType'

// options
const MenuOption: MenuOptionType = {
  options: [
    {
      title: '登入／註冊',
      link: '/login'
    },
    {
      title: '會員中心',
      link: '/center'
    },
  ]
}

const Header = () => {
  return (
    <header className='bg-dark h-20 sticky flex items-center text-light'>
      <div className='container flex mx-auto max-w-screen-xxl items-center justify-between'>
        <Link to='/'>
          <h1 className='text-4xl'>會員管理系統</h1>
        </Link>
        <ul>
          {
            MenuOption.options.map(option => (
              <Link
                key={option.title}
                className='text-xl mr-2 ml-2 p-5'
                to={option.link}
              >
                {option.title}
              </Link>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header