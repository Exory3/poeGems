import {memo, useMemo} from 'react'
import type {TGemColor} from '../../../features/filters/transfiguredGems'
import type {IGemDetails} from '../../../features/gemsData/gemsData.types'
import {labProbablities} from '../../../utils/labProbablities'
import GemListItem from '../GemListItem/GemListItem'
import {topEvContributors} from '../../../utils/topEvContributors'
import {evStyle, titleStyle} from './gemColorList.style'
import GemsTable from './gemsTable/GemsTable'

type TGemColorListProps = {
  gems: IGemDetails[]
  color: TGemColor
  title: string
}

function GemColorList({gems, title, color}: TGemColorListProps) {
  const prices = gems.map((gem) => gem.price)
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
  return (
    <div>
      <h2 className={titleStyle({color})}>{title}</h2>
      <p className={evStyle()}>Expected value = {evValue.toFixed(2)}</p>
      <GemsTable topContributors={topContributors} />
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
