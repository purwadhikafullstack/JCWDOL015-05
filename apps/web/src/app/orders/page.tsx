'use client';

import { Button } from '@/components/ui/button';
import { getDataByOutlet } from '@/services/api/outlet/outlet';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export type IOrderData = {
  orderId: number;
  customer: {
    fullName: string;
  };
  outlet: {
    outletId: number;
    name: string;
  };
  driver: {
    driverId: number;
    name: string;
  };
  worker: {
    workerId: number;
  };
  weight: number;
  status: string;
  pickupDate: Date;
  pickupTime: string;
  paymentStatus: string;
};
export default function OrderList() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { result, ok, data } = await getDataByOutlet(2);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <h1>Order List</h1>
      <table className="w-full overflow-y-hidden">
        <thead>
          <tr className="text-left">
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Status Order</th>
            <th>Tanggal Pickup</th>
            <th>Waktu Pickup</th>
            <th>Weight</th>
            <th>Status Pembayaran</th>
            <th>Order Date</th>
            <th>Outlet</th>
            <th>Outlet Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((order: IOrderData, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.customer.fullName}</td>
                <td>{order.status}</td>
                <td>{format(order.pickupDate, 'yyyy-MM-dd')}</td>
                <td>{order.pickupTime}</td>
                <td>{order.weight ? order.weight : 0}</td>
                <td>{order.paymentStatus}

                </td>
                {/* <td>{order.createdAt}</td> */}
                <td>{order.outlet.name}</td>
                {/* <td>{`${order.outletAdmin}`}</td> */}
                <td>
                  <Button>Confirm</Button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </section>
  );
}
