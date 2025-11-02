import type {IGemDetails} from '../gemsData/gemsData.types'
import type {IInitialState} from './filters.types'
import {TRANSGEMS, type TGemColor} from './transfiguredGems'

export const filterByProperties = (
  gems: IGemDetails[],
  filter: Partial<IInitialState>
) =>
  gems.filter(
    (g) =>
      (filter.gemIsCorrupted === undefined ||
        g.gemIsCorrupted === filter.gemIsCorrupted) &&
      (filter.gemLevel === undefined || g.gemLevel === filter.gemLevel) &&
      (filter.gemQuality === undefined || g.gemQuality === filter.gemQuality)
  )

export const sortByDescPrice = (gems: IGemDetails[]) => {
  return [...gems].sort((a, b) => b.price - a.price)
}

export const filterByGemColor = (gems: IGemDetails[], color: TGemColor) => {
  const gemsColorArray = TRANSGEMS[color]
  return gems.filter((gem) => gemsColorArray.includes(gem.name))
}
