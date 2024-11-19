'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { changePassword } from "@/services/api/customers/customers"
import { ICustomerNewPass } from "@/type/customers"
import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { useParams, useRouter } from "next/navigation"
import { toast } from "react-toastify"
import * as yup from 'yup'

const resetPassSchema = yup.object().shape({
  newPassword: yup.string().required().min(8),
  confirmNewPassword: yup.string().required().min(8)
})
export default function ChangePasswordPage() {
  const router = useRouter()
  const { token } = useParams()
  const mutation = useMutation({
    mutationFn: async (data: ICustomerNewPass) => await changePassword(data, token),
    onSuccess: (data) => {
      const { result, ok } = data
      if (!ok) throw result.msg
      toast.success(result.msg)
      router.push('/login')
    },
    onError: (err) => {
      toast.error(err?.message)
    }
  })
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: resetPassSchema,
    onSubmit(values, action) {
      console.log(values)
      mutation.mutate(values)
      action.resetForm()
    }
  })
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="w-1/4 p-5 space-y-4 shadow-none px-7">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="mb-3 text-3xl font-light">Set New Password</h1>
          <div className="shadow-none ">
            <div className="flex flex-col w-full gap-5">
              <Label>New Password</Label>
              <Input
                name="newPassword"
                type="password"
                placeholder="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
              <Label>Password</Label>
              <Input
                name="confirmNewPassword"
                type="password"
                placeholder="Enter Password"
                value={formik.values.confirmNewPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Button
                type="submit"
                className="w-full"
              >
                {mutation.isPending ? 'Loading...' : 'Submit New Password'}
              </Button>
            </div>
          </div>
        </form>

      </Card>
    </section >
  )
}