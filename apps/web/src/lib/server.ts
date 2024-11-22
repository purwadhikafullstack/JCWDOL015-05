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
  try {
    const token = cookies().get('token')?.value

    if (token) {
      const currentTime = Date.now() / 1000
      const decodeToken = JSON.parse(atob(token!.split('.')[1]))
      if (decodeToken.exp < currentTime) {
        return cookies().delete('token')
      }
    }
    return token
  } catch (err) {
    console.log(`Error Get Token : ${err}`)
  }
}
export async function decodeToken(token: string){
  try {
    const decodeToken = JSON.parse(atob(token!.split('.')[1]))
    return decodeToken
  } catch (err) {
    console.log(`Error Decode Token : ${err}`)
  }
}
