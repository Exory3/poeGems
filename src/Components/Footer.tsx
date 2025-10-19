import {memo, type JSX} from 'react'
import NavMenuLink from './UI/NavMenuLink/NavMenuLink'

function Footer(): JSX.Element {
  return (
    <footer className=' flex justify-between px-5 py-2 bg-blue-200 shadow-md '>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <NavMenuLink to={'/lab'}>Footer</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/corrupt'}>Footer</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={'/gems'}>All gems</NavMenuLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default memo(Footer)
