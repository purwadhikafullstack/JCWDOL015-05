import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { logoutAction } from "./customerSlice"

export type IEmployeeData = {
    employeeId: number
    email: string
    fullName: string
    role: string
    avatar: string
}

const initialState = {
    employeeId: 0,
    email: '',
    fullName: '',
    role: '',
    avatar: '',
}

export const workerSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        employeeLoginAction: (state, action: PayloadAction<IEmployeeData>) => {
            const { employeeId, email, fullName, role, avatar } = action.payload
            state.employeeId = employeeId
            state.email = email
            state.fullName = fullName
            state.role = role
            state.avatar = avatar
        },
        employeeLogoutAction: (state) => {
            state.employeeId = 0
            state.email = ''
            state.fullName = ''
            state.role = ''
            state.avatar = ''
        }
    }
})

export const { employeeLoginAction, employeeLogoutAction } = workerSlice.actions
export default workerSlice.reducer