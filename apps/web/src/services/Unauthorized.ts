'use client'

import { getToken } from "@/lib/server"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const RoleProtection = (WrappedComponent: any) => {
  return (props: any) => {
    const customer = useAppSelector((state) => state.customer)
    const router = useRouter()

    const checkUser = async () => {
      const token = await getToken()
      if (!token) {
        router.push('/login')
      }else if(customer.role === 'customer'){
        router.push('/unauthorized')
      }
    }
    useEffect(() => {
      checkUser()
    }, [checkUser])


  }
}
export default RoleProtection