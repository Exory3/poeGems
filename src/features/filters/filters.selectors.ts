import {createSelector} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
import {getGems} from '../gemsData/gemsData.selectors'
import {
  filterByGemColor,
  filterByProperties,
  sortByDescPrice,
} from './filters.utils'
import type {TGemColor} from './transfiguredGems'

export const getFilter = (state: RootState) => state.filter

export const getFilteredData = createSelector(
  [getGems, getFilter],
  (gems, filter) => filterByProperties(gems, filter)
)
export const getLabGems = createSelector([getGems], (gems) =>
  filterByProperties(gems, {gemLevel: 1, gemIsCorrupted: false, gemQuality: 0})
)

export const getSortedLabGems = createSelector([getLabGems], sortByDescPrice)

export const getFilteredAndSortedData = createSelector(
  [getFilteredData],
  sortByDescPrice
)

export const makeGetFilteredByName = (searchString: string) =>
  createSelector([getGems], (gems) =>
    searchString ? gems.filter((g) => g.name === searchString) : []
  )

export const makeGetFilteredByColor = (color: TGemColor) =>
  createSelector([getLabGems], (gems) => filterByGemColor(gems, color))
