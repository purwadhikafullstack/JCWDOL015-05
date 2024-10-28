'use client'
import { ICustomerReg } from "@/type/customers"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import * as yup from 'yup'
import { useRouter } from "next/navigation"
import { FormikHelpers, useFormik } from "formik"
import { customerReg } from "@/services/api/customers/customers"
import { toast } from "react-toastify"
const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  fullName: yup.string().required(),
})
const initialValues: ICustomerReg = {
  email: "",
  fullName: "",
  role: "customer"
}
export const RegisterPage = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      handleRegister(values, action)
    }
  })
  const handleRegister = async (data: ICustomerReg, action: FormikHelpers<ICustomerReg>) => {
    try {
      const { result, ok } = await customerReg(data)
      router.push('/register/success')
      if (!ok) throw result.msg
      action.resetForm()
      toast.success(result.msg)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="p-5 space-y-4 shadow-none px-7">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-4xl font-light">Register Your Account</h1>
          <div className="shadow-none ">
            <div className="flex flex-col w-full gap-5">
              <Label>Email</Label>
              <Input
                name="email"
                type="text"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
              <Label>Fullname</Label>
              <Input
                name="fullName"
                type="text"
                placeholder="Fullname"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="submit" className="w-full p-1 bg-blue-500 rounded-2xl">Register</button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  )
}