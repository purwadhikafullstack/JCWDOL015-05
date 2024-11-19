'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/redux/hooks"
import { customerDataSchema, orderDataSchema } from "@/schemaData/schemaData"
import { getCustomerAddress } from "@/services/api/address/address"
import { createPickupOrder, getNearOutlet, IOrderPickup } from "@/services/api/customers/pickupOrders"
import { IAddress, ICustomerAddressData, ICustomerAddressProfile } from "@/type/address"
import { ICustomerAddress } from "@/type/customers"
import { IOutletData } from "@/type/outlet"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useMutation } from "@tanstack/react-query"
import { format } from "date-fns"
import { FormikHelpers, useFormik } from "formik"
import { CalendarIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const jadwalPickup = [
  '08.00 AM - 10.00 AM',
  '13.00 PM - 15.00 PM',
  '18.00 PM - 20.00 PM'
]

export const CustomerPickupPage = () => {
  const [foundOutlet, setFoundOutlet] = useState<IOutletData[]>([])
  const [customerAddress, setCustomerAddress] = useState<ICustomerAddressProfile[]>([])
  const [date, setDate] = useState<Date>()
  const [address, setAddress] = useState<ICustomerAddressData>()
  const [openCalendar, setOpenCalendar] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const customer = useAppSelector((state) => state.customer)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      addressId: 0,
      customerId: 0,
    },
    validationSchema: customerDataSchema,
    onSubmit: (values, action) => {
      console.log(values)
      // getOutlet(values, action)
      outletData.mutate(values)
    }
  })
  console.log(customerAddress)
  const pickupFormik = useFormik({
    initialValues: {
      addressId: 0,
      customerId: 0,
      outletId: 0,
      pickupDate: new Date(''),
      pickupTime: '',
    },
    validationSchema: orderDataSchema,
    onSubmit: (values, action) => {
      // pickupRequest(values, action)
      pickupMutation.mutate(values)
      action.resetForm()
    },

  })
  const outletData = useMutation({
    mutationFn: async (data: IAddress) => {
      const {result , ok , nearOutlet} = await getNearOutlet(data)
      return nearOutlet
    },
    onSuccess : (nearOutlet) =>{
      setFoundOutlet(nearOutlet)
    },
    onError : (err) =>{
      toast.error(err?.message)
    }
  })
  const userAddress = useMutation({
    mutationFn: async (customerId: number) => {
      const {result, ok , address } = await getCustomerAddress(customerId)
      return address
    },
    onSuccess: (address)=>{
      setCustomerAddress(address)
    },
    onError: (err) => {
      toast.error(err?.message)
    }
  })
  const pickupMutation = useMutation({
    mutationFn: async(data: IOrderPickup) => {
      const {result , ok } = await createPickupOrder(data)
      return {data, result}
    },
    onSuccess: (data, result)=>{
      toast.success("Sukses Order")
      setOpenDialog(false)
      setAddress(undefined)
      router.push('/customers/profile')
    },
    onError: (err)=>{
      toast.error(err?.message)
    }
  })
  
  const handleSelectAddress = (value: string) => {
    formik.setFieldValue('addressId', value)
    formik.setFieldValue('detailAddress', value)
    formik.setFieldValue('customerId', customer.customerId)

    pickupFormik.setFieldValue('addressId', parseInt(value))
    const selectedDetailAddress = customerAddress.find((data) => data.addressId.toString() === value)
    setAddress(selectedDetailAddress)
    pickupFormik.setFieldValue('customerId', customer.customerId)
  }
  const handleId = (e: any) => {
    pickupFormik.setFieldValue('outletId', parseInt(e.target.value))
  }
  const handleSelectTime = (value: string) => {
    pickupFormik.setFieldValue('pickupTime', value)
  }
  const handleSelectDate = (value: Date | undefined) => {
    setOpenCalendar(false)
    setDate(value)
    pickupFormik.setFieldValue('pickupDate', value)
  }
  const sortCustomerAddress = customerAddress.sort(
    (a, b) => (b.isPrimary ? 1 : 0) - (a.isPrimary ? 1 : 0),
  );
  useEffect(() => {
    
    userAddress.mutate(customer.customerId)
  }, [customer.customerId, userAddress])
  return (
    <section className="flex flex-col items-center w-full h-screen gap-10">
      <Card className="w-3/4 p-5 mt-32">
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <Select
            onValueChange={handleSelectAddress}
            name="addressId"
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Alamat" />
            </SelectTrigger>
            <SelectContent>
              {
                sortCustomerAddress
                .map((data, index) => (
                  <SelectItem key={index} value={data.addressId.toString()} >
                    <p className={`${data.isPrimary === true ? 'font-semibold' : ''}`}>
                      {`${data.detailAddress}, kec.${data.kecamatan},${data.kota}, ${data.provinsi} ${data.isPrimary === true ? "(Alamat Utama)": ""}`} 
                    </p>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[100%] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                // onSelect={(date) => handleSelectDate(date as Date)}
                onSelect={handleSelectDate}
              />
            </PopoverContent>
          </Popover>
          <Select
            onValueChange={handleSelectTime}
            name="pickupTime"
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Waktu Pickup" />
            </SelectTrigger>
            <SelectContent>
              {
                jadwalPickup.map((jadwal, index) => (
                  <SelectItem value={jadwal} key={index}>{jadwal}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <button className="w-full p-3 text-white bg-blue-500 rounded-md" type="submit">{outletData.isPending ? "Loading ...": "Cari"}</button>
        </form>

      </Card>
      {
      foundOutlet.length > 0 ?
         (
          <Card className="w-3/4">
          {
            foundOutlet.map((data: IOutletData, index) => (
              <div key={index} className="w-full p-5 border rounded-md ">
                <form onSubmit={pickupFormik.handleSubmit} className="flex flex-row items-end justify-between">
                  <div>
                    <p>{`Nama Outlet : ${data.name}`}</p>
                    <p>{`Kecamatan : ${data.kecamatan}`}</p>
                    <p>{`Kota : ${data.kota}`}</p>
                    <p>{`Provinsi : ${data.provinsi}`}</p>
                    <p>{`Jarak dari lokasi anda : ${data.jarak}`}</p>
                  </div>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <Button type="button" onClick={handleId} value={data.outletId} >Pilih Outlet</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle hidden></DialogTitle>
                      <DialogHeader>
                        <h1 className="text-2xl font-semibold">Apakah Data anda sudah sesuai ?</h1>
                      </DialogHeader>
                      <div className="flex flex-col gap-3">
                        <Label>Nama Outlet</Label>
                        <p>{data.name}</p>
                        <Label>Alamat Lengkap</Label>
                        <p>{address?.detailAddress}</p>
                        <Label>Tanggal Pickup</Label>
                        {/* <p>{pickupFormik.values.customerId}</p> */}
                        <p>{`${pickupFormik.values.pickupDate}`}</p>
                        <Label>Waktu Pickup</Label>
                        <p>{pickupFormik.values.pickupTime}</p>
                      </div>
                      <DialogFooter>
                        <Button type="submit" onClick={() => pickupFormik.handleSubmit()} className="w-full">Order</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </form>
              </div>
            ))
          }
        </Card>
        )
      :
         (
          <Card className="w-3/4 rounded-md text-center">
            <p>Outlet Tidak Tersedia</p>
          </Card>
        )
      }
    </section>
  )
}