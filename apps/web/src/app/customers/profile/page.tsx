'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/redux/hooks';
import { customerOrderData } from '@/services/api/order/order';
import RoleProtection from '@/services/Unauthorized';
import { ICustomerOrderData } from '@/type/customers';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [orderList, setOrderList] = useState<ICustomerOrderData[]>([]);
  const customer = useAppSelector((state) => state.customer);
  const mutation = useMutation({
    mutationFn: async () => {
      const { result, ok, orderData } = await customerOrderData(
        customer.customerId,
      );
      if (!ok) throw result.msg;
      console.log(orderData);
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
    <section className="w-full ">
      <div className="flex flex-col  p-3">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Card className="w-3/4 h-fit p-5 space-y-3 flex flex-col items-center">
            {/* <div className="w-44 h-44 rounded-full bg-steel-blue"></div> */}
            <div className="rounded-full w-44 h-44">
              <Image
                src={customer.avatar || '/default-avatar.png'}
                alt="Profile Picture"
                width={176}
                height={176}
                // Make it circular
                className="rounded-full w-44 h-44 object-cover"
              />
            </div>
            <p className="text-2xl text-center font-semibold">
              {customer.fullName}
            </p>
            <p className="text-lg text-center">{customer.email}</p>

            <Link href={'/customers/profile/edit'} className='w-full'>
              <Button className="hover:bg-steel-blue w-full bg-blue-500">Edit Profile</Button>
            </Link>
          </Card>

          <Card className="w-3/4 h-[60vh] p-5">
            <h1 className="text-2xl">My Orders</h1>
            {mutation.isPending ? (
              <p>is loading ...</p>
            ) : (
              <table className="table-auto w-full text-sm">
                <thead className="bg-steel-blue text-white h-12">
                  <tr>
                    <th className="px-4 py-2 text-left whitespace-normal rounded-tl-md">
                      No Order
                    </th>
                    <th className="px-4 py-2 text-left whitespace-normal">
                      Outlet
                    </th>
                    <th className="px-4 py-2 text-left whitespace-normal">
                      Tanggal Order
                    </th>
                    <th className="px-4 py-2 text-left whitespace-normal">
                      Status Order
                    </th>
                    <th className="px-4 py-2 text-left whitespace-normal">
                      Status Pembayaran
                    </th>
                    <th className="px-4 py-2 text-right whitespace-normal">
                      Berat (kg)
                    </th>
                    <th className="px-4 py-2 text-right whitespace-normal rounded-tr-md">
                      Total Pembayaran
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderList.map((order, index) => (
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
};
export default RoleProtection(Profile, ['customer']);
// export default  Profile
// export default RoleProtection(Profile,['customer,driver,outletAdmin,superAdmin,worker'])
