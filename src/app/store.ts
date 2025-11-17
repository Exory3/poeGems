import {combineSlices, configureStore} from '@reduxjs/toolkit'
import gemsDataSlice from '../features/gems/gemsDataSlice'
import filterSLice from '../features/filters/filtersSlice'

const rootReducer = combineSlices(gemsDataSlice, filterSLice)

const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
