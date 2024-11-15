'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/redux/hooks';
import { customerOrderData } from '@/services/api/order/order';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
export type ICustomerOrderData = {
  orderId: string;
  outlet: {
    name: string;
  };
  status: string;
  paymentStatus: string;
  weight: number;
  pricePerKg: number;
  total: number;
  createdAt: Date;
};
export default function Profile() {
  const [orderList, setOrderList] = useState<ICustomerOrderData[]>([]);
  const customer = useAppSelector((state) => state.customer);
  // const getData = async () => {
  //     const {result , ok, orderData} = await customerOrderData(customer.customerId)
  //     console.log(result)
  //     setOrderList(orderData)
  // }
  const mutation = useMutation({
    mutationFn: async () => {
      const { result, ok, orderData } = await customerOrderData(
        customer.customerId,
      );
      if (!ok) throw result.msg;
      return orderData;
    },
    onSuccess: (orderData) => {
      setOrderList(orderData);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    // getData()
    mutation.mutate();
  }, []);
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col  justify-center p-3">
        <div className="flex flex-row gap-4">
          <Card className="w-1/4 h-fit p-5 space-y-3">
            <div className="w-20 h-20 rounded-full bg-steel-blue"></div>
            <p>{customer.fullName}</p>
            <p>{customer.email}</p>
            <Button className="w-full">Edit Profile</Button>
          </Card>

          <Card className="w-3/4 h-[60vh] p-5">
            <h1 className="text-2xl">My Orders</h1>
            {mutation.isPending ? (
              <p>is loading ...</p>
            ) : (
              <table className="table-auto w-full text-wrap">
                <thead className="text-left bg-steel-blue text-white rounded-md h-10">
                  <tr>
                    <th>No Order</th>
                    <th>Outlet</th>
                    <th>Tanggal Order</th>
                    <th>Status Order</th>
                    <th>Status Pembayaran</th>
                    <th>Berat</th>
                    <th>Total Pembayaran</th>
                  </tr>
                </thead>
                <tbody className="">
                  {orderList.map((order, index) => (
                    <tr key={index} className="">
                      <td>{order.orderId}</td>
                      <td>{order.outlet.name}</td>
                      <td>{format(order.createdAt, 'yyyy-MM-dd')}</td>
                      <td className="text-wrap">{order.status}</td>
                      <td>{order.paymentStatus}</td>
                      <td>{order.weight}</td>
                      <td>{order.pricePerKg * order.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <p className="my-3">Page 1</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
