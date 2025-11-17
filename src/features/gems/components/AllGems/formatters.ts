import type {TgemLevel, TgemQuality} from '../../../filters/filters.types'

const allowedLevelValues = (isCorrupted: boolean): TgemLevel[] =>
  isCorrupted ? [20, 21] : [1, 20]

const allowedQualityValues = (isCorrupted: boolean): TgemQuality[] =>
  isCorrupted ? [20, 23] : [0, 20]

export const formatLevel = (isCorrupted: boolean) =>
  allowedLevelValues(isCorrupted).map(
    (i) =>
      ({
        label: `Level ${i.toString()}`,
        value: i,
      } as const)
  )
export const formatQuality = (isCorrupted: boolean) =>
  allowedQualityValues(isCorrupted).map(
    (i) =>
      ({
        label: `${i.toString()}%`,
        value: i,
      } as const)
  )
