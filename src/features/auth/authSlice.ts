import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {IAuthState} from './authSlice.types'

const initialState: IAuthState = {
  isAuth: false,
  role: 'nonAuthed',
}
export const login = createAsyncThunk('auth/login', async () => {})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice
