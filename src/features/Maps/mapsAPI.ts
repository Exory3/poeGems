import {FRAGLIST, type FragmentDetails, type MapDetails} from './maps.types'

const baseUrl = `https://api.poe.watch/get?league=Keepers&category=`

export const getMapsData = async (): Promise<
  [MapDetails[], FragmentDetails[]]
> => {
  const [mapsData, fragsData] = await Promise.all([
    fetch(baseUrl + 'map').then((res) => res.json() as Promise<MapDetails[]>),
    fetch(baseUrl + 'fragment').then(
      (res) => res.json() as Promise<FragmentDetails[]>
    ),
  ])

  return [mapsData, fragsData]
}

const FRAG_SET = new Set<string>(FRAGLIST)

export const loader = async () => {
  try {
    const [mapsData, fragsData] = await getMapsData()
    const maps = mapsData.filter((map) => map.mapTier === 17)
    console.log(maps)
    const frags = fragsData.filter((frag) => FRAG_SET.has(frag.name))
    return {maps, frags, error: null}
  } catch {
    return {maps: [], frags: [], error: 'failed loading data'}
  }
}
