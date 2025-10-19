import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'
import {useAppDispatch, useAppSelector} from '../app/hooks/storeHooks'
import {getStatus} from '../features/gemsData/gemsData.selectors'
import {fetchGems} from '../features/gemsData/gemsDataSlice'
import {useEffect} from 'react'

function Layout() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(getStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGems())
    }
  }, [dispatch, status])

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
