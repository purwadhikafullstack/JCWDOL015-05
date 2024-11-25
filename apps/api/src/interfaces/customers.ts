export type ICustomerReg = {
  email: string
  fullName: string
  role: string
}
export type ICustomerChangeEmail = {
  email: string
  fullName: string
  role: string
}
export type ICustomerResetPassword = {
  id: number
  email: string
  password: string
  role: string
}