import {memo} from 'react'
import NavMenuLink from './UI/NavMenuLink/NavMenuLink'

function Header() {
  return (
    <header className=' flex justify-between gap-5 p-4 bg-blue-200 shadow-md rounded-md   '>
      <nav>
        <ul className='flex gap-2'>
          <li>
            <NavMenuLink to={'/'}>Home</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/lab'}>Lab helper</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/corrupt'}>Corruption</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/gems'}>All gems</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/about'}>About</NavMenuLink>
          </li>
        </ul>
      </nav>
      <div>
        <NavMenuLink to={'/login'}>Login</NavMenuLink>
      </div>
    </header>
  )
}

export default memo(Header)
