import {createSelector} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
import {
  filterByGemColor,
  filterByProperties,
  sortByDescPrice,
} from './filters.utils'

import type {TGemColor} from './transfiguredGems'
import {getGems} from '../gemsData/gemsDataSlice'

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

export const getGroupedWithEV = createSelector([getGems], (gems) => {
  const filteredList = gems.filter(
    (g) =>
      (g.gemLevel === 21 && g.gemQuality === 20) ||
      (g.gemLevel === 20 && g.gemQuality === 23) ||
      (g.gemLevel === 20 && g.gemQuality === 20)
  )
  const grouped = Object.groupBy(filteredList, (g) => g.name)

  return Object.entries(grouped)
    .map(([name, list]) => {
      if (!list || list.length !== 4) return null

      const versions = Object.fromEntries(
        list.map((g) => {
          let key = ''
          if (g.gemLevel === 21) key = '21_20'
          else if (g.gemQuality === 23) key = '20_23'
          else if (g.gemIsCorrupted) key = '20_20_c'
          else key = '20_20'
          return [key, g]
        })
      )

      const ev =
        versions['21_20'].divinePrice +
        versions['20_23'].divinePrice +
        4 *
          Math.min(
            versions['20_20_c'].divinePrice,
            versions['20_20'].divinePrice
          ) +
        2 *
          0.9 *
          Math.min(
            versions['20_20_c'].divinePrice,
            versions['20_20'].divinePrice
          ) -
        8 * versions['20_20'].divinePrice
      return {name, versions, ev}
    })
    .filter((item) => item !== null)
})
