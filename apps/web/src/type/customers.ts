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
  addressId: number
  longitude: number
  latitude: number
  province: string
  city: string
  subdistrict: string
  detailAddress: string
  customerId : string
}
export type ICustomersResetPass = {
  email: string
}
export type ICustomerNewPass = {
  newPassword: string
  confirmNewPassword: string
}
export type IUserEdit = {
  customerId: number,
  avatar? : File | null,
  fullName: string,
}
export type ICustomerOrderData = {
  orderId: string;
  outlet: {
    name: string;
  };
  status: string;
  paymentStatus: string;
  weight: number;
  pricePerKg: number;
  total: number;
  createdAt : Date
};