import type {TAuthRole} from '../features/auth/authSlice.types'
import {isAuthRole} from './typeGuard'
const baseUrl = `https://api.poe.watch/get?league=Mercenaries&category=gem`

export const getAllGems = async () => {
  const res = await fetch(baseUrl)
  if (!res.ok) {
    throw new Error('Failed fetching gem list from server')
  }
  const data = await res.json()
  return data
}

const login = (role: TAuthRole) => {
  new Promise<{storedId: string}>((resolve) => {
    setTimeout(() => {
      localStorage.setItem('role', JSON.stringify(role))
      const storedId = JSON.parse(localStorage.getItem('items') ?? '')
      resolve({storedId})
    }, 1000)
  })
}

const getUser = () => {
  new Promise<{user: TAuthRole} | null>((resolve) => {
    setTimeout(() => {
      const user = localStorage.getItem('role')
      if (isAuthRole(user)) {
        resolve({user})
      } else resolve(null)
    }, 500)
  })
}

const logout = () => {
  new Promise<void>((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('items')
      resolve()
    }, 200)
  })
}
export const api = {
  login,
  getUser,
  logout,
}
