import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'

import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks/storeHooks'
import {getStatus} from '../../features/gemsData/gemsData.selectors'
import {fetchGems} from '../../features/gemsData/gemsDataSlice'

function Layout() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(getStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGems())
    }
  }, [dispatch, status])

  return (
    <div className='min-h-svh flex flex-col'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
