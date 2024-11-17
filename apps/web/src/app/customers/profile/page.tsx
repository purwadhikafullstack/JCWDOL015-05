'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/redux/hooks';
import { customerOrderData } from '@/services/api/order/order';
import RoleProtection from '@/services/Unauthorized';
import { ICustomerOrderData } from '@/type/customers';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { OrderListComponent } from './orderListComponent';
import { ICustomerAddressData, ICustomerAddressProfile } from '@/type/address';
import { getCustomerData } from '../../../services/api/customers/customers';
import { ICustomerData } from '@/redux/slice/customerSlice';
import { toast } from 'react-toastify';
import { getCustomerAddress } from '@/services/api/address/address';
import { CustomerAddressData } from './customerAdressData';

const Profile = () => {
  const [orderList, setOrderList] = useState<ICustomerOrderData[]>([]);
  const [customerData, setCustomerData] = useState<ICustomerData | null>(null)
  const [addresses, setAdresses] = useState<ICustomerAddressProfile[]>([]);
  const customer = useAppSelector((state) => state.customer);
  const userData = useMutation({
    mutationFn: async() => {
      const {result, ok ,data} = await getCustomerData(customer.customerId)
      return data
    },
    onSuccess: (data) =>{
      setCustomerData(data)
    },
    onError: (err) => {
      toast.error(err?.message)
      console.log(err)
    }
  })
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
  })
  const userAddress = useMutation({
    mutationFn: async() => {
      const {result, ok ,address } = await getCustomerAddress(customer.customerId)
      return address
    },
    onSuccess: (address) =>{
      setAdresses(address)
    },
    onError: (err) =>{
      toast.error(err?.message)
    }
  }) 
  useEffect(() => {
    // getData()
    userData.mutate()
    userAddress.mutate()
    mutation.mutate();
  }, []);

  return ( 
    <section className="w-full">
      {
        userData.isPending ? (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
             <p>Loading...</p>
           </div>
        ):
      (
      <div className="flex flex-col  p-3">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Card className="w-3/4 h-fit p-5 space-y-3 flex flex-col items-center">
            <div className="rounded-full w-44 h-44">
              <Image
                src={customerData?.avatar|| '/default-avatar.png'}
                alt="Profile Picture"
                width={176}
                height={176}
                // Make it circular
                className="rounded-full w-44 h-44 object-cover"
              />
            </div>
            <p className="text-2xl text-center font-semibold">
              {customerData?.fullName}
            </p>
            <p className="text-lg text-center">{customerData?.email}</p>

            <Link href={'/customers/profile/edit'} className='w-full'>
              <Button className="hover:bg-steel-blue w-full bg-blue-500">Edit Profile</Button>
            </Link>
          </Card>
          <Card className="w-3/4 h-fit p-5 space-y-3 flex flex-col items-center">
              <h1 className='text-left text-2xl font-semibolds w-full'>Customer Address</h1>
              {userAddress.isPending ? (
                <p>is loading ...</p>
              ):
              (
                <CustomerAddressData options={addresses} />
              )}
          </Card>
          <Card className="w-3/4 h-[60vh] p-5">
            <h1 className="text-2xl">My Orders</h1>
            {mutation.isPending ? (
              <p>is loading ...</p>
            ) : (
              <OrderListComponent options={orderList} />
            )}

            <p className="my-3">Page 1</p>
          </Card>
        </div>
      </div>
       )}
    </section>
  );
};
export default RoleProtection(Profile, ['customer']);
// export default  Profile
// export default RoleProtection(Profile,['customer,driver,outletAdmin,superAdmin,worker'])
