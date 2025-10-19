type TAuthRole = 'guest' | 'admin' | 'nonAuthed'

export interface IAuthState {
  isAuth: boolean
  role: TAuthRole
}
