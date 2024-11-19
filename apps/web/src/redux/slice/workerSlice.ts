import { IWorkerData } from "@/type/worker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state structure
const initialState: IWorkerData = {
  workerId: 0,
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

export const workerSlice = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    workerLoginAction: (state, action: PayloadAction<IWorkerData>) => {
      const { workerId, employeeId, station, employee } = action.payload;
      state.workerId = workerId;
      state.employeeId = employeeId;
      state.station = station;
      state.employee = { ...employee };

    },
    workerLogoutAction: (state) => {
      state.workerId = 0;
      state.employeeId = 0;
      state.station = '';
      state.employee = { email: '', fullName: '', role: '', avatar: '', outletId: 0 };
    }
  }
});

// Export the actions and the reducer
export const { workerLoginAction, workerLogoutAction } = workerSlice.actions;
export default workerSlice.reducer;
