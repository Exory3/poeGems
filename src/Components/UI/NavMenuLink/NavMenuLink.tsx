import {NavLink, type NavLinkProps} from 'react-router'
import {linkStyle} from './NavMenuLink.style'

function NavMenuLink({children, ...props}: NavLinkProps) {
  return (
    <NavLink
      className={({isActive}) => linkStyle({active: isActive})}
      {...props}>
      {children}
    </NavLink>
  )
}

export default NavMenuLink
