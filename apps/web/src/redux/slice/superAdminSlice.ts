import { ISuperAdminData } from "@/type/worker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISuperAdminData = {
    employeeId: 0,
    fullName: '',
    role: ''
}

export const superAdminSlice = createSlice({
    name: 'superAdmin',
    initialState,
    reducers: {
        superAdminLoginAction: (state, action: PayloadAction<ISuperAdminData>) => {
            const { employeeId, fullName, role } = action.payload;
            state.employeeId = employeeId;
            state.fullName = fullName;
            state.role = role;
        },
        superAdminLogoutAction: (state) => {
            state.employeeId = 0,
                state.fullName = '',
                state.role = ''
        }
    }
})

export const { superAdminLoginAction, superAdminLogoutAction } = superAdminSlice.actions;
export default superAdminSlice.reducer