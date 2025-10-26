import {NavLink, type NavLinkProps} from 'react-router'

function NavMenuLink({children, ...props}: NavLinkProps) {
  return (
    <NavLink
      className={({isActive}) =>
        isActive
          ? 'text-gray-900  p-2 border-b-emerald-400 border-b-2'
          : ' text-gray-600  hover:border-b-2 hover:border-b-emerald-400 p-2'
      }
      {...props}>
      {children}
    </NavLink>
  )
}

export default NavMenuLink
