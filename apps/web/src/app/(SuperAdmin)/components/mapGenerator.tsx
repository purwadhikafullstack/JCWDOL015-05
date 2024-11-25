'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { getDetailLocation, getLngLat } from '@/services/api/address/address';
import maplibregl from 'maplibre-gl';
import { Button } from '@/components/ui/button';
import { ICity, ILocation, IProvince, ISubDis } from '@/type/address';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Card } from '@/components/ui/card';
import { handleCancel } from '@/components/Map/action';
import OutletLocationForm from './outletLocationForm';
import {
  createNewOutlet,
  ICreateOutlet,
} from '../dashboard/lib/outletServices';
import { OutletSchema } from '@/schemaData/schemaData';

export default function MapGenerator() {
  const mapContainerRef = useRef<any | null>(null);
  const mapRef = useRef<any | null>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [marker, setMarker] = useState<maplibregl.Marker | null>(null);
  const [coordinates, setCoordinates] = useState<{
    lng: number | null;
    lat: number | null;
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
    const lng = coordinates?.lng!;
    const lat = coordinates?.lat!;
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

  const formik = useFormik<ICreateOutlet>({
    initialValues: {
      name: '',
      provinsi: '',
      kota: '',
      kecamatan: '',
      longitude: 0,
      latitude: 0,
    },
    validationSchema: OutletSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values, action) => {
      console.log('SUBMITTING VALUES:', values);
      sendDataMutation.mutate(values);
      action.resetForm();
    },
  });
  const sendDataMutation = useMutation({
    mutationFn: async (data: ICreateOutlet) => await createNewOutlet(data),
    onSuccess: (data) => {
      const { newOutlet, ok } = data;
      if (!ok) throw newOutlet.msg;
      toast.success('Outlet Created');
      marker?.remove();
      setMarker(null);
      setSelectedProvince('');
      setSelectedCity('');
      setSelectedSubdistrict('');
    },
    onError: (err) => {
      toast.error('Gagal Mengirim Data');
      console.log(err);
    },
  });

  const handleShowMap = () => {
    if (!showMap) setShowMap(true);
  };
  const locationMutation = useMutation({
    mutationFn: async () => {
      const { result, ok, location } = await getDetailLocation();
      if (!ok) throw result.msg;
      return location;
    },
    onSuccess: (location) => {
      setAddresses(location);
      const filterProvince = Array.from(
        new Set(location.map((item: any) => item.province)),
      ).map((province) => ({ province })) as IProvince[];
      setProvinces(filterProvince);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSelectProvinsi = (value: string) => {
    setSelectedProvince(value);
    formik.setFieldValue('provinsi', value);
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
    formik.setFieldValue('kota', value);
  };
  const handleSelectSubdistric = async (value: string) => {
    setSelectedSubdistrict(value);
    let city = selectedCity.replace(/^(KAB\.|KOTA)\s*/, '');
    let address = `${value},${city}`;
    const { result, ok, resLng, resLat } = await getLngLat(address);
    console.log(result);
    if (!ok) throw result.msg;
    setCoordinates({
      lat: parseFloat(resLat),
      lng: parseFloat(resLng),
    });
    formik.setFieldValue('kecamatan', value);
  };
  useEffect(() => {
    locationMutation.mutate();
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
    <section className="flex flex-col items-center w-full h-auto">
      <Card className="w-full">
        <div className="">
          {
            <div className="mt-5 ">
              <form onSubmit={formik.handleSubmit}>
                <OutletLocationForm
                  formik={formik}
                  provinces={provinces}
                  cities={cities}
                  subdistricts={subdistricts}
                  handleSelectProvinsi={handleSelectProvinsi}
                  handleSelectCity={handleSelectCity}
                  handleSelectSubdistric={handleSelectSubdistric}
                  marker={marker}
                  sendDataMutation={sendDataMutation}
                />
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
                <Button
                  onClick={handleConfirm}
                  className={`w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 ${marker != null ? 'hidden' : ''}`}
                >
                  Confirm
                </Button>
                <Button
                  onClick={() =>
                    handleCancel({
                      formik,
                      marker,
                      setMarker,
                      setShowDialog,
                      setCoordinates,
                    })
                  }
                  className={`w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 ${marker != null ? '' : 'hidden'}`}
                >
                  {marker != null ? 'Delete' : 'Cancel'}
                </Button>
              </div>
            </div>
          )}
          <Button
            className={`px-4 py-2 w-full mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${selectedSubdistrict != '' ? '' : 'hidden'}`}
            onClick={handleShowMap}
          >
            Atur Coordinate
          </Button>
        </div>
      </Card>
      <div
        ref={mapContainerRef}
        className={`w-3/4 h-[300px] border-2 border-black rounded-md shadow-md p-3 ${showMap ? 'flex relative overflow-hidden' : 'hidden'}`}
      />
    </section>
  );
}
