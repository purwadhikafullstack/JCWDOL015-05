'use client';

import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function GetPickupPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [driverId, setDriverId] = useState<number | null>(null); // Replace with actual outletAdminId
  const [outletId, setOutletId] = useState<number | null>(null); // Replace with actual outletAdminId
  const [isAvailable, setIsAvailable] = useState<boolean>(true); // Replace with actual outletAdminId

  const driver = useAppSelector((state) => state.driver)

  useEffect(() => {
    if (driver) {
      setDriverId(driver.driverId)
      setOutletId(driver.employee?.outletId)
    }
  }, [driver])

  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

  const fetchOrders = useCallback(async () => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/get-pickup/${outletId}`,
      );
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        if(data?.orderId) {
          toast.success('Message: New Request PickUp')
        }
      }
      console.log('error')
    } catch (error) {
      console.error('Orders fetching error:', error);
    }
  }, [outletId, BASEURL]);



  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleConfirm = async (orderId: number, driverId: number) => {
    try {
      const response = await fetch(`${BASEURL}/api/assignment/confirm-pickup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId, driverId }),
      });

      if (response.ok) {
        setIsAvailable(!isAvailable);
        alert(`Order #${orderId} is now yours, lets go!`);
        fetchOrders();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Failed to confirm Order #${orderId}`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      alert(`An error occurred while confirming Order #${orderId}`);
    }
  };

  return (
    <div className="flex flex-col text-gray-800 items-center p-4">
      {orders.length > 0 && isAvailable === true ? (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="rounded-xl min-w-80 text-center py-2 bg-white border-2 border-blue-400 shadow-md"
            >
              <h1 className="text-lg font-bold mb-4">Order #{order.orderId}</h1>
              <h1 className="text-md font-semibold">Customer Address:</h1>
              <p>{order.customerAddress?.detailAddress}</p>
              <h1 className="text-md font-semibold">Pickup Date:</h1>
              <p>
                {new Date(order.pickupDate).toLocaleDateString()} |{' '}
                {order.pickupTime}
              </p>
              <Button
                className="w-32 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => driverId !== null && handleConfirm(order.orderId, driverId)}
              >
                Confirm
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders available for pick-up.</p>
      )}
    </div>
  );
}
