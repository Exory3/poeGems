import type {IApiGemDetails} from './gemsData.types'

const baseUrl = `https://api.poe.watch/get?league=Keepers&category=`

export const getAllGems = async (): Promise<IApiGemDetails[]> => {
  const res = await fetch(baseUrl + 'gem')
  if (!res.ok) {
    throw new Error('Failed fetching gem list from server')
  }
  const data = await res.json()
  return data
}
