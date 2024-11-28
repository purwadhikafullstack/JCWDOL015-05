'use client';

import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function OnPickupPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [driverId, setDriverId] = useState<number | null>(null);
  const [outletId, setOutletId] = useState<number | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const driver = useAppSelector((state) => state.driver);

  useEffect(() => {
    if (driver) {
      setDriverId(driver.driverId);
      setOutletId(driver.employee?.outletId);
    }
  }, [driver]);

  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

  const fetchOrders = useCallback(async () => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/on-the-way/${driverId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true', 
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Orders fetching error:', error);
    }
  }, [driverId, BASEURL]);

  const fetchDriverAvailability = useCallback(async () => {
    try {
      if (!driverId) return;
      const response = await fetch(
        `${BASEURL}/api/assignment/driver-availability/${driverId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true', 
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setIsAvailable(data.isAvailable);
      }
    } catch (error) {
      console.error('Driver availability fetching error:', error);
    }
  }, [driverId, BASEURL]);
  useEffect(() => {
    fetchOrders();
    fetchDriverAvailability();
  }, [fetchOrders, fetchDriverAvailability]);

  const handleReceive = async (orderId: number) => {
    try {
      const response = await fetch(`${BASEURL}/api/assignment/receive-item`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }),
      });

      if (response.ok) {
        toast.success(
          `You have pickup items from order #${orderId}, lets go back to outlet!`,
        );
        fetchOrders();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error(`Failed to pickup Order #${orderId}`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      toast.error(`An error occurred while pickuping Order #${orderId}`);
    }
  };

  const handleCompletePickup = async (orderId: number, driverId: number) => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/complete-pickup`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId, driverId }),
        },
      );

      if (response.ok) {
        toast.success(`Items sent to outlet successfuly`);
        fetchOrders();
        fetchDriverAvailability();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error(`Failed complete pickup #${orderId}`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      toast.error(
        `An error occurred while completing pickup order #${orderId}`,
      );
    }
  };

  const handleCompleteDelivery = async (driverId: number, orderId: number) => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/complete-delivery`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ driverId, orderId }),
        },
      );

      if (response.ok) {
        toast.success(`Items sent to customer successfuly`);
        fetchOrders();
        fetchDriverAvailability();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error(`Failed complete delivery`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      toast.error(`An error occurred while completing delivery`);
    }
  };

  return (
    <div className="flex flex-col text-gray-800 items-center p-4">
      {orders.length > 0 && isAvailable === false ? (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="rounded-xl min-w-80 text-center py-2 bg-white border-2 border-blue-400 shadow-md"
            >
              <h1 className="text-lg font-bold mb-4">Order #{order.orderId}</h1>
              <h1 className="text-md font-semibold">Customer Address:</h1>
              <p>{order.customerAddress?.detailAddress}</p>
              {order.status === 'menungguPenjemputanDriver' && (
                <Button
                  className="w-32 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => handleReceive(order.orderId)}
                >
                  Item Received
                </Button>
              )}
              {order.status === 'laundryMenujuOutlet' && (
                <Button
                  className="w-32 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() =>
                    driverId !== null &&
                    handleCompletePickup(order.orderId, driverId)
                  }
                >
                  Complete Pickup
                </Button>
              )}
              {order.status === 'sedangDikirim' && (
                <Button
                  className="w-32 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() =>
                    driverId !== null &&
                    handleCompleteDelivery(driverId, order.orderId)
                  }
                >
                  Complete Delivery
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No Order is Assigned.</p>
      )}
    </div>
  );
}
