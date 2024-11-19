'use client'
import { LoginPage } from "@/components/AuthPage/loginpage"
import { getToken } from "@/lib/server"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Login() {
  const [token , setToken] = useState('')
  const router = useRouter()
  const getTokenData = async ()=>{
    const token = await getToken()
    setToken(token as string)
  }
  useEffect(()=>{
    getTokenData()
    if(token){
      router.push('/')
    }
  },[token,router])
  return (
    <LoginPage />
  )
}