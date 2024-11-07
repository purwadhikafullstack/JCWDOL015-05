'use client'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { resetPassword } from "@/services/api/customers/customers"
import { ICustomersResetPass } from "@/type/customers"
import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { toast } from "react-toastify"

export default function ResetPassPage() {
  const mutation = useMutation({
    mutationFn: async (data: ICustomersResetPass) =>
      await resetPassword(data),
    onSuccess: (data) => {
      const { result, ok } = data
      console.log(result)
      if (!ok) throw result.msg
      toast.success(result.msg)
    },
    onError: (err) => {
      toast.error(err?.message)
      console.log(err)
    }
  })
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values, action) => {
      mutation.mutate(values)
      action.resetForm()
    }
  })
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="w-1/4 p-5 space-y-4 shadow-none px-7">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="mb-4 text-3xl font-light">Reset Password</h1>
          <div className="shadow-none ">
            <div className="flex flex-col w-full gap-5">
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Input Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />

              <button
                type="submit"
                className="w-full p-1 bg-blue-500 rounded-2xl">
                {mutation.isPending ? 'Sending Link...' : 'Reset Password'}
              </button>
            </div>
          </div>
        </form>

      </Card>
    </section >
  )
}