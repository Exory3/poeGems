import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from './storeHooks'
import {getFilteredGems} from '../../features/gemsData/gemsDataSlice'

export const useInitApp = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector((state) => state.gemsData.status)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getFilteredGems())
    }
  }, [dispatch, status])
}
