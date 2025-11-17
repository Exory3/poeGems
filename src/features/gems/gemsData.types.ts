export interface IGemsList {
  gemsList: IGemDetails[]
  status: TStatus
  error: string | null
}

export interface IGemDetails {
  name: string
  price: number
  id: number
  icon: string
  divinePrice: number
  gemIsCorrupted: boolean
  gemLevel: TgemLevel
  gemQuality: TgemQuality
}
export interface IApiGemDetails {
  name: string
  mean: number
  id: number
  icon: string
  divine: number
  group: 'activegem' | 'support' | 'gem' | 'supportgem'
  gemIsCorrupted: boolean
  gemLevel: TgemLevel
  gemQuality: TgemQuality
}

type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
type TgemLevel = 1 | 20 | 21
type TgemQuality = 0 | 20 | 23
