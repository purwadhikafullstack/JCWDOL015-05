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
      const { result, ok, employee, worker, driver, outletAdmin } = data;
      if (!ok) throw result.msg;
      createToken(result.user.token);
      console.log(`worker: ${worker}`);
      console.log(`outletAdmin : ${outletAdmin}`);
      // console.log(JSON.stringify(outletadmin.employee, null, 2));

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
  const listrole = ['outletAdmin', 'worker', 'driver'];
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      {/* <div>
        <div className="w-1/3 h-screen bg-blue-500 rounded-l-[100px] absolute right-0"></div>
        <div className="absolute left-0 w-2 h-screen bg-blue-500"></div>
      </div> */}
      <Card className="w-1/4 p-5 space-y-4 shadow-none px-7">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-5xl font-light">WashNow</h1>
          {/* <h1 className="text-3xl font-light">Don't Have Account ? <span className="text-blue-500">Sign Up</span></h1> */}
          <div className="shadow-none ">
            <div className="flex flex-col w-full gap-5">
              <Label>Email</Label>
              <Input
                name="email"
                type="text"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Label>Role</Label>
              <Select name="role" onValueChange={handleSelect}>
                <SelectTrigger>
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
              <button
                type="submit"
                className="w-full p-1 bg-blue-500 rounded-2xl"
              >
                {mutation.isPending ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}
