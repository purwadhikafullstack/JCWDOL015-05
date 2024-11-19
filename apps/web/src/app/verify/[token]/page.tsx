'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { customerVerify } from "@/services/api/customers/customers";
// import { customerVerify } from "@/services/customers/customers";
import { ICustomerVerify } from "@/type/customers";
import { useMutation } from "@tanstack/react-query";
import { FormikHelpers, useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from 'yup'

const verifySchema = yup.object().shape({
  token: yup.string().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().min(8)
})

export default function Verify() {
  const router = useRouter()
  const { token } = useParams()
  // const handleSubmit = async (data: ICustomerVerify, action: FormikHelpers<ICustomerVerify>) => {
  //   try {
  //     const { result, ok } = await customerVerify(data, token)
  //     if (!ok) throw result.msg
  //     action.resetForm()
  //     router.push('/login')
  //     toast.success(result.msg)
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err as string)
  //   }
  // }
  const submitMutation = useMutation({
    mutationFn: async (data: ICustomerVerify) => await customerVerify(data,token),
    onSuccess: (data,token)=>{
      toast.success("Success Registering Data")
      router.push('/login')
    },
    onError: (err)=>{
      toast.error(err?.message)
    }
  })
  const formik = useFormik({
    initialValues: {
      token: token || "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: verifySchema,
    onSubmit: (values, action) => {
      submitMutation.mutate(values)
      action.resetForm()
      // handleSubmit(values, action)
    }
  })
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="w-1/2 p-5 space-y-5 shadow-none ">
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              name="password"
              type="text"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="space-y-2">
            <Label>Confirmation Password</Label>
            <Input
              name="confirmPassword"
              type="text"
              placeholder="Enter Confirmation Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer">{submitMutation.isPending ? "Loading...": "Submit"}</Button>
        </form>
      </Card>
    </section>
  )
}