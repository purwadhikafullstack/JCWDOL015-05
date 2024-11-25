import { IAttendance } from "@/type/employee";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAttendance = {
    attendanceId: 0,
    employeeId: 0,
    clockIn: '',
    clockOut:  '',
}

export const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        attendanceLoginAction: (state, action: PayloadAction<IAttendance>) => {
            const {attendanceId, employeeId, clockIn, clockOut} = action.payload;
            state.attendanceId = attendanceId
            state.employeeId = employeeId
            state.clockIn = clockIn
            state.clockOut = clockOut
        },
        attendanceLogoutAction: (state) => {
            state.attendanceId = 0,
            state.employeeId = 0,
            state.clockIn = '',
            state.clockOut = ''
        }
    }
})

export const {attendanceLoginAction, attendanceLogoutAction} = attendanceSlice.actions
export default attendanceSlice.reducer