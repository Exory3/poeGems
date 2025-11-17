import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'
import {mainStyle, rootStyle} from './Layout.styles'

function Layout() {
  return (
    <div className={rootStyle()}>
      <Header />
      <main className={mainStyle()}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
