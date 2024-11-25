import { ISetPrimaryAddress } from "@/type/address"
import { ICustomerAddress } from "@/type/customers"


export const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'

export const createAddress = async (data: ICustomerAddress) => {
  const url = `${BASEURL}/api/addresses/`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  
  const result = await res.json()
  console.log(result)
  return { result, ok: res.ok }
}
export const getProvience = async () => {
  const url = `${BASEURL}/api/location/provinces`
  const res = await fetch(url)
  const result = await res.json()
  return { result, ok: res.ok, province: result.data }
}
export const getCity = async (province = '') => {
  const urlProvinsi = `${BASEURL}/api/location/city?=city=${province}`
  const resProvinsi = await fetch(urlProvinsi)
  const result = await resProvinsi.json()
  return { result, ok: resProvinsi.ok, city: result.data }
}
export const getSubDistrict = async (city = '') => {
  const url = `${BASEURL}/api/location/subdistricts?=city=${city}`
  const res = await fetch(url)
  const result = await res.json()
  return { result, ok: res.ok, subdistricts: result.data }
}
export const getDetailLocation = async (
  provinsi = '',
  city = '',
  subdistrict = ''
) => {
  const url = `${BASEURL}/api/location`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true', 
    },
  });
  console.log(res)
  const result = await res.json()
  return { result, ok: res.ok, location: result.data }
}
export const getCustomerAddress = async (customerId: number) => {
  const url = `${BASEURL}/api/addresses/${customerId}`
  const res = await fetch(url,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true', 
    },
  })
  const result = await res.json()
  return { result, ok: res.ok, address: result.data }
}
type IGetLocation = {
  address: string
}
export const getLngLat = async (address: string) => {
  const url = `${BASEURL}/api/location`
  const res = await fetch (url, {
    method : "POST",
    headers : {
      "Content-Type": "application/json",
    },
    body : JSON.stringify({address})
  })
  const result = await res.json()
  return { result , ok: res.ok , resLng : result.lng , resLat : result.lat }
}

export const setPrimaryAddress = async (data: ISetPrimaryAddress) =>{
  const url = `${BASEURL}/api/addresses/primary`
  const res = await fetch(url, {
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}
export const deleteAddress = async(addressId: number) =>{
  const url = `${BASEURL}/api/addresses/${addressId}`
  const res = await fetch(url, {
    method: "DELETE"
  })
  if(!res.ok) throw new Error ('Error Delete Data')
  const result = await res.json()
  return {result, ok: res.ok}
}