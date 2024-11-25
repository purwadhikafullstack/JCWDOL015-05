'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { deleteToken } from '@/lib/server';
import { useAppSelector } from '@/redux/hooks';
import { logoutAction, updateAction } from '@/redux/slice/customerSlice';
import {
  changeEmail,
  editProfile,
  getCustomerData,
} from '@/services/api/customers/customers';
import RoleProtection from '@/services/Unauthorized';
import {
  ICustomerEditEmail,
  ISendEmailVerification,
  IUserEdit,
} from '@/type/customers';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const EditProfileSchema = yup.object().shape({
  customerId: yup.string().required(),
  fullName: yup.string().required('Full name is required'),
  avatar: yup.string().nullable(),
});

const EditProfile = () => {
  const customer = useAppSelector((state) => state.customer);
  const [data, setData] = useState<IUserEdit>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: IUserEdit) => await editProfile(data),
    onSuccess: (data) => {
      dispatch(updateAction(data.result.data));
      // console.log(data.result)
      toast.success(data.result.message);
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
      customerId: customer.customerId,
      fullName: '',
    },
    validationSchema: EditProfileSchema,
    onSubmit: (values, action) => {
      mutation.mutate(values);
    },
  });
  const changeEmailFormik = useFormik({
    initialValues: {
      email: '',
      newEmail: '',
    },
    onSubmit: (values, action) => {
      changeEmailMutation.mutate(values);
    },
  });
  const changeEmailMutation = useMutation({
    mutationFn: async (data: ICustomerEditEmail) => await changeEmail(data),
    onSuccess: (data) => {
      toast.success(data.result.message);
      router.push('/login');
      deleteToken();
      dispatch(logoutAction());
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });
  const getData = async () => {
    const { result, ok, data } = await getCustomerData(customer.customerId);
    if (!ok) throw result.msg;
    setData(data);
    setPreviewUrl(data.avatar || null);
    formik.setFieldValue('fullName', data.fullName);
    changeEmailFormik.setFieldValue('email', data.email);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue('avatar', file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url); // Set previewUrl to the newly selected file
    }
  };

  return (
    <section className="w-full h-fit max-h-fit ">
      <div className="flex flex-col justify-center items-center space-y-3">
        <Card className="lg:w-1/2 sm:w-full p-3 space-y-3">
          <div>
            <h1 className="text-lg">Personal Data</h1>
            <p className="text-gray-400 text-sm">Edit profile</p>
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
              name="avatar"
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
              type="hidden"
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

        <Card className="w-1/2 p-3 ">
          <div>
            <h1 className="text-lg">Change Email</h1>
            <p className="text-gray-400 text-sm">
              Change Email Need Re Verification
            </p>
          </div>
          <form onSubmit={changeEmailFormik.handleSubmit}>
            <Label>Current Email</Label>
            <Input
              name="email"
              type="text"
              value={changeEmailFormik.values.email}
              onBlur={changeEmailFormik.handleBlur}
            />
            <Label>New Email</Label>
            <Input
              name="newEmail"
              type="text"
              value={changeEmailFormik.values.newEmail}
              onChange={changeEmailFormik.handleChange}
              onBlur={changeEmailFormik.handleBlur}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              {changeEmailMutation.isPending ? 'Loading...' : 'Change Email'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RoleProtection(EditProfile, ['customer']);
