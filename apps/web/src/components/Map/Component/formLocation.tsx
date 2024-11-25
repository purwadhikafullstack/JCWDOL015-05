import React from 'react';
import { FormikProps } from 'formik';
import { Label } from '@/components/ui/label';
import LocationSelect from './SelectLocation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LocationFormProps {
  formik: FormikProps<any>;
  provinces: Array<{ province: string }>;
  cities: Array<{ city: string }>;
  subdistricts: Array<{ subdistrict: string }>;
  customers: { customerId: number };
  handleSelectProvinsi: (value: string) => void;
  handleSelectCity: (value: string) => void;
  handleSelectSubdistric: (value: string) => void;
  marker: any;
  sendDataMutation: { isPending: boolean };
}

const LocationForm: React.FC<LocationFormProps> = ({
  formik,
  provinces,
  cities,
  subdistricts,
  customers,
  handleSelectProvinsi,
  handleSelectCity,
  handleSelectSubdistric,
  marker,
  sendDataMutation,
}) => (
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
      disabled={formik.values.province === ''}
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
      disabled={formik.values.city === ''}
      options={subdistricts.map((subdistrict) => ({
        label: subdistrict.subdistrict,
        value: subdistrict.subdistrict,
      }))}
    />
    <Input
      name="customerId"
      value={customers.customerId}
      defaultValue={customers.customerId}
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
      <Button
        type="submit"
        className={`px-4 w-full mt-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
          marker != null ? '' : 'hidden'
        }`}
      >
        {sendDataMutation.isPending ? 'loading...' : 'Send Data'}
      </Button>
    </div>
  </form>
);

export default LocationForm;
