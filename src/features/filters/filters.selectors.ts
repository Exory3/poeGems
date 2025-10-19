import {createSelector} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
import {getGems} from '../gemsData/gemsData.selectors'
import type {TgemLevel, TgemQuality} from './filters.types'

export const getFilter = (state: RootState) => state.filter

export const getFilteredData = createSelector(
  [getGems, getFilter],
  (gems, {gemIsCorrupted, gemLevel, gemQuality}) =>
    gems.filter(
      (g) =>
        g.gemLevel === gemLevel &&
        g.gemIsCorrupted === gemIsCorrupted &&
        g.gemQuality === gemQuality
    )
)

export const getFilteredByName = createSelector(
  [getGems, (_: RootState, searchString: string) => searchString],
  (gems, searchString) =>
    gems.filter((g) => g.name.localeCompare(searchString) >= 0)
)
export const getFilteredAndSortedData = createSelector(
  [getFilteredData],
  (data) => data.sort((a, b) => b.price - a.price)
)

export const allowedLevelValues = (isCorrupted: boolean): TgemLevel[] =>
  isCorrupted ? [20, 21] : [1, 20]

export const allowedQualityValues = (isCorrupted: boolean): TgemQuality[] =>
  isCorrupted ? [20, 23] : [0, 20]
