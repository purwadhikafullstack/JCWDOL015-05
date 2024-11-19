export type ILocation = {
  province: string
  provinceId: number
  city: string
  cityId: number
  subdistrict: string
  subDistrictId: number
}
export type IProvince = {
  provinceId: number
  province: string
}
export type ICity = {
  cityId: number
  city: string
}
export type ISubDis = {
  subdistrict: string
}
export type ICustomerAddressData = {
  addressId: number
  longitude: number
  latitude: number
  provinsi: string
  kota: string
  kecamatan: string
  detailAddress: string
  isPrimary: boolean
}
export type ICustomerAddressProfile = {
  addressId: number
  customerId: number
  longitude: number
  latitude: number
  provinsi: string
  kota: string
  kecamatan: string
  detailAddress: string
  isPrimary: boolean
}

export type ISetPrimaryAddress = {
  addressId : number
  customerId: number
}
export type IAddress = {
  addressId: number
  customerId: number
}