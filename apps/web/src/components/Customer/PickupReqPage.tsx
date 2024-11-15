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
import { IAddress, ICustomerAddressData } from "@/type/address"
import { ICustomerAddress } from "@/type/customers"
import { IOutletData } from "@/type/outlet"
import { DialogTitle } from "@radix-ui/react-dialog"
import { format } from "date-fns"
import { FormikHelpers, useFormik } from "formik"
import { CalendarIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const jadwalPickup = [
  '08.00 AM - 10.00 AM',
  '13.00 PM - 15.00 PM',
  '18.00 PM - 20.00 PM'
]

export const CustomerPickupPage = () => {
  const [foundOutlet, setFoundOutlet] = useState<IOutletData[]>([])
  const [customerAddress, setCustomerAddress] = useState([])
  const [date, setDate] = useState<Date>()
  const [address, setAddress] = useState<ICustomerAddressData>()
  const [openCalendar, setOpenCalendar] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const customer = useAppSelector((state) => state.customer)
  const formik = useFormik({
    initialValues: {
      addressId: 0,
      customerId: 0,
    },
    validationSchema: customerDataSchema,
    onSubmit: (values, action) => {
      console.log(values)
      getOutlet(values, action)
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
      pickupRequest(values, action)
      // console.log(values)
    },
    onReset: () => {

    }

  })
  const getOutlet = async (data: IAddress, action: FormikHelpers<IAddress>) => {
    const { result, ok, nearOutlet } = await getNearOutlet(data)
    console.log(nearOutlet)
    setFoundOutlet(nearOutlet)
  }
  const getUserAddress = async (customerId: number) => {
    const { result, ok, address } = await getCustomerAddress(customerId)
    setCustomerAddress(address)
  }
  const pickupRequest = async (data: IOrderPickup, action: FormikHelpers<IOrderPickup>) => {
    try {
      console.log(data)
      const { result, ok } = await createPickupOrder(data)
      if (!ok) throw result.msg
      toast.success(result.msg)
      setOpenDialog(false)
      setAddress(undefined)
      setFoundOutlet([])
      action.resetForm()
    } catch (err) {
      console.log(err)
    }
  }
  const handleSelectAddress = (value: string) => {
    formik.setFieldValue('addressId', value)
    formik.setFieldValue('detailAddress', value)
    formik.setFieldValue('customerId', customer.customerId)

    pickupFormik.setFieldValue('addressId', parseInt(value))
    const selectedDetailAddress = customerAddress.find((data: IOrderPickup) => data.addressId.toString() === value)
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
  useEffect(() => {
    getUserAddress(customer.customerId)
  }, [])
  return (
    <section className="flex flex-col items-center w-full gap-10">
      <Card className="w-1/2 mt-32">
        <form onSubmit={formik.handleSubmit}>
          <Select
            onValueChange={handleSelectAddress}
            name="addressId"
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Alamat" />
            </SelectTrigger>
            <SelectContent>
              {
                customerAddress.map((data: ICustomerAddressData, index) => (
                  <SelectItem key={index} value={data.addressId.toString()} >
                    <p>{`${data.detailAddress}, kec.${data.kecamatan},${data.kota}, ${data.provinsi}`}</p>
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
          <button className="w-full p-3 text-white bg-blue-500 rounded-md" type="submit">Cari</button>
        </form>

      </Card>
      {
      foundOutlet.length > 0 ?
         (
          <Card className="w-1/2">
          {
            foundOutlet.map((data: IOutletData, index) => (
              <div key={index} className="w-full p-5 border rounded-md ">
                <form onSubmit={pickupFormik.handleSubmit} className="flex flex-row items-end justify-between">
                  <div>
                    <p>{data.outletId}</p>
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
          <Card className="w-1/2">
            <p>Outlet Tidak Tersedia</p>
          </Card>
        )
      }
    </section>
  )
}