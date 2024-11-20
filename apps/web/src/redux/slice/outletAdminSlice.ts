import { IOutletAdminData } from "@/type/worker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state structure
const initialState: IOutletAdminData = {
  outletAdminId: 0,
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

export const outletAdminSlice = createSlice({
  name: 'outletAdmin',
  initialState,
  reducers: {
    outletAdminLoginAction: (state, action: PayloadAction<IOutletAdminData>) => {
      const { outletAdminId, employeeId, station, employee } = action.payload;
      state.outletAdminId = outletAdminId;
      state.employeeId = employeeId;
      state.station = station;
      state.employee = { ...employee };
    },
    outletAdminLogoutAction: (state) => {
      state.outletAdminId = 0;
      state.employeeId = 0;
      state.station = '';
      state.employee = { email: '', fullName: '', role: '', avatar: '', outletId: 0 };
    }
  }
});

// Export the actions and the reducer
export const { outletAdminLoginAction, outletAdminLogoutAction } = outletAdminSlice.actions;
export default outletAdminSlice.reducer;
