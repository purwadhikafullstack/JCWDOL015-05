'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { FormikHelpers, useFormik } from 'formik';
import { ICustomerAddress } from '@/type/customers';
import {
  createAddress,
  getCity,
  getDetailLocation,
  getLngLat,
  getProvience,
  getSubDistrict,
} from '@/services/api/address/address';
import maplibregl, { LngLat, LngLatBounds } from 'maplibre-gl';
import { MapInitialize } from '@/services/map';
import { Button } from '@/components/ui/button';
import { ICity, ILocation, IProvince, ISubDis } from '@/type/address';
import { Label } from '../ui/label';
import { useAppSelector } from '@/redux/hooks';
import LocationSelect from './Component/SelectLocation';
import { sub } from 'date-fns';
import { mapSchema } from '@/schemaData/schemaData';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Card } from '../ui/card';

export default function Map() {
  const mapContainerRef = useRef<any | null>(null);
  const mapRef = useRef<any | null>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [marker, setMarker] = useState<maplibregl.Marker | null>(null);
  const [coordinates, setCoordinates] = useState<{
    lng: number;
    lat: number;
  } | null>(null);
  const [mapState, setMapState] = useState<{
    lng: number;
    lat: number;
    zoom: number;
  }>({
    lng: coordinates?.lng ? coordinates.lng : 114.30458613942182,
    lat: coordinates?.lat ? coordinates.lat : -8.432867457446378,
    zoom: 13,
  });
  const [showDialog, setShowDialog] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [subdistricts, setSubdistricts] = useState<ISubDis[]>([]);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [addresses, setAddresses] = useState<ILocation[]>([]);
  const MAP_API = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
  const customers = useAppSelector((state) => state.customer);
  
  const initMap = () => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAP_API}`,
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });
    setMap(mapRef.current);
    mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    const mapClick = (e: maplibregl.MapMouseEvent) => {
      const { lng, lat } = e.lngLat;
      const newMarker = new maplibregl.Marker({}).setLngLat([lng, lat]);
      setCoordinates({ lng, lat });
      setShowDialog(true);
    };
    if (marker?._lngLat === undefined) {
      mapRef.current.on('click', mapClick);
    } else {
      mapRef.current.off('click', mapClick);
    }
  };

  const handleConfirm = () => {
    setShowDialog(false);
    const lng = coordinates?.lng;
    const lat = coordinates?.lat;
    formik.setFieldValue('longitude', lng);
    formik.setFieldValue('latitude', lat);
    if (lng !== undefined && lat !== undefined && marker === null) {
      const newMarker = new maplibregl.Marker({ color: 'red' })
        .setLngLat([lng, lat])
        .addTo(map!);
      setMarker(newMarker);
      setShowMap(false);
      console.log('Marker confirmed at: ', coordinates);
    } else {
      console.error('Coordinate already set');
    }
  };
  
  const formik = useFormik({
    initialValues: {
      addressId: 0,
      longitude: 0,
      latitude: 0,
      province: '',
      city: '',
      subdistrict: '',
      detailAddress: '',
      customerId: '',
    },
    validationSchema: mapSchema,
    onSubmit: (values, action) => {
      // handleSubmit(values, action);
      mutation.mutate(values);
      action.resetForm();
      console.log(`values : ${values}`);
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: ICustomerAddress) => await createAddress(data),
    onSuccess: (data) => {
      const { result, ok } = data;
      if (!ok) throw result.msg;
      console.log('clicked');
      marker?.remove()
      setMarker(null)
      setSelectedProvince('')
      setSelectedCity('')
      setSelectedSubdistrict('')
      toast.success(result.msg);
      console.log(result.data);
    },
    onError: (err) => {
      toast.error(err?.message);
      console.log(err);
    },
  });
  // const handleSubmit = async (
  //   data: ICustomerAddress,
  //   action: FormikHelpers<ICustomerAddress>,
  // ) => {

  //   try {
  //     console.log('clicked')
  //   console.log(data)
  //     const { result, ok } = await createAddress(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleCancel = () => {
    formik.setFieldValue('longitude', null);
    formik.setFieldValue('latitude', null);
    if (marker !== null) {
      marker?.remove();
      setMarker(null);
      setShowDialog(false);
      setCoordinates(null);
    }
  };
  const handleShowMap = () => {
    if (!showMap) setShowMap(true);
  };
  const getData = async () => {
    try {
      const { result, ok, location } = await getDetailLocation();
      if (!ok) throw result.msg;
      setAddresses(location);

      const filterProvince = Array.from(
        new Set(location.map((item: any) => item.province)),
      ).map((province) => ({ province })) as IProvince[];
      setProvinces(filterProvince);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSelectProvinsi = (value: string) => {
    setSelectedProvince(value);
    formik.setFieldValue('province', value);
    if (value != '') {
      setSelectedCity('');
      setSelectedSubdistrict('');
    }
  };
  const handleSelectCity = (value: string) => {
    setSelectedCity(value);
    if (value != '') {
      setSelectedSubdistrict('');
    }
    formik.setFieldValue('city', value);
  };
  const handleSelectSubdistric = async (value: string) => {
    console.log(selectedCity, selectedProvince);
    setSelectedSubdistrict(value);
    let city = selectedCity.replace(/^(KAB\.|KOTA)\s*/, '');
    console.log(city);
    let address = `${value},${city}`;
    const { result, ok, resLng, resLat } = await getLngLat(address);
    console.log(result);
    if (!ok) throw result.msg;
    setCoordinates({
      lat: parseFloat(resLat),
      lng: parseFloat(resLng),
    });
    formik.setFieldValue('subdistrict', value);
  };
  useEffect(() => {
    getData();
    if (selectedProvince != '') {
      const filterCity = Array.from(
        new Set(
          addresses
            .filter(
              (item: ILocation) =>
                item.province === selectedProvince.toUpperCase(),
            )
            .map((item: ILocation) => item.city),
        ),
      ).map((city) => ({ city })) as ICity[];
      setCities(filterCity);
    } else {
      setCities([]);
    }

    if (selectedCity != '') {
      const filterSubdistrict = Array.from(
        new Set(
          addresses
            .filter(
              (item: ILocation) => item.city === selectedCity.toUpperCase(),
            )
            .map((item: ILocation) => item.subdistrict),
        ),
      ).map((subdistrict) => ({ subdistrict })) as ISubDis[];
      setSubdistricts(filterSubdistrict);
    } else {
      setSubdistricts([]);
    }
  }, [selectedProvince, selectedCity]);
  useEffect(() => {
    if (!map) initMap();
  }, [map, marker, mapState]);
  useEffect(() => {
    if (mapRef.current && coordinates) {
      mapRef.current.flyTo({
        center: [coordinates.lng, coordinates.lat],
        zoom: 12,
        speed: 1.2,
        curve: 1.42,
        easing: (t: any) => t,
      });
    }
  }, [coordinates, mapState]);
  return (
    <section className="flex flex-col items-center mt-24 w-full h-screen">
      <Card className='w-3/4 p-5'>
      <div className="">
        {
          <div className="mt-5 ">
            <form onSubmit={formik.handleSubmit}>
              <Label>Provinsi</Label>
              <LocationSelect
                name="province"
                placeholder="Pilih Provinsi"
                onValueChange={handleSelectProvinsi}
                options={provinces.map((province) => ({
                  label: province.province,
                  value: province.province,
                }))}
              />
              <Label>Kabupaten / Kota</Label>
              <LocationSelect
                name="city"
                placeholder="Pilih Kabupaten atau Kota"
                onValueChange={handleSelectCity}
                disabled={selectedProvince === ''}
                options={cities.map((city) => ({
                  label: city.city,
                  value: city.city,
                }))}
              />
              <Label>Kecamatan</Label>
              <LocationSelect
                name="subdistrict"
                placeholder="Pilih Kecamatan"
                onValueChange={handleSelectSubdistric}
                disabled={selectedCity === ''}
                options={subdistricts.map((subdistrict) => ({
                  label: subdistrict.subdistrict,
                  value: subdistrict.subdistrict,
                }))}
              />
              <Input
                name="customerId"
                value={formik.values.customerId}
                onChange={formik.handleChange}
                type="hidden"
              />
              <Label>Alamat Lengkap</Label>
              <Input
                name="detailAddress"
                value={formik.values.detailAddress}
                placeholder="alamat lengkap"
                onChange={formik.handleChange}
              />
              <Input
                name="longitude"
                type="hidden"
                value={formik.values.longitude}
                onChange={formik.handleChange}
              />
              <Input
                name="latitude"
                type="hidden"
                value={formik.values.latitude}
                onChange={formik.handleChange}
              />
              <div>
                <button
                  type="submit"
                  className={`px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${marker != null ? '' : 'hidden'}`}
                >
                  {mutation.isPending ? 'loading...' : 'Send Data'}
                </button>
              </div>
            </form>
          </div>
        }
        {showDialog && (
          <div className="fixed z-10 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
            <h3 className="mb-3 text-lg font-semibold">
              {marker !== null
                ? 'Delete Previous Location?'
                : 'Confirm this location?'}
            </h3>
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
        )}
        <button
          className={`px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${selectedSubdistrict != '' ? '' : 'hidden'}`}
          onClick={handleShowMap}
        >
          Atur Coordinate
        </button>
        
      </div>
      </Card>
      <div
          ref={mapContainerRef}
          className={`w-3/4 h-[300px] border-2 border-black rounded-md shadow-md p-3 ${showMap ? 'flex relative overflow-hidden' : 'hidden'}`}
        />
    </section>
  );
}
