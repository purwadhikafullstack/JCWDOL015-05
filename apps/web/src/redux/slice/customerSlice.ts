import { IUserEdit } from "@/type/customers"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ICustomerData = {
  customerId: number
  email: string
  role: string
  fullName: string
  address: []
  avatar: string
}
const initialState = {
  customerId: 0,
  email: '',
  role: '',
  fullName: '',
  address: [],
  avatar: '',

}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<ICustomerData>) => {
      const { customerId, email, role, fullName, address, avatar } = action.payload
      state.customerId = customerId
      state.email = email
      state.role = role
      state.fullName = fullName
      state.address = address
      state.avatar = avatar
    },
    logoutAction: (state) => {
      state.customerId = 0
      state.email = ''
      state.role = ''
      state.fullName = ''
      state.address = []
      state.avatar = ''
    },
    updateAction:(state, action: PayloadAction<ICustomerData>) =>{
      const {customerId, avatar, fullName}  = action.payload
      state.customerId = customerId
      state.fullName = fullName,
      state.avatar = avatar
    }
  }
})

export const { loginAction, logoutAction , updateAction} = customerSlice.actions
export default customerSlice.reducer