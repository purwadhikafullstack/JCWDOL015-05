'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppSelector } from '@/redux/hooks';
import {
  editProfile,
  getCustomerData,
} from '@/services/api/customers/customers';
import RoleProtection from '@/services/Unauthorized';
import { IUserEdit } from '@/type/customers';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const EditProfileSchema = yup.object().shape({
  customerId: yup.string().required(),
  fullName: yup.string().required('Full name is required'),
  avatar : yup.string().nullable()
});


const EditProfile = () => {
  const customer = useAppSelector((state) => state.customer);

  const [data, setData] = useState<IUserEdit>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: IUserEdit) => await editProfile(data),
    onSuccess: (data) => {
      toast.success(data.result);
      router.push('/customers/profile');
    },
    onError: (err) => {
      toast.error(err?.message);
      console.error(err);
    },
  });

  const formik = useFormik({
    initialValues: {
      avatar: null,
      customerId : customer.customerId,
      fullName: '',
    },
    validationSchema: EditProfileSchema,
    onSubmit: (values, action) => {
      console.log('clicked')
      console.log(values)
      mutation.mutate(values);
      action.resetForm();
    },
  });
  
  useEffect(() => {
    const getData = async () => {
      const { result, ok, data } = await getCustomerData(customer.customerId);
      if (!ok) throw result.msg;
      setData(data);
      setPreviewUrl(data.avatar || null);
      // Populate specific fields without overriding Formik values
      formik.setFieldValue('fullName', data.fullName);
    };
    if (customer.customerId) getData()
  }, [customer.customerId, formik]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue('avatar', file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url); // Set previewUrl to the newly selected file
    }
  };

  return (
    <section className="w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <Card className="w-1/2 p-3 space-y-3">
          <div>
            <h1 className="text-lg">Personal Data</h1>
            <p className="text-gray-400">Edit profile</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              className="rounded-full w-44 h-44  overflow-hidden cursor-pointer"
              onClick={() => imgRef.current?.click()}
            >
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="preview"
                  width={176} 
                  height={176} 
                  className="rounded-full w-44 h-44 object-cover"
                  />
              ) : (
                <div className="w-44 h-44 bg-gray-200 rounded-full flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
            </div>
            <input
              type="file"
              name='avatar'
              ref={imgRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <span className="underline-offset-4 underline text-sm">
              Change Avatar Picture
            </span>
          </div>
          <Label>Role</Label>
          <p className="text-gray-400 text-sm">Customer</p>
          <form onSubmit={formik.handleSubmit} className="space-y-3">
          <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formik.values.customerId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label>Full Name</Label>
            <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fullName && formik.touched.fullName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.fullName}
              </div>
            ) : null}
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Save Changes
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RoleProtection(EditProfile, ['customer']);
