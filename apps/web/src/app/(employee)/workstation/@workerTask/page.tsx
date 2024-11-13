'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { useCallback, useEffect, useState } from 'react';

type Item = {
  itemId: number;
  item: string;
  quantity: number;
};

type Order = {
  orderId: number;
  status: string;
  items: Item[];
};

export default function WorkerTaskPage() {
  const [workerId, setWorkerId] = useState<number>(25);
  const [order, setOrder] = useState<Order | null>(null);
  const [outletId, setOutletId] = useState<number>(1); // Replace with actual outletAdminId
  const [station, setStation] = useState<string | null>('washing');
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [allChecked, setAllChecked] = useState(false);
  const [message, setMessage] = useState('');

  const fetchTask = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/laundry/assignment/get-task/${station}/${outletId}`,
      );
      const data = await response.json();
      console.log(data);

      setOrder(data);

      if (data?.items) {
        setCheckedItems(new Array(data.items.length).fill(false));
      }
    } catch (error) {
      console.error('Orders fetching error', error);
    }
  }, [station, outletId]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  // Update `allChecked` whenever `checkedItems` changes
  useEffect(() => {
    setAllChecked(checkedItems.every((isChecked) => isChecked));
  }, [checkedItems]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleBypass = async (orderId: number, message: string) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/laundry/assignment/submit-bypass/${orderId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bypassMessage: message }),
        },
      );

      if (response.ok) {
        alert(`Bypass message has been sent`);
        fetchTask();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Failed to send bypass message`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      alert(`An error occurred while submitting bypass message`);
    }
  };

  const handleSubmit = async (
    orderId: number,
    workerId: number,
    status: string,
  ) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/laundry/assignment/submit-task/${orderId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ workerId, status }),
        },
      );

      if (response.ok) {
        alert(`Task completed`);
        fetchTask();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Failed to complete task`);
      }
    } catch (error) {
      console.error('Confirmation error:', error);
      alert(`An error occurred while completing task`);
    }
  };

  return (
    <>
      {order ? (
        <div className="bg-blue-300 w-3/4">
          <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">
              Order #{order.orderId} item list
            </h1>
            <p>Click the checkbox if the items are matched</p>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={item.itemId}
                  className="p-4 bg-white rounded shadow flex justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold">{item.item}</p>
                    <p>
                      Qty:{' '}
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="w-auto">Matched</Label>
                    <input
                      type="checkbox"
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>
                </div>
              ))}
            </ul>
            {allChecked ? (
              <div className="flex justify-center mt-2">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() =>
                    handleSubmit(order.orderId, workerId, order.status)
                  }
                >
                  Submit
                </Button>
              </div>
            ) : (
              <div className=" flex flex-col items-center gap-2 mt-4">
                <label htmlFor="bypassMessage">Bypass message</label>
                <textarea
                  id="bypassMessage"
                  placeholder="enter your bypass message here"
                  className="bg-white rounded-lg p-1 w-3/4 text-md"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
                <Button
                  className="bg-green-500 hover:bg-green-600 w-24 "
                  disabled={!message.trim()}
                  onClick={() => handleBypass(order.orderId, message)}
                >
                  Bypass
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No task available</p>
      )}
    </>
  );
}
