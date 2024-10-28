'use client'
import { getDetailLocation } from "@/services/api/address/address"
import { ICity, ILocation, IProvince, ISubDis } from "@/type/address";
import { useEffect, useState } from "react"

export default function MapData() {
  const [addresses, setAddresses] = useState<ILocation[]>([]);
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [subdistricts, setSubdistricts] = useState<ISubDis[]>([]);

  const getData = async () => {
    const { result, ok, location } = await getDetailLocation()
    if (!ok) throw result.msg
    // setLocations(province)


  }
  // console.log(provinces.filter((obj, index) => locations.findIndex((location) => location.province === obj) === index))
  useEffect(() => {
    getData()
  }, [])
  return (
    <section>
      <ul>
        {
          subdistricts.map((location) => (
            <li>{location.subdistrict}</li>
          ))
        }
      </ul>
    </section>
  )
}