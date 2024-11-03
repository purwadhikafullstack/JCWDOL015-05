import { ICustomerLogin, ICustomerNewPass, ICustomerReg, ICustomersResetPass, ICustomerVerify } from "@/type/customers";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'
export const customerReg = async (data: ICustomerReg) => {
  const res = await fetch(`${BASEURL}/api/users/register`, {
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
  const res = await fetch(`${BASEURL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return { result, ok: res.ok, user: result.user.data }
}
export const customerVerify = async (data: ICustomerVerify, token: any) => {
  const url = `http://localhost:8000/api/users/verify/${data.token}`
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

export const googleLogin = async () => {
  try {
    // const res = await fetch(`${BASEURL}/api/users/auth/google`, {
    //   method: "GET",
    //   credentials: "include"
    // });
    // const result = await res.json();
    // console.log(result);
    // return { result, ok: res.ok };
    window.location.href = `http://localhost:8000/api/users/auth/google`
  } catch (err) {
    console.error("Failed to fetch:", err);
  }
}
export const resetPassword = async (data: ICustomersResetPass) => {
  const res = await fetch(`${BASEURL}/api/users/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return { result, ok: res.ok }
}
export const changePassword = async (data: ICustomerNewPass, token: any) => {
  const res = await fetch(`${BASEURL}/api/users/reset/${token}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  console.log(result)
  return { result, ok: res.ok }
}