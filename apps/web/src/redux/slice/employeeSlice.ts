import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { logoutAction } from "./customerSlice"

export type IEmployeeData = {
    employeeId: number
    email: string
    fullName: string
    role: string
    avatar: string
    outletId : number
}



const initialState: IEmployeeData = {
    employeeId: 0,
    email: '',
    fullName: '',
    role: '',
    avatar: '',
    outletId : 0
}


export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        employeeLoginAction: (state, action: PayloadAction<IEmployeeData>) => {
            const { employeeId, email, fullName, role, avatar, outletId } = action.payload
            state.employeeId = employeeId
            state.email = email
            state.fullName = fullName
            state.role = role
            state.avatar = avatar
            state.outletId = outletId
        },
        employeeLogoutAction: (state) => {
            state.employeeId = 0
            state.email = ''
            state.fullName = ''
            state.role = ''
            state.avatar = ''
            state.outletId = 0
        }
    }
})

export const { employeeLoginAction, employeeLogoutAction } = employeeSlice.actions
export default employeeSlice.reducer