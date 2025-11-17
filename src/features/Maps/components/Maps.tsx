import {useLoaderData} from 'react-router'
import {
  MAPLISTWITHODDS,
  type FragmentDetails,
  type MapDetails,
} from '../maps.types'
import MapStatsDetails from './MapStatsDetails'

function Maps() {
  const {maps, frags} = useLoaderData() as {
    maps: MapDetails[]
    frags: FragmentDetails[]
  }

  return (
    <>
      <div className='flex gap-5 justify-between'>
        {maps.map((map) => (
          <div key={map.id}>
            <img
              src={map.icon}
              alt={map.name}
            />
            <p key={map.name}>
              {map.name}:{map.mean}c
            </p>
          </div>
        ))}
      </div>
      <br />
      <div className='flex gap-5 flex-wrap'>
        {frags.map((frag) => (
          <div key={frag.id}>
            <img
              src={frag.icon}
              alt={frag.name}
            />
            <p key={frag.name}>{frag.mean} c</p>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap  justify-center gap-4 mt-10 '>
        {maps.map((map) => (
          <MapStatsDetails
            key={map.id}
            map={map}
            frags={frags}
            favourableFrags={MAPLISTWITHODDS[map.name]}
          />
        ))}
      </div>
    </>
  )
}

export default Maps
