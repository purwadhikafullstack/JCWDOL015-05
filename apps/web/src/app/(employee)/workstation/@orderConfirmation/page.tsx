'use client';

import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export default function OrderConfirmationPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [outletId, setOutletId] = useState<number | null>(null);
  const [outletAdminId, setOutletAdminId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const outletAdmin = useAppSelector((state) => state.outletAdmin);

  useEffect(() => {
    if (outletAdmin) {
      setOutletAdminId(outletAdmin.outletAdminId);
      setOutletId(outletAdmin.employee?.outletId);
    }
  }, [outletAdmin]);

  const fetchOrders = useCallback(async () => {
    if (!outletId) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/order-confirmation/${outletId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true', 
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        if (data.length > 0) {
          toast.success('Message: New Order Confirmation');
        }
      }
    } catch (error) {
      console.error('Orders fetching error:', error);
    } finally {
      setLoading(false);
    }
  }, [outletId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleConfirm = async (orderId: number) => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/confirm-order/${orderId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ outletAdminId }),
        },
      );

      if (response.ok) {
        toast.success(`Order #${orderId} has been assigned to driver`);
        fetchOrders();
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

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="flex flex-col text-gray-800 items-center p-4">
      {orders.length > 0 ? (
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
                onClick={() => handleConfirm(order.orderId)}
              >
                Confirm
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders available for confirmation.</p>
      )}
    </div>
  );
}
