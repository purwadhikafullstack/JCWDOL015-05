import React from 'react';
import { FormikProps } from 'formik';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LocationSelect from '@/components/Map/Component/SelectLocation';

interface OutletLocationForm {
  formik: FormikProps<any>;
  provinces: Array<{ province: string }>;
  cities: Array<{ city: string }>;
  subdistricts: Array<{ subdistrict: string }>;
  handleSelectProvinsi: (value: string) => void;
  handleSelectCity: (value: string) => void;
  handleSelectSubdistric: (value: string) => void;
  marker: any;
  sendDataMutation: { isPending: boolean };
}

const OutletLocationForm: React.FC<OutletLocationForm> = ({
  formik,
  provinces,
  cities,
  subdistricts,
  handleSelectProvinsi,
  handleSelectCity,
  handleSelectSubdistric,
  marker,
  sendDataMutation,
}) => {
  return (
    <>
      <Label>Outlet Name</Label>
      <Input
        name="name"
        type="text"
        placeholder="Nama Outlet"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <Label>Provinsi</Label>
      <LocationSelect
        name="provinsi"
        placeholder="Pilih Provinsi"
        onValueChange={handleSelectProvinsi}
        options={provinces.map((province) => ({
          label: province.province,
          value: province.province,
        }))}
      />
      <Label>Kabupaten / Kota</Label>
      <LocationSelect
        name="kota"
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
        name="kecamatan"
        placeholder="Pilih Kecamatan"
        onValueChange={handleSelectSubdistric}
        disabled={formik.values.city === ''}
        options={subdistricts.map((subdistrict) => ({
          label: subdistrict.subdistrict,
          value: subdistrict.subdistrict,
        }))}
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
          className={`px-4 w-full mt-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 ${
            marker != null ? '' : 'hidden'
          }`}
        >
          {sendDataMutation.isPending ? 'loading...' : 'Create oultet'}
        </Button>
      </div>
    </>
  );
};

export default OutletLocationForm;
