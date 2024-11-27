'use client';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export default function BypassRequestPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [outletAdminId, setOutletAdminId] = useState<number | null>(null);
  const [outletId, setOutletId] = useState<number | null>(null);
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
        `${BASEURL}/api/assignment/bypass-request/${outletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        }
      },
      );
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Orders fetching error:', error);
    } finally {
      setLoading(false);
    }
  }, [outletId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleConfirm = async (
    orderId: number,
    status: string,
    action: string,
    paymentStatus: string,
  ) => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/confirm-bypass/${orderId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status, action, paymentStatus }),
        },
      );

      if (response.ok) {
        action === 'confirm'
          ? toast.success(`process has been bypassed`)
          : toast.success('bypass rejected & returned');
        fetchOrders();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error(`Failed to submit`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      toast.error(`An error occurred while confirming Order #${orderId}`);
    }
  };

  return (
    <div className="flex flex-col text-gray-800 items-center p-4">
      {orders.length > 0 ? (
        <div className="flex w-full flex-col gap-4 items-center">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="rounded-xl min-w-96 text-center p-4 bg-white border-2 border-blue-400 shadow-md"
            >
              <h1 className="text-lg font-bold">Order #{order.orderId}</h1>
              <p className="text-sm flex justify-start my-2">
                <span className="font-bold mr-1">Station: </span>
                {order.status}
              </p>
              <p className="text-sm flex justify-start my-2">
                <span className="font-bold mr-1">Bypass Message: </span>
                {order.bypassMessage}
              </p>
              <div className="flex justify-between">
                <Button
                  className="w-32 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() =>
                    handleConfirm(
                      order.orderId,
                      order.status,
                      'confirm',
                      order.paymentStatus,
                    )
                  }
                >
                  Confirm
                </Button>
                <Button
                  className="w-32 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() =>
                    handleConfirm(
                      order.orderId,
                      order.status,
                      'reject',
                      order.paymentStatus,
                    )
                  }
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders available to be bypassed.</p>
      )}
    </div>
  );
}
