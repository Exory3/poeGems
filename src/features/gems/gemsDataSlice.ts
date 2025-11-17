import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import type {IApiGemDetails, IGemDetails, IGemsList} from './gemsData.types'
import {getAllGems} from './gemsAPI'

type PartialResponse = IApiGemDetails & Record<string, unknown>

export const getFilteredGems = createAsyncThunk<IGemDetails[]>(
  'gemsData/fetch',
  async () => {
    const data = (await getAllGems()) as PartialResponse[]
    const filteredData = data.filter((gem) => gem.group === 'activegem')
    return filteredData.map((item) => ({
      icon: item.icon,
      name: item.name,
      price: item.mean,
      divinePrice: item.divine,
      id: item.id,
      gemIsCorrupted: item.gemIsCorrupted,
      gemLevel: item.gemLevel,
      gemQuality: item.gemQuality,
    }))
  }
)

const initialState: IGemsList = {
  gemsList: [],
  status: 'idle',
  error: null,
}

const gemsDataSlice = createSlice({
  name: 'gemsData',
  initialState,
  reducers: {
    // addSome(state, action: PayloadAction<boolean>) {
    //   state.loading = action.payload
    // },
  },
  selectors: {
    getGems: (state) => state.gemsList,
    getStatus: (state) => state.status,
    getError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder.addCase(getFilteredGems.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(getFilteredGems.rejected, (state, action) => {
      state.status = 'failed'
      console.log(action)
      state.error = action.error.message ?? ''
    })
    builder.addCase(
      getFilteredGems.fulfilled,
      (state, action: PayloadAction<IGemDetails[]>) => {
        state.status = 'succeeded'
        state.gemsList = action.payload
      }
    )
  },
})

export default gemsDataSlice
export const {getGems, getStatus, getError} = gemsDataSlice.selectors
