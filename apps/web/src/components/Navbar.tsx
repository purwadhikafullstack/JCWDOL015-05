'use client'

import { useAppSelector } from "@/redux/hooks";
import { Role } from "@/type/role";
import { CustomerNavbar } from "./NavbarPage/customerNavbar";
import EmployeeNavbarPage from "./NavbarPage/employeeNavbar";
import { getToken } from "@/lib/server";
import { useEffect, useState } from "react";


interface TokenData {
    customerId: number | undefined
    role: string | undefined
}
export default function Navbar() {
  const [roleUser, setRoleUser] = useState('')
  const [token, setToken] = useState('');

  
  const getTokenData = async () => {
    const resToken = await getToken()
    if(resToken ){
      const decodeToken: TokenData = JSON.parse(atob(`${resToken}`.split('.')[1]))
      console.log(decodeToken)
      const role = `${decodeToken.role}`
      setRoleUser(role)
    }
    setToken(resToken as string)
  }
  console.log(roleUser)
  useEffect(()=>{
    getTokenData()
    
  },[])
  if(roleUser == 'driver' || roleUser == 'outletAdmin' || roleUser == 'worker') {
    return <EmployeeNavbarPage/>
  } 
  if(roleUser == 'customer' || !token){
    return<CustomerNavbar/>
  }
}
