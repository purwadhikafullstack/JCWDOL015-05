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
}

export type IAddress = {
  addressId: number
  customerId: number
}