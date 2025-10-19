import {combineSlices, configureStore} from '@reduxjs/toolkit'
import gemsDataSlice from '../features/gemsData/gemsDataSlice'
import authSlice from '../features/auth/authSlice'
import filterSLice from '../features/filters/filtersSlice'

const rootReducer = combineSlices(gemsDataSlice, authSlice, filterSLice)

const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
