import { ICustomerLogin, ICustomerReg, ICustomerVerify } from "@/type/customers";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'
export const customerReg = async (data: ICustomerReg) => {
  const res = await fetch(`${BASEURL}/api/customers/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return { result, ok: res.ok }
}

export const customerLogin = async (data: ICustomerLogin) => {
  const res = await fetch(`${BASEURL}/api/customers/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return { result, ok: res.ok, user : result.user.data}
}
export const customerVerify = async (data: ICustomerVerify, token: any) => {
  const url = `http://localhost:8000/api/customers/verify/${data.token}`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  console.log(url)
  console.log(data)
  const result = await res.json()
  console.log(result)
  return { result, ok: res.ok }
}