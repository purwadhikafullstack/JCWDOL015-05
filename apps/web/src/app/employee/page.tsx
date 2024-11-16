'use client'
import DriverPage from "@/components/EmployeePage/driverPage"
import OutletAdminPage from "@/components/EmployeePage/outletAdminPage"
import WorkerPage from "@/components/EmployeePage/workerPage"
import { useAppSelector } from "@/redux/hooks"
import { driverLogoutAction } from "@/redux/slice/driverSlice"
import { outletAdminLogoutAction } from "@/redux/slice/outletAdminSlice"
import { workerLogoutAction } from "@/redux/slice/workerSlice"
import { Role } from "@/type/role"
import { useRouter } from "next/navigation"
import { render } from "react-dom"
import { useDispatch } from "react-redux"



export default function Employee() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { worker, driver, outletAdmin } = useAppSelector((state) => ({
        worker: state.worker,
        driver: state.driver,
        outletAdmin: state.outletAdmin
    }))

    const handleLogout = () => {
        if (worker) {
            dispatch(workerLogoutAction())
        } else if (driver) {
            dispatch(driverLogoutAction())
        } else if (outletAdmin) {
            dispatch(outletAdminLogoutAction())
        }
        router.push('/')
    }

    const role = worker?.employee?.role || driver?.employee?.role || outletAdmin?.employee?.role;

    const renderPage = () => {
        switch (role) {
            case 'worker' : return <WorkerPage/>
            case 'driver' : return <DriverPage/>
            case 'outletAdmin' : return <OutletAdminPage/>
            default: return <div>role not found</div>
        }
    }

    return (
        <section>
            <button onClick={handleLogout}>
                Log Out
            </button>
            <br />

            {role}
            {renderPage()}
        </section>
    )
}