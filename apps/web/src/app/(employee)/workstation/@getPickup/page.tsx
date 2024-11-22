'use client';

import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function GetPickupPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [driverId, setDriverId] = useState<number | null>(null);
  const [outletId, setOutletId] = useState<number | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

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
      if (!outletId) return; // Skip if outletId is not set
      const response = await fetch(
        `${BASEURL}/api/assignment/get-pickup/${outletId}`,
      );
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        if (data.length > 0) {
          toast.success('Message: New Request PickUp');
        }
      }
    } catch (error) {
      console.error('Orders fetching error:', error);
    }
  }, [outletId, BASEURL]);

  const fetchDriverAvailability = useCallback(async () => {
    try {
      if (!driverId) return; // Skip if driverId is not set
      const response = await fetch(
        `${BASEURL}/api/assignment/driver-availability/${driverId}`,
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
    const fetchData = async () => {
      if (driverId === null || outletId === null) return;
      setLoading(true); // Start loading
      await Promise.all([fetchOrders(), fetchDriverAvailability()]);
      setLoading(false); // Stop loading
    };

    fetchData();
  }, [fetchOrders, fetchDriverAvailability, driverId, outletId]);

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
        setIsAvailable(false); // Assume driver is now unavailable
        fetchOrders(); // Refresh the orders
        toast.success(`Order #${orderId} is now yours, let's go!`);
        router.push('/employee');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error(`Failed to confirm Order #${orderId}`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      toast.error(`An error occurred while confirming Order #${orderId}`);
    }
  };

  if (loading || driverId === null || outletId === null) {
    return <p>Loading...</p>; // Display loading state until ready
  }

  return (
    <div className="flex flex-col text-gray-800 items-center p-4">
      {orders.length > 0 && isAvailable ? (
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
                onClick={() =>
                  driverId !== null && handleConfirm(order.orderId, driverId)
                }
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
