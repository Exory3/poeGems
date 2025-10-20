import type {RootState} from '../../app/store'

export const getGems = (state: RootState) => state.gemsData.gemsList
export const getStatus = (state: RootState) => state.gemsData.status
