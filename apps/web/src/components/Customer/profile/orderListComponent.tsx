'use client'

import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/redux/hooks"
import { snapPayment } from "@/services/api/order/order"
import { ICustomerOrderData, ICustomerPayment } from "@/type/customers"
import { useMutation } from "@tanstack/react-query"
import { format } from "date-fns"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { FC } from "react"

const tableHeader = [
    'No Order',
    'Outlet',
    'Tanggal Order',
    'Status Order',
    'Status Pembayaran',
    'Berat (Kg)',
    'Total Pembayaran',
    'Actions'
]
interface OrderListProps {
    options: ICustomerOrderData[]
}

export const OrderListComponent: FC<OrderListProps> = ({
    options
})=>{
    const customer = useAppSelector((state) => state.customer)
    const router = useRouter()
    const paymentMutation = useMutation({
        mutationFn: async (data: ICustomerPayment) => {
            const {result , ok} = await snapPayment(data)
            return result 
        },
        onSuccess: (result)=>{
            console.log(result)
            router.push(`${result.data.redirect_url}`)
        },
        onError: (err)=>{
            console.log(err)
        }
    })
    const handlePayment = (order: ICustomerOrderData) => {
        formik.setValues({
            orderId: +order.orderId,
            customerId: customer.customerId,
            weight: order.weight,
            price: order.pricePerKg,
        })
        formik.handleSubmit()
    }
    const formik = useFormik({
        initialValues: {
            orderId: 0,
            customerId: customer.customerId,
            weight: 0,
            price: 0
        },
        onSubmit(values,action){
            paymentMutation.mutate(values)
            console.log(values)
        }
    })
    return(
        <table className="table-auto w-full text-sm">
            <thead className="bg-steel-blue text-white h-12">
                <tr>
                    {
                        tableHeader.map((title)=>(
                            <th key={title} className="px-4 py-2 text-left whitespace-normal">
                                {title}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    options.map((order, index)=>(
                        <tr key={index} className="hover:bg-gray-100">
                        <td className="px-4 py-2 whitespace-normal">
                            {order.orderId}
                        </td>
                        <td className="px-4 py-2 whitespace-normal">
                            {order.outlet.name}
                        </td>
                        <td className="px-4 py-2 whitespace-normal">
                            {format(order.createdAt, 'yyyy-MM-dd')}
                        </td>
                        <td className="px-4 py-2 whitespace-normal">
                            {order.status}
                        </td>
                        <td className="px-4 py-2 whitespace-normal">
                            {order.paymentStatus}
                        </td>
                        <td className="px-4 py-2 text-right whitespace-normal">
                            {order.weight}
                        </td>
                        <td className="px-4 py-2 text-right whitespace-normal">
                            {(order.pricePerKg * order.weight).toLocaleString(
                            'id-ID',
                            { style: 'currency', currency: 'IDR' },
                            )}
                        </td>
                        <td className="text-center">
                            {
                        order.status === "menungguPembayaran" ? 
                            <Button
                            onClick={() => handlePayment(order)}
                            className="bg-blue-500">Bayar</Button>
                            : ""
                    }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}