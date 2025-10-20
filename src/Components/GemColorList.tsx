import {memo, useMemo} from 'react'
import type {TGemColor} from '../features/filters/transfiguredGems'
import type {IGemDetails} from '../features/gemsData/gemsData.types'
import {labProbablities} from '../utils/labProbablities'
import GemListItem from './GemListItem'
import {topEvContributors} from '../utils/topEvContributors'

type TGemColorListProps = {
  gems: IGemDetails[]
  color: TGemColor
  title: string
}

function GemColorList({gems, title}: TGemColorListProps) {
  const prices = useMemo(() => gems.map((gem) => gem.price), [gems])
  const probabilities = useMemo(() => labProbablities(prices), [prices])
  const topContributors = useMemo(
    () => topEvContributors(probabilities, 5),
    [probabilities]
  )

  const evValue = useMemo(
    () =>
      Object.entries(probabilities).reduce((acc, [value, prob]) => {
        return acc + Number(value) * prob
      }, 0),
    [probabilities]
  )
  if (gems.length === 0) return null

  return (
    <div>
      <h2 className='text-xl text-center font-semibold'>{title}</h2>
      <p className='text-center text-md mb-3'>
        Expceted ev = {evValue.toFixed(2)}
      </p>
      <ul>
        {topContributors.map(({price, contribution, prob}) => (
          <li
            className='text-center'
            key={price}>
            {price}c - {(prob * 100).toFixed(1)}% ({contribution.toFixed(2)} EV)
          </li>
        ))}
      </ul>
      {gems.map((gem) => (
        <GemListItem
          item={gem}
          key={gem.name}
        />
      ))}
    </div>
  )
}

export default memo(GemColorList)
