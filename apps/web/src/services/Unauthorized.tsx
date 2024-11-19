'use client'

import { getToken } from "@/lib/server"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const RoleProtection = (WrappedComponent: React.ComponentType<any>, allowedRoles: string[]) => {
  return (props: any) => {
    const customer = useAppSelector((state) => state.customer)
    // const worker = useAppSelector((state) => state.worker)
    // const outletAdmin = useAppSelector((state) => state.outletAdmin)
    // const driver = useAppSelector((state) => state.driver)
    // const superAdmin = useAppSelector((state) => state.superAdmin)
    // || worker?.role || outletAdmin?.role || driver?.role || superAdmin?.role
    const currentRole = customer?.role 

    const router = useRouter()
    const checkUser = async () => {
      const token = await getToken()
      if (!token) {
        router.push('/login')
      }else if(!allowedRoles.includes(currentRole)){
        router.push('/unauthorized')
      }
    }
    useEffect(() => {
      checkUser()
    }, [currentRole])

    return <WrappedComponent {...props} />
  }
}
export default RoleProtection