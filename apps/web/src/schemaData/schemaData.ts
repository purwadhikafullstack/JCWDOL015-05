'use client'
import * as yup from 'yup'

export const customerDataSchema = yup.object().shape({
  addressId: yup.number().required(),
  customerId: yup.number().required()
})
export const orderDataSchema = yup.object().shape({
  customerId: yup.number().required(),
  outletId: yup.number().required(),
  addressId: yup.number().required(),
  pickupDate: yup.date().required(),
  pickupTime: yup.string().required(),
})