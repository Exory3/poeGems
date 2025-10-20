import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import type {IApiGemDetails, IGemDetails, IGemsList} from './gemsData.types'

const baseUrl = `https://api.poe.watch/get?league=Mercenaries&category=gem`

type partialResponse = IApiGemDetails & Record<string, unknown>

export const fetchGems = createAsyncThunk<IGemDetails[]>(
  'gemsData/fetch',
  async () => {
    const res = await fetch(baseUrl)
    if (!res.ok) {
      throw new Error('Error fetching data from server')
    }
    const data = (await res.json()) as partialResponse[]
    const filteredData = data.filter((gem) => gem.group === 'activegem')
    const result: IGemDetails[] = filteredData.map((item) => ({
      icon: item.icon,
      name: item.name,
      price: item.mean,
      divinePrice: item.divine,
      id: item.id,
      gemIsCorrupted: item.gemIsCorrupted,
      gemLevel: item.gemLevel,
      gemQuality: item.gemQuality,
    }))
    return result
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
  extraReducers: (builder) => {
    builder.addCase(fetchGems.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchGems.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Unknown error'
    })
    builder.addCase(
      fetchGems.fulfilled,
      (state, action: PayloadAction<IGemDetails[]>) => {
        state.status = 'succeeded'
        state.gemsList = action.payload
      }
    )
  },
})

export default gemsDataSlice
