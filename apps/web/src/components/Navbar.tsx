'use client'

import { useAppSelector } from "@/redux/hooks";
import { Role } from "@/type/role";
import { CustomerNavbar } from "./NavbarPage/customerNavbar";
import EmployeeNavbarPage from "./NavbarPage/employeeNavbar";

export default function Navbar() {
  const { worker, driver, outletAdmin, customer } = useAppSelector((state) => ({
    worker: state.worker,
    driver: state.driver,
    outletAdmin: state.outletAdmin,
    customer: state.customer,
  }))
  if(driver || outletAdmin || worker) {
    return <EmployeeNavbarPage/>
  } else if(customer) {
    return<CustomerNavbar/>
  }
}
