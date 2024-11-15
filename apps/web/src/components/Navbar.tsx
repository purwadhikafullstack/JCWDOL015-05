'use client'

import { useAppSelector } from "@/redux/hooks";
import { Role } from "@/type/role";
import { CustomerNavbar } from "./NavbarPage/customerNavbar";
import EmployeeNavbarPage from "./NavbarPage/employeeNavbar";

export default function Navbar() {
  const worker = useAppSelector((state) => state.worker);

  console.log("Worker State:", worker); // Check worker data in console

  if (worker?.employee?.role === Role.worker) {
    console.log("Rendering Employee Navbar");
    return <EmployeeNavbarPage />;
  } else {
    console.log("Rendering Customer Navbar");
    return <CustomerNavbar />;
  }
}
