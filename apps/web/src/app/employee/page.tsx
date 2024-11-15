'use client'
import DriverPage from "@/components/EmployeePage/driverPage"
import OutletAdminPage from "@/components/EmployeePage/outletAdminPage"
import WorkerPage from "@/components/EmployeePage/workerPage"
import { useAppSelector } from "@/redux/hooks"
import { workerLogoutAction } from "@/redux/slice/workerSlice"
import { Role } from "@/type/role"
import { useRouter } from "next/navigation"
import { useDispatch} from "react-redux"



export default function Employee() {
    const router = useRouter()
    const dispatch = useDispatch()
    const employee = useAppSelector((state) => state.employee)
    const worker = useAppSelector((state) => state.worker)
    
    const checkRole = (role : Role) => {
        return worker.employee?.role === role
    }

    const handleLogout = () => {
        dispatch(workerLogoutAction())
        router.push('/')
    }
   
    return (
        <section>
            <button onClick={handleLogout}>
                Log Out 
            </button>
            <br />
            
            {worker.employee.role}
            
            {checkRole(Role.worker) && (
                <WorkerPage/>
            )}
            {checkRole(Role.driver) && (
                <DriverPage/>
            )}
            {checkRole(Role.outletAdmin) && (
                <OutletAdminPage/>
            )}
















            
        </section>
    )
}