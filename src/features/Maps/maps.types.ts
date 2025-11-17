export type Frag =
  | 'Synthesising Fragment'
  | 'Devouring Fragment'
  | 'Blazing Fragment'
  | 'Reality Fragment'
  | 'Cosmic Fragment'
  | 'Awakening Fragment'
  | 'Decaying Fragment'
  | 'Lonely Fragment'
  | 'Traumatic Fragment'
  | 'Reverent Fragment'

export type Map =
  | 'Citadel Map'
  | 'Ziggurat Map'
  | 'Sanctuary Map'
  | 'Fortress Map'
  | 'Abomination Map'

export interface FragmentDetails {
  id: number
  name: Frag
  icon: string
  mean: number
}

export interface MapDetails extends Omit<FragmentDetails, 'name'> {
  mapTier: number
  name: Map
}

export const FRAGLIST: Frag[] = [
  'Synthesising Fragment',
  'Devouring Fragment',
  'Blazing Fragment',
  'Reality Fragment',
  'Cosmic Fragment',
  'Awakening Fragment',
  'Decaying Fragment',
  'Lonely Fragment',
  'Traumatic Fragment',
  'Reverent Fragment',
]

export const MAPLIST: Map[] = [
  'Citadel Map',
  'Ziggurat Map',
  'Sanctuary Map',
  'Fortress Map',
  'Abomination Map',
]

export const MAPLISTWITHODDS: Record<Map, Frag[]> = {
  ['Citadel Map']: [
    'Cosmic Fragment',
    'Decaying Fragment',
    'Lonely Fragment',
    'Synthesising Fragment',
  ],
  ['Ziggurat Map']: [
    'Reality Fragment',
    'Devouring Fragment',
    'Synthesising Fragment',
    'Reverent Fragment',
  ],
  ['Sanctuary Map']: [
    'Blazing Fragment',
    'Devouring Fragment',
    'Awakening Fragment',
    'Reverent Fragment',
  ],
  ['Fortress Map']: [
    'Cosmic Fragment',
    'Decaying Fragment',
    'Awakening Fragment',
    'Lonely Fragment',
  ],
  ['Abomination Map']: [
    'Reality Fragment',
    'Blazing Fragment',
    'Synthesising Fragment',
    'Traumatic Fragment',
  ],
}
