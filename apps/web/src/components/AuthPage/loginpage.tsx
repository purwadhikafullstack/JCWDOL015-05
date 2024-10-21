import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const LoginPage = () => {
  return (
    <section className="w-full h-screen bg-black">
      {/* <div>
        <div className="w-1/3 h-screen bg-blue-500 rounded-l-[100px] absolute right-0"></div>
        <div className="absolute left-0 w-2 h-screen bg-blue-500"></div>
      </div> */}
      <div className="w-1/3 pt-48 mx-24 space-y-4 text-white">
        <h1 className="text-5xl font-light">Get Started</h1>
        <h1 className="text-3xl font-light">Don't Have Account ? <span className="text-blue-500">Sign Up</span></h1>
        <div className="w-full space-y-2">
          <Label>Email</Label>
          <Input placeholder="Email" className="p-3" />
          <Label>Password</Label>
          <Input placeholder="Password" />
          <Button className="w-1/2 bg-blue-500 rounded-2xl">Sign Up</Button>
        </div>
      </div>
    </section>
  )
}