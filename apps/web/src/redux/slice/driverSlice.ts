
import {  IDriverData } from "@/type/worker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state structure
const initialState: IDriverData = {
  driverId: 0,
  employeeId: 0,
  employee: {
    email: '',
    fullName: '',
    role: '', 
    avatar: '',
    outletId: 0
  },
  station: '',  
};

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    driverLoginAction: (state, action: PayloadAction<IDriverData>) => {
      const { driverId, employeeId, station, employee } = action.payload;
      state.driverId = driverId;
      state.employeeId = employeeId;
      state.station = station;
      state.employee = { ...employee };
    },
    driverLogoutAction: (state) => {
      state.driverId = 0;
      state.employeeId = 0;
      state.station = '';
      state.employee = { email: '', fullName: '', role: '', avatar: '', outletId: 0 };
    }
  }
});

// Export the actions and the reducer
export const { driverLoginAction, driverLogoutAction } = driverSlice.actions;
export default driverSlice.reducer;
