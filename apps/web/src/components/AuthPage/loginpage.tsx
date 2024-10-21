import { useFormik } from "formik"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const LoginPage = () => {
  const initialValues = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values, action) => {
      
    }
  })
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      {/* <div>
        <div className="w-1/3 h-screen bg-blue-500 rounded-l-[100px] absolute right-0"></div>
        <div className="absolute left-0 w-2 h-screen bg-blue-500"></div>
      </div> */}
      <Card className="p-5 space-y-4 shadow-none px-7">
        <h1 className="text-5xl font-light">Get Started</h1>
        <h1 className="text-3xl font-light">Don't Have Account ? <span className="text-blue-500">Sign Up</span></h1>
        <div className="shadow-none ">
          <div className="flex flex-col w-full gap-5">
            <Label>Email</Label>
            <Input placeholder="Email" className="p-3" />
            <Label>Password</Label>
            <Input placeholder="Password" />
            <Button className="w-1/2 bg-blue-500 rounded-2xl">Sign Up</Button>
          </div>
        </div>
      </Card>
    </section >
  )
}