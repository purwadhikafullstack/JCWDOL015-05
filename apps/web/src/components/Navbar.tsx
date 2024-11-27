'use client'
import { CustomerNavbar } from "./NavbarPage/customerNavbar";
import EmployeeNavbarPage from "./NavbarPage/employeeNavbar";
import { getToken } from "@/lib/server";
import { useEffect, useState } from "react";
import OutletAdminNavbarPage from "./NavbarPage/outletAdminNavbar";
import SuperAdminNavbarPage from "./NavbarPage/superAdminNavbar";

interface TokenData {
  customerId: number | undefined;
  role: string | undefined;
}

export default function Navbar() {
  const [roleUser, setRoleUser] = useState('');
  const [token, setToken] = useState('');

  const getTokenData = async () => {
    const resToken = await getToken();
    if (resToken) {
      const decodeToken: TokenData = JSON.parse(atob(`${resToken}`.split('.')[1]));
      console.log(decodeToken);
      const role = `${decodeToken.role}`;
      setRoleUser(role);
    }
    setToken(resToken as string);
  };

  useEffect(() => {
    getTokenData();
  }, []);

  // if (!roleUser && !token) {
    // return null; 
  // }

  if (roleUser === 'driver' || roleUser === 'worker') {
    return <EmployeeNavbarPage />
  }

  if (roleUser === 'customer' || !token) {
    return <CustomerNavbar />;
  }

  if (roleUser === 'outletAdmin') {
    return <OutletAdminNavbarPage />;
  }

  if (roleUser === 'superAdmin') {
    return <SuperAdminNavbarPage />;
  }

  return null;
}
