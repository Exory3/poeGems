export interface IAuthState {
  isAuth: boolean
  role: TAuthRole
}

export type TAuthRole = 'guest' | 'admin' | 'nonAuthed'
