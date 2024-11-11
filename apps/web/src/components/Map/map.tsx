'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import * as yup from 'yup'
import { FormikHelpers, useFormik } from 'formik';
import { ICustomerAddress } from '@/type/customers';
import { createAddress, getCity, getDetailLocation, getLngLat, getProvience, getSubDistrict } from '@/services/api/address/address';
import maplibregl, { LngLat, LngLatBounds } from 'maplibre-gl';
import { MapInitialize } from '@/services/map';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ICity, ILocation, IProvince, ISubDis } from '@/type/address';
import { Label } from '../ui/label';
import { useAppSelector } from '@/redux/hooks';

const mapSchema = yup.object().shape({
  province: yup.string().required(),
  city: yup.string().required(),
  subdistrict: yup.string().required(),
  detailAddress: yup.string().required(),
  longitude: yup.string().required(),
  latitude: yup.string().required(),
  customerId : yup.string().required(),
})

export default function Map() {
  const mapContainerRef = useRef<any | null>(null)
  const mapRef = useRef<any | null>(null)
  const [map, setMap] = useState<maplibregl.Map | null>(null)
  const [marker, setMarker] = useState<maplibregl.Marker | null>(null)
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number } | null>(null)
  const [mapState, setMapState] = useState<{ lng: number; lat: number; zoom: number }>({
    lng: coordinates?.lng ? coordinates.lng : 114.30458613942182,
    lat: coordinates?.lat ? coordinates.lat : -8.432867457446378,
    zoom: 13,
  })
  const [showDialog, setShowDialog] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [subdistricts, setSubdistricts] = useState<ISubDis[]>([]);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [addresses, setAddresses] = useState<ILocation[]>([])
  const MAP_API = process.env.NEXT_PUBLIC_MAPTILER_API_KEY
  const customers = useAppSelector((state)=> state.customer)
  const initMap = () => {
     mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAP_API}`,
      center: [
        mapState.lng,
        mapState.lat 
        ],
      zoom: mapState.zoom
    })
    setMap(mapRef.current)
    mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right')

    const mapClick = (e: maplibregl.MapMouseEvent) => {
      const { lng, lat } = e.lngLat
      const newMarker = new maplibregl.Marker({})
        .setLngLat([lng, lat])
      setCoordinates({ lng, lat })
      setShowDialog(true)
    }

    if (marker?._lngLat === undefined) {
      mapRef.current.on('click', mapClick)
    } else {
      mapRef.current.off('click', mapClick)
    }
   
  }
  const setLngLat = async () => {
    let address = selectedSubdistrict
    console.log(address)
    const {result , ok , resLng , resLat} = await getLngLat(address)
    console.log(result)
    if(!ok) throw result.msg
    setCoordinates({
      lat : parseFloat(resLat),
      lng : parseFloat(resLng),
    })
  }
  // MapInitialize(mapState.lng, mapState.lat, mapContainerRef, mapState.zoo)
  const handleConfirm = () => {
    setShowDialog(false)
    const lng = coordinates?.lng
    const lat = coordinates?.lat
    formik.setFieldValue('longitude', lng)
    formik.setFieldValue('latitude', lat)
    if (lng !== undefined && lat !== undefined && marker === null) {
      const newMarker = new maplibregl.Marker({ color: 'red' })
        .setLngLat([lng, lat])
        .addTo(map!)
      setMarker(newMarker)
      setShowMap(false)
      console.log('Marker confirmed at: ', coordinates);
    } else {
      console.error('Coordinate already set')
    }
  }
  const formik = useFormik({
    initialValues: {
      longitude: 0,
      latitude: 0,
      province: '',
      city: '',
      subdistrict: '',
      detailAddress: '',
      customerId: customers.customerId,
    },
    validationSchema: mapSchema,
    onSubmit: (values, action) => {
      handleSubmit(values, action)
      console.log(`values : ${values}`)
    }
  })
  const handleSubmit = async (data: ICustomerAddress, action: FormikHelpers<ICustomerAddress>) => {
    try {
      console.log('clicked')
      const { result, ok } = await createAddress(data)
      action.resetForm()
      if (!ok) throw result.msg
      console.log(result.data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleCancel = () => {

    formik.setFieldValue('longitude', null)
    formik.setFieldValue('latitude', null)
    console.log(marker)
    if (marker !== null) {
      marker?.remove()
      setMarker(null)
      setShowDialog(false)
      setCoordinates(null)
    }
  }
  const handleShowMap = () => {
    if (!showMap) setShowMap(true)
  }
  const getData = async () => {
    try {
      const { result, ok, location } = await getDetailLocation()
      if (!ok) throw result.msg
      setAddresses(location)

      const filterProvince = Array.from(
        new Set(location.map((item: any) => item.province))
      ).map((province) => ({ province })) as IProvince[]
      setProvinces(filterProvince);
    } catch (err) {
      console.log(err)
    }
  }
  const handleSelectProvinsi = (value: string) => {
    setSelectedProvince(value)
    formik.setFieldValue('province', value)
    if (value != '') {
      setSelectedCity('')
      setSelectedSubdistrict('')
    }
  }
  const handleSelectCity = (value: string) => {
    setSelectedCity(value)
    if (value != '') {
      setSelectedSubdistrict('')
    }
    formik.setFieldValue('city', value)
  }
  const handleSelectSubdistric = (value: string) => {
    setSelectedSubdistrict(value)
    setLngLat()
    formik.setFieldValue('subdistrict', value)
  }

  useEffect(() => {
    getData()

    if (selectedProvince != '') {
      const filterCity = Array.from(
        new Set(addresses
          .filter((item: ILocation) => item.province === selectedProvince.toUpperCase())
          .map((item: ILocation) => item.city)
        )
      ).map((city) => ({ city })) as ICity[]
      setCities(filterCity)
    } else {
      setCities([])
    }

    if (selectedCity != '') {
      const filterSubdistrict = Array.from(
        new Set(addresses
          .filter((item: ILocation) => item.city === selectedCity.toUpperCase())
          .map((item: ILocation) => item.subdistrict)
        )
      ).map((subdistrict) => ({ subdistrict })) as ISubDis[]
      setSubdistricts(filterSubdistrict)
    } else {
      setSubdistricts([])
    }
  }, [selectedProvince, selectedCity])
  useEffect(() => {
    if (!map) initMap()
  }, [map, marker, mapState])
  useEffect(()=>{
    if(mapRef.current && coordinates) {
      mapRef.current.flyTo({
        center: [coordinates.lng, coordinates.lat],
        zoom: 12,
        speed: 1.2, // Adjust speed (higher is slower, lower is faster)
        curve: 1.42, // Controls the curvature of the animation (default is 1.42)
        easing: (t : any) => t, // Linear easing for consistent speed
      })
    }
  },[coordinates,mapState])
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <div className='w-1/2 p-5 border rounded-md'>
        {
          (
            <div className="mt-5 ">
              <form onSubmit={formik.handleSubmit}>
                <Select
                  onValueChange={handleSelectProvinsi}
                  name="province"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((province: IProvince, index) => {
                      return (
                        <SelectItem
                          key={index}
                          value={province.province}
                          onClick={(value) => formik.setFieldValue('province', value)}

                        >
                          {province.province}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <Select
                  disabled={selectedProvince != '' ? false : true}
                  onValueChange={handleSelectCity}
                  name="city"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city: ICity, index) => {
                      return (
                        <SelectItem
                          key={index}
                          value={city.city}
                          onClick={(value) => formik.setFieldValue('city', value)}
                        >
                          {city.city}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <Select
                  name="subdistrict"
                  disabled={selectedCity != '' ? false : true}
                  onValueChange={handleSelectSubdistric}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {subdistricts.map((subdistrict: ISubDis, index) => {
                      return (
                        <SelectItem
                          key={index}
                          value={subdistrict.subdistrict}
                          onClick={(value) => formik.setFieldValue('subdistrict', value)}
                        >
                          {subdistrict.subdistrict}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <Label>Address</Label>
                <Input 
                name = 'customerId'
                value= {formik.values.customerId}
                onChange={formik.handleChange}
                type = 'hidden'
                />
                <Input
                  name='detailAddress'
                  value={formik.values.detailAddress}
                  placeholder='alamat lengkap'
                  onChange={formik.handleChange}
                />
                <Label>Longitude</Label>
                <Input name='longitude' type='hidden' value={formik.values.longitude} onChange={formik.handleChange} />
                <Label>Latitude</Label>
                <Input name='latitude' type='hidden' value={formik.values.latitude} onChange={formik.handleChange} />
                <button
                  type='submit'
                  className='px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600'>
                  Send Data
                </button>
              </form>
            </div>
          )
        }
        {
          showDialog && (
            <div className="fixed z-10 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
              <h3 className="mb-3 text-lg font-semibold">{marker !== null ? 'Delete Previous Location?' : 'Confirm this location?'}</h3>
              <p>Longitude: {coordinates?.lng}</p>
              <p>Latitude: {coordinates?.lat}</p>

              <div className="flex justify-end mt-4 space-x-4">
                <button
                  onClick={handleConfirm}
                  className={`w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 ${marker != null ? 'hidden' : ''}`}
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className={`w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 ${marker != null ? '' : 'hidden'}`}
                >
                  {marker != null ? 'Delete' : 'Cancel'}
                </button>
              </div>
            </div>
          )
        }

        <button className='p-3 text-white bg-green-500 rounded-md' onClick={handleShowMap}>Atur Coordinate</button>
        <div ref={mapContainerRef} className={`w-3/4 h-[400px] border-2 border-black rounded-md shadow-md p-3 ${showMap ? 'flex relative overflow-hidden' : 'hidden'}`} />
      </div>

    </section >
  );
}
