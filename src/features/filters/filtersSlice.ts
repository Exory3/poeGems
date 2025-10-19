import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {IInitialState, TgemLevel, TgemQuality} from './filters.types'

const initialState: IInitialState = {
  gemIsCorrupted: false,
  gemLevel: 20,
  gemQuality: 0,
}

const filterSLice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGemLevel(state, action: PayloadAction<TgemLevel>) {
      state.gemLevel = action.payload
    },
    setGemQuality(state, action: PayloadAction<TgemQuality>) {
      state.gemQuality = action.payload
    },
    setGemIsCorrupted(state, action: PayloadAction<boolean>) {
      state.gemIsCorrupted = action.payload

      //removing impossible or useless gem combinations
      if (!action.payload) {
        if (state.gemLevel > 20) {
          state.gemLevel = 20
        }

        if (state.gemQuality > 20) {
          state.gemQuality = 20
        }
      } else {
        if (state.gemLevel === 1) {
          state.gemLevel = 20
        }

        if (state.gemQuality === 0) {
          state.gemQuality = 20
        }
      }
    },
  },
})

export default filterSLice
export const {setGemLevel, setGemQuality, setGemIsCorrupted} =
  filterSLice.actions
