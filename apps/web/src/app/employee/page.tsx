'use client'

import DriverPage from "@/components/EmployeePage/driverPage"
import OutletAdminPage from "@/components/EmployeePage/outletAdminPage"
import WorkerPage from "@/components/EmployeePage/workerPage"
import { useAppSelector } from "@/redux/hooks"
import { Role } from "@/type/role"
import { useDispatch } from "react-redux"


export default function Employee() {

    const dispatch = useDispatch()
    const employee = useAppSelector((state) => state.employee)
    const checkRole = (role: Role) => {
        return employee?.role === role
    }

    return (
        <section>
            {employee.email}

            {checkRole(Role.driver) && (
                    <DriverPage/>
            )}
            {checkRole(Role.worker) && (
                    <WorkerPage/>
            )}
            {checkRole(Role.outletAdmin) && (
                    <OutletAdminPage/>
            )}
        </section>
    )
}