import {memo} from 'react'
import NavMenuLink from '../../shared/UI/NavMenuLink/NavMenuLink'
import {headerStyle, navbarStyle} from './Layout.styles'

const Header = memo(function Header() {
  return (
    <header>
      <nav className={headerStyle()}>
        <ul className={navbarStyle()}>
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
          <li>
            <NavMenuLink to={'/maps'}>T17 maps </NavMenuLink>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default Header
