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

function GemColorList({gems, title, color}: TGemColorListProps) {
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
  const cn =
    color === 'blue'
      ? 'text-blue-500'
      : color === 'green'
      ? 'text-green-500'
      : 'text-red-500'
  return (
    <div>
      <h2 className={`text-xl text-center font-semibold ` + cn}>{title}</h2>
      <p className='text-center text-md mb-3'>
        Expected value = {evValue.toFixed(2)}
      </p>
      <table className='table-fixed w-full border-collapse'>
        <thead>
          <tr>
            <th className='text-left pl-4'>price</th>
            <th>odds</th>
            <th className='text-right pr-2'>contribution</th>
          </tr>
        </thead>
        <tbody>
          {topContributors.map(({price, contribution, prob}) => (
            <tr key={price}>
              <th className='text-left pl-4'>{price}c</th>
              <th>{(prob * 100).toFixed(1)}%</th>
              <th className='text-right pr-2'>{contribution.toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <ul></ul>
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
