import {memo} from 'react'
import NavMenuLink from '../UI/NavMenuLink/NavMenuLink'

const Header = memo(function Header() {
  return (
    <header>
      <nav className='flex justify-between gap-5 p-4 bg-blue-200 shadow-md  rounded-md  '>
        <ul className='flex gap-2'>
          <li>
            <NavMenuLink to={'/'}>Home</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/lab'}>Lab helper</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/corr'}>Corruption</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/gems'}>All gems</NavMenuLink>
          </li>
          {/* <li>
            <NavMenuLink to={'/about'}>About</NavMenuLink>
          </li> */}
        </ul>
        <div>
          <NavMenuLink to={'/login'}>Login</NavMenuLink>
        </div>
      </nav>
    </header>
  )
})

export default Header
