import type {TAuthRole} from '../features/auth/authSlice.types'

export const isAuthRole = (value: string | null): value is TAuthRole => {
  return value === 'adming' || value === 'guest' || value === 'nonAuthed'
}
