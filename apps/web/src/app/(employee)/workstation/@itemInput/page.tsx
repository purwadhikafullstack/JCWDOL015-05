'use client';
import { DeleteButton } from '@/components/ui/actionButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/redux/hooks';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

type Item = {
  orderId: number | null;
  item: string;
  quantity: number;
};

type Order = {
  orderId: number;
  pricePerKg: number;
};

export default function ItemInputPage() {
  const [itemsByOrder, setItemsByOrder] = useState<{
    [orderId: number]: Item[];
  }>({});
  const [weightsByOrder, setWeightsByOrder] = useState<{
    [orderId: number]: number;
  }>({});
  const [orders, setOrders] = useState<Order[]>([]);

  const outletAdmin = useAppSelector((state) => state.outletAdmin);
  const [outletAdminId, setOutletAdminId] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(true); // Added loading state

  useEffect(() => {
    if (outletAdmin) {
      setOutletAdminId(outletAdmin.outletAdminId);
    }
  }, [outletAdmin]);

  const fetchOrders = useCallback(async () => {
    if (!outletAdminId) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `${BASEURL}/api/assignment/item-input/${outletAdminId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true', 
          },
        }
      );

      const data = await response.json();
      setOrders(data);

      if (data.length > 0) {
        toast.success('Message: Request Item Input');
      }

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
          acc[order.orderId] = 0;
          return acc;
        },
        {},
      );
      setWeightsByOrder(initialWeightsByOrder);
    } catch (error) {
      console.error('Orders fetching error', error);
    } finally {
      setLoading(false);
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

  const handleWeightChange = (orderId: number, value: string) => {
    const weight = parseFloat(value);
    setWeightsByOrder((prevWeights) => ({
      ...prevWeights,
      [orderId]: isNaN(weight) ? 0 : weight,
    }));
  };

  const validateForm = (orderId: number) => {
    const errors: { [key: string]: string } = {};
    const items = itemsByOrder[orderId];
    const weight = weightsByOrder[orderId];

    if (weight <= 0) {
      errors['weight'] = 'Weight must be greater than 0 kg';
    }

    if (items.length === 0) {
      errors['items'] = 'At least one item is required';
    } else {
      items.forEach((item, index) => {
        if (!item.item.trim()) {
          errors[`item-${index}`] = `Item name is required`;
        }
        if (item.quantity <= 0) {
          errors[`quantity-${index}`] = `Quantity must be greater than 0`;
        }
      });
    }

    return errors;
  };

  const handleSubmit = async (
    e: React.FormEvent,
    orderId: number,
    pricePerKg: number,
  ) => {
    e.preventDefault();

    const formErrors = validateForm(orderId);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
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
          toast.success(`Items for Order #${orderId} submitted successfully`);
          fetchOrders();
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
          toast.error(`Failed to submit items for Order #${orderId}`);
        }
      } catch (error) {
        console.error('Error submitting items:', error);
        toast.error(`Failed to submit items for Order #${orderId}`);
      }
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

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

            <div className="flex mb-4 items-center gap-2">
              <Input
                type="number"
                value={weightsByOrder[order.orderId] || ''}
                onChange={(e) =>
                  handleWeightChange(order.orderId, e.target.value)
                }
                placeholder="Weight"
                className="w-28 border rounded p-2 bg-gray-100"
                step="0.1"
                min={0.1}
              />
              <span>Kg</span>
              {errors['weight'] && (
                <div className="text-sm text-red-500">{errors['weight']}</div>
              )}
            </div>

            {itemsByOrder[order.orderId]?.map((item, index) => (
              <div key={index} className="mb-4 flex gap-4 items-center">
                <div className="flex flex-col gap-1">
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
                  {errors[`item-${index}`] && (
                    <div className="text-sm text-red-500">
                      {errors[`item-${index}`]}
                    </div>
                  )}
                </div>
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
                {errors[`quantity-${index}`] && (
                  <div className="text-sm text-red-500">
                    {errors[`quantity-${index}`]}
                  </div>
                )}
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
