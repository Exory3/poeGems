import type {Frag, FragmentDetails, MapDetails} from '../maps.types'
import {styleContainer} from './MapStatsDetails.styles'
// import Chaos from 'assets/images/Chaos.png'

function MapStatsDetails({
  map,
  frags,
  favourableFrags,
}: {
  map: MapDetails
  frags: FragmentDetails[]
  favourableFrags: Frag[]
}) {
  console.log(favourableFrags)
  const odds = frags.map((frag) => {
    return {
      ...frag,
      prob: favourableFrags.includes(frag.name) ? 20 : 3.3,
    }
  })
  const resultPrice = odds.reduce(
    (acc, item) => acc + (item.prob * item.mean) / 100,
    0
  )
  return (
    <div className={styleContainer()}>
      <div>
        <p>
          {map.name} - {resultPrice.toFixed(0)}c per map
        </p>
        <p>
          Profit per map from fragments- {(resultPrice - map.mean).toFixed(0)}
        </p>
      </div>
      <div className='flex gap-4 '>
        {odds.map((item) => (
          <div>
            <img
              className='bg-amber-100 rounded-xl'
              src={item.icon}
              alt={item.name}
            />
            <span>{item.prob}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MapStatsDetails
