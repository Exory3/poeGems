import {createSlice} from '@reduxjs/toolkit'
import type {IAuthState} from './authSlice.types'

const initialState: IAuthState = {
  isAuth: false,
  role: 'nonAuthed',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice
