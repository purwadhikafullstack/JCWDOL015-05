'use client';
import { DeleteButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useCallback, useEffect, useState } from 'react';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

type Item = {
  orderId: number | null;
  item: string;
  quantity: number;
};

export default function ItemInputPage() {
  const [itemsByOrder, setItemsByOrder] = useState<{
    [orderId: number]: Item[];
  }>({});
  const [weightsByOrder, setWeightsByOrder] = useState<{
    [orderId: number]: number;
  }>({});
  const [orders, setOrders] = useState<Order[]>([]);
  const [outletAdminId, setOutletAdminId] = useState<number>(1); // Replace with actual outletAdminId

  const fetchOrders = useCallback(async () => {
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/item-input/${outletAdminId}`,
      );
      const data = await response.json();
      setOrders(data);

      // Initialize items and weights for each order
      const initialItemsByOrder = data.reduce(
        (acc: { [orderId: number]: Item[] }, order: Order) => {
          acc[order.orderId] = [
            { orderId: order.orderId, item: '', quantity: 1 },
          ];
          return acc;
        },
        {},
      );
      setItemsByOrder(initialItemsByOrder);

      const initialWeightsByOrder = data.reduce(
        (acc: { [orderId: number]: number }, order: Order) => {
          acc[order.orderId] = 0; // Initialize with default weight of 0 or other default value
          return acc;
        },
        {},
      );
      setWeightsByOrder(initialWeightsByOrder);
    } catch (error) {
      console.error('Orders fetching error', error);
    }
  }, [outletAdminId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleAddItem = (orderId: number) => {
    setItemsByOrder((prevItemsByOrder) => ({
      ...prevItemsByOrder,
      [orderId]: [
        ...(prevItemsByOrder[orderId] || []),
        { orderId, item: '', quantity: 1 },
      ],
    }));
  };

  const handleRemoveItem = (orderId: number, index: number) => {
    setItemsByOrder((prevItemsByOrder) => ({
      ...prevItemsByOrder,
      [orderId]: prevItemsByOrder[orderId].filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (
    orderId: number,
    index: number,
    field: keyof Item,
    value: string | number,
  ) => {
    setItemsByOrder((prevItemsByOrder) => ({
      ...prevItemsByOrder,
      [orderId]: prevItemsByOrder[orderId].map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const handleWeightChange = (orderId: number, value: number) => {
    setWeightsByOrder((prevWeights) => ({
      ...prevWeights,
      [orderId]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    orderId: number,
    pricePerKg: number,
  ) => {
    e.preventDefault();
    const items = itemsByOrder[orderId];
    const weight = weightsByOrder[orderId];
    try {
      const response = await fetch(`${BASEURL}/api/assignment/item-submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items, weight, orderId, pricePerKg }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        alert(`Items for Order #${orderId} submitted successfully`);
        fetchOrders();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Failed to submit items for Order #${orderId}`);
      }
    } catch (error) {
      console.error('Error submitting items:', error);
      alert(`Failed to submit items for Order #${orderId}`);
    }
  };

  return (
    <div className="flex flex-col text-gray-800 items-center p-4 gap-4">
      {orders.length > 0 ? (
        orders.map((order) => (
          <form
            key={order.orderId}
            onSubmit={(e) => handleSubmit(e, order.orderId, order.pricePerKg)}
            className="max-w-lg mx-auto p-6 bg-white border-2 shadow-md border-blue-400 rounded-xl text-gray-800"
          >
            <h2 className="text-lg font-bold mb-4">
              Add Items to Order #{order.orderId}
            </h2>

            {/* Weight input field */}
            <div className="flex mb-4 items-center gap-2">
              <Input
                type="number"
                value={weightsByOrder[order.orderId] || ''}
                onChange={(e) =>
                  handleWeightChange(order.orderId, parseFloat(e.target.value))
                }
                placeholder="weight"
                className="w-28 border rounded p-2 bg-gray-100"
                min="0"
              />{' '}
              <span>Kg</span>
            </div>

            {itemsByOrder[order.orderId]?.map((item, index) => (
              <div key={index} className="mb-4 flex gap-4 items-center">
                <Input
                  type="text"
                  value={item.item}
                  onChange={(e) =>
                    handleInputChange(
                      order.orderId,
                      index,
                      'item',
                      e.target.value,
                    )
                  }
                  placeholder="Item name"
                  className="w-full border rounded p-2 bg-gray-100"
                />
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleInputChange(
                      order.orderId,
                      index,
                      'quantity',
                      parseInt(e.target.value),
                    )
                  }
                  placeholder="Quantity"
                  className="w-20 border rounded p-2 bg-gray-100"
                  min="1"
                />
                <DeleteButton
                  type="button"
                  onClick={() => handleRemoveItem(order.orderId, index)}
                />
              </div>
            ))}
            <div className="flex flex-row-reverse justify-between">
              <Button
                type="button"
                onClick={() => handleAddItem(order.orderId)}
                className="w-32 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add more item
              </Button>
              <Button
                type="submit"
                className="w-32 p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </Button>
            </div>
          </form>
        ))
      ) : (
        <p>No orders available to be input</p>
      )}
    </div>
  );
}
