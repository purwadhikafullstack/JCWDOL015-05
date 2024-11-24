'use client';
import * as yup from 'yup';

export const customerDataSchema = yup.object().shape({
  addressId: yup.number().required(),
  customerId: yup.number().required(),
});
export const orderDataSchema = yup.object().shape({
  customerId: yup.number().required(),
  outletId: yup.number().required(),
  addressId: yup.number().required(),
  pickupDate: yup.date().required(),
  pickupTime: yup.string().required(),
});
export const mapSchema = yup.object().shape({
  province: yup.string().required(),
  city: yup.string().required(),
  subdistrict: yup.string().required(),
  detailAddress: yup.string().required(),
  longitude: yup.string().required(),
  latitude: yup.string().required(),
  customerId: yup.string().required(),
});

export const OutletSchema = yup.object().shape({
  name: yup.string().required('Outlet name is required'),
  provinsi: yup.string().required(),
  kota: yup.string().required(),
  kecamatan: yup.string().required(),
  longitude: yup.string().required(),
  latitude: yup.string().required(),
});
