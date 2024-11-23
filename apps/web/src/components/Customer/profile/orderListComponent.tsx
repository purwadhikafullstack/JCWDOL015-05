'use client';

import { Button } from '@/components/ui/button';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppSelector } from '@/redux/hooks';
import { snapPayment } from '@/services/api/order/order';
import { ICustomerOrderData, ICustomerPayment } from '@/type/customers';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { ArrowUpDownIcon, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { toast } from 'react-toastify';

const tableHeader = [
  {title :'No'},
  {title :'No Order'},
  {title :'Outlet'},
  {title :'Tanggal Order'},
  {title :'Status Order'},
  {title :'Status Pembayaran'},
  {title :'Berat (Kg)'},
  {title :'Total Pembayaran'},
  {title :'Actions'},
];
interface OrderListProps {
  options: ICustomerOrderData[];
  currentPage: number
}

export const OrderListComponent: FC<OrderListProps> = ({ options, currentPage }) => {
  const customer = useAppSelector((state) => state.customer);
  const router = useRouter();
  const pageSize = 5
  const paymentMutation = useMutation({
    mutationFn: async (data: ICustomerPayment) => {
      const { result, ok } = await snapPayment(data);
      return result;
    },
    onSuccess: (result) => {
      console.log(result.data);
      router.push(`${result.data.redirect_url}`);
    },
    onError: (err) => {
      console.log(err);
      toast.error(`Pembayaran Gagal Mohon Coba Lagi`);
    },
  });
  const handlePayment = (order: ICustomerOrderData) => {
    formik.setValues({
      orderId: +order.orderId,
      customerId: customer.customerId,
      weight: order.weight,
      price: order.pricePerKg,
    });
    formik.handleSubmit();
  };
  const formik = useFormik({
    initialValues: {
      orderId: 0,
      customerId: customer.customerId,
      weight: 0,
      price: 0,
    },
    onSubmit(values, action) {
      console.log(values);
      paymentMutation.mutate(values);
    },
  });
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeader.map((header)=> (
              <TableHead className="px-4 py-2 text-left whitespace-normal" key={header.title}>
                {header.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {options.map((order,index)=> (
            <TableRow key={index} >
            <TableCell>{(currentPage - 1) * pageSize + index + 1}</TableCell>
            <TableCell className="px-4 py-2 whitespace-normal">{order.orderId}</TableCell>
              <TableCell className="px-4 py-2 whitespace-normal">
                {order.outlet.name}
              </TableCell>
              <TableCell className="px-2 py-2 whitespace-normal">
                {format(order.createdAt, 'yyyy-MM-dd')}
              </TableCell>
              <TableCell className="px-0 py-2 whitespace-normal">{order.status}</TableCell>
              <TableCell className="px-4 py-2 whitespace-normal">
                {order.paymentStatus}
              </TableCell>
              <TableCell className="px-4 py-2 text-right whitespace-normal">
                {order.weight}
              </TableCell>
              <TableCell className="px-4 py-2 text-right whitespace-normal">
                {(order.pricePerKg * order.weight).toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </TableCell>
              <TableCell className="text-center">
                {order.status === 'menungguPembayaran' ? (
                  <Button
                    onClick={() => handlePayment(order)}
                    className="bg-blue-500"
                  >
                    Bayar
                  </Button>
                ) : (
                  ''
                )}
              </TableCell>
          </TableRow>
          ))}
          
        </TableBody>
      </Table>

      
    </div>
  );
};
