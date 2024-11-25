'use client';

import { createToken } from '@/lib/server';
import {
  employeeLogin,
  IEmployeeLogin,
} from '@/services/api/employee/employee';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Card } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { workerLoginAction } from '@/redux/slice/workerSlice';
import { driverLoginAction } from '@/redux/slice/driverSlice';
import { outletAdminLoginAction } from '@/redux/slice/outletAdminSlice';
import { superAdminLoginAction } from '@/redux/slice/superAdminSlice';

const EmployeeLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  role: yup.string().required(),
});

export default function EmployeeLoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (data: IEmployeeLogin) => await employeeLogin(data),
    onSuccess: (data) => {
      const { result, ok, worker, driver, outletAdmin, superAdmin } = data;
      if (!ok) throw result.msg;
      createToken(result.user.token);

      toast.success(result.msg);

      if (worker) {
        dispatch(workerLoginAction(result.worker));
        router.push('/employee');
      }
      if (driver) {
        dispatch(driverLoginAction(result.driver));
        router.push('/employee');
      }
      if (outletAdmin) {
        dispatch(outletAdminLoginAction(result.outletAdmin));
        router.push('/workstation');
      }
      if (data.employee.role === 'superAdmin') {
        dispatch(superAdminLoginAction(data.employee));
        router.push('/dashboard');
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.message);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      role: '',
    },
    validationSchema: EmployeeLoginSchema,
    onSubmit: (values, action) => {
      console.log('Submitting form', values);
      mutation.mutate(values);
      action.resetForm();
    },
  });

  const handleSelect = (value: string) => {
    formik.setFieldValue('role', value);
  };

  const listrole = ['outletAdmin', 'worker', 'driver', 'superAdmin'];

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <Card className="w-full max-w-md p-6 space-y-4 shadow-md bg-white">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl font-semibold text-center text-gray-800 sm:text-2xl mb-4">
            Login
          </h1>
          <div className="flex flex-col gap-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 shadow-sm"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 shadow-sm"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Select name="role" onValueChange={handleSelect}>
                <SelectTrigger className="shadow-sm">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  {listrole.map((role, index) => (
                    <SelectItem key={index} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.touched.role && formik.errors.role && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.role}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              {mutation.isPending ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
}
