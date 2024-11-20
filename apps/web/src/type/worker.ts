export type IWorkerData = {
    workerId: number,
    employeeId: number,
    employee: {
        email: string,
        fullName: string,
        role: string,
        avatar: string,
        outletId : number
    },
    station: string

}

export type IDriverData = {
    driverId: number,
    employeeId: number,
    employee: {
        email: string,
        fullName: string,
        role: string,
        avatar: string,
        outletId: number
    },
    station: string

}

export type IOutletAdminData = {
    outletAdminId: number,
    employeeId: number,
    employee: {
        email: string,
        fullName: string,
        role: string,
        avatar: string,
        outletId: number
    },
    station: string

}

export type ISuperAdminData = {
    employeeId: number,
    fullName: string,
    role: string

}