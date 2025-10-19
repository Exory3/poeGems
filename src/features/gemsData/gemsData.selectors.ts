import {createSelector} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'

export const getGems = createSelector(
  [(state: RootState) => state.gemsData.gemsList],
  (gemsList) => gemsList
)
export const getStatus = (state: RootState) => state.gemsData.status
