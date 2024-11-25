'use client'
import { FormikHelpers, useFormik } from "formik"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import * as yup from 'yup'
import { ICustomerLogin } from "@/type/customers"
import { customerLogin, googleLogin } from "@/services/api/customers/customers"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { loginAction } from "@/redux/slice/customerSlice"
import { createToken, getToken } from "@/lib/server"
import { BASEURL } from "@/services/api/address/address"
import Link from "next/link"
import { useEffect, useState } from "react"

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});
const initialValues: ICustomerLogin = {
  email: "",
  password: ""
}

export const LoginPage = () => {
  const [token, setToken] = useState('')

  const router = useRouter()
  const dispatch = useDispatch()
  const mutation = useMutation({
    mutationFn: async (data: ICustomerLogin) => await customerLogin(data),
    onSuccess: (data) => {
      const { result, ok, user } = data;
      // if (!ok) throw result.msg;
      // console.log()
      if(result.user.data.isVerified === false) {
        router.push('/customers/verify-email')
        throw new Error ('Email not verified')
      }
      dispatch(loginAction(data.user))
      createToken(result.user.token)

      toast.success(result.msg)
      router.push('/')
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.message);
    },
  })

  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: initialValues,
    onSubmit: (values, action) => {
      // handleSubmit(values, action)
      mutation.mutate(values)
      action.resetForm()
    }
  })
  const socialLogin = useMutation({
    mutationFn: async() => await googleLogin(),
    onSuccess: (result)=>{
      console.log(result?.result.data)
      createToken(result?.result.tokenData)
      dispatch(loginAction(result?.result.data))
      router.push('/')
      toast.success('Login Google Success')
    },
    onError: (err)=>{
      toast.error(err?.message)
    }
  })
  const handleGoogle = ()=>{
    socialLogin.mutate()
  }
  
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
     
      <Card className="p-5 space-y-4 shadow-none px-7">
      <form onSubmit={formik.handleSubmit}>
          <h1 className="text-5xl font-light">Get Started</h1>
          <h1 className="text-3xl font-light">
            Do not Have Account ? <span className="text-blue-500">
              <Link href='/register'>Sign Up</Link>
            </span>
          </h1>
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
              <button
                type="submit"
                className="w-full p-1 bg-blue-500 rounded-2xl"
              >
                {mutation.isPending ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-row justify-between">
        <Link href={'/customers/reset-password'}>
          <span className="text-blue-500">Forgot your password ?</span>
        </Link>
        <Link href={'/customers/verify-email'}>
          <span className="text-blue-500">Resend Verification Email
          </span>
        </Link>
        </div>
        <Button onClick={handleGoogle} className="w-full">
          Sign In With Google
        </Button>
      </Card>
    </section>
  );
};
