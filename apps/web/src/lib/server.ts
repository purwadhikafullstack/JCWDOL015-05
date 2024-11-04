'use server'
import { cookies } from 'next/headers'
export async function createToken(token: string) {
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('token', token, { expires: Date.now() + oneDay })
}
export async function deleteToken() {
  return cookies().delete('token')
}
export async function getToken() {
  const token = cookies().get('token')?.value
  if (token) {
    const decodeToken = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now() / 1000
    if (decodeToken.exp < currentTime) {
      return cookies().delete('token')
    }
  }
  return token
}