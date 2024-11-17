'use client'

import { ICustomerOrderData } from "@/type/customers"
import { format } from "date-fns"
import { FC } from "react"

const tableHeader = [
    'No Order',
    'Outlet',
    'Tanggal Order',
    'Status Order',
    'Status Pembayaran',
    'Berat (Kg)',
    'Total Pembayaran'
]
interface OrderListProps {
    options: ICustomerOrderData[]
}
export const OrderListComponent: FC<OrderListProps> = ({
    options
})=>{
    return(
        <table className="table-auto w-full text-sm">
            <thead className="bg-steel-blue text-white h-12">
                <tr>
                    {
                        tableHeader.map((title)=>(
                            <th className="px-4 py-2 text-left whitespace-normal">
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}