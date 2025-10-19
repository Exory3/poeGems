export type TgemLevel = 1 | 20 | 21
export type TgemQuality = 0 | 20 | 23

export interface IInitialState {
  gemIsCorrupted: boolean
  gemLevel: TgemLevel
  gemQuality: TgemQuality
}
