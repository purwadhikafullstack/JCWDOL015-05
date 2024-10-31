export type ICustomerLogin = {
  email: string
  password: string
}
export type ICustomerReg = {
  email: string
  fullName: string
  role: string
}
export type ICustomerVerify = {
  token: string | any
  password: string
  confirmPassword: string
}

export type ICustomerAddress = {
  addressId: number,
  longitude: number
  latitude: number
  province: string
  city: string
  subdistrict: string
  detailAddress: string
}