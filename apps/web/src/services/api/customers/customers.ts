import { ICustomerEditEmail, ICustomerLogin, ICustomerNewPass, ICustomerReg, ICustomersResetPass, ICustomerVerify, ISendEmailVerification, IUserEdit } from "@/type/customers";
import  {auth, provider, signInWithPopup} from '@/firebase/firebaseConfig'
import { GoogleAuthProvider } from "firebase/auth";
const BASEURL = process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:8000'
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
  console.log(res)
  const result = await res.json()
  return { result, ok: res.ok, user: result.user.data }
}
export const customerVerify = async (data: ICustomerVerify, token: any) => {
  const url = `${BASEURL}/api/users/verify/${data.token}`
  console.log(url)
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
    const result = await signInWithPopup(auth, provider);

    const idToken = await result.user.getIdToken();
    if(!idToken ) throw new Error('id token not found')

    const res = await fetch(`${BASEURL}/api/users/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: idToken }),
    });
    console.log(res)
    if (!res.ok) {
      throw new Error('Failed to authenticate with backend');
    }
    const data = await res.json();
    console.log('Login successful:', data);
    return {ok: res.ok, result: data, data: data.data}
  } catch (error) {
    console.error('Google login failed:', error);
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

export const editProfile = async (data: IUserEdit) => {
  const url = `${BASEURL}/api/users/edit`;
  const formData = new FormData();

  // Add avatar file if it exists
  if (data.avatar) {
    formData.append('avatar', data.avatar); // assumes data.avatar is a File
  }
  formData.append('customerId', String(data.customerId))
  formData.append('fullName', data.fullName);

  // Make the PATCH request with FormData
  const res = await fetch(url, {
    method: 'PATCH',
    body: formData,
  });
console.log(res)
  const result = await res.json();
  return { result, ok: res.ok };
};

export const getCustomerData = async (customerId: number) => {
  const url = `${BASEURL}/api/users/${customerId}`
  const res = await fetch(url)
  const result = await res.json()
  console.log(result)
  return {result, ok: res.ok, data: result.data}
}
export const sendEmailVerification = async(data: ISendEmailVerification) =>{
  const url = `${BASEURL}/api/users/send-emailVerification`
  const res = await fetch(url,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return {result, ok: res.ok}
}
export const verifyEmail = async (token : string) =>{
  const url = `${BASEURL}/api/users/verify-email/${token}`
  const res = await fetch(url)
  const result = await res.json()
  return {result, ok: res.ok}
}
export const changeEmail = async(data: ICustomerEditEmail) =>{
  const url = `${BASEURL}/api/users/change-email`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return {result, ok :res.ok}
}