'use client';

import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

interface DriverHistory {
  driverId: number,
  orderId: number,
  activity: string
}

export default function DriverHistoryPage() {
  const [historys, setHistorys] = useState<DriverHistory[]>([]);
  const driver = useAppSelector((state) => state.driver);
  const [driverId, setDriverId] = useState<number | null>(driver?.driverId || null);

  useEffect(() => {
    if (driverId !== null) {
      const fetchHistory = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/assignment/driver/history/${driverId}`);
          if (response.ok) {
            const data = await response.json();
            setHistorys(data);
          } else {
            console.error("Failed to fetch history:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching driver history:", error);
        }
      };

      fetchHistory();
    }
  }, [driverId]);

  

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {historys.length > 0 ? (
        historys.map((history) => (
          <div
            key={`${history.driverId}-${history.activity}`}
            className="border p-4 mb-2 rounded-lg bg-gray-100 shadow-md min-w-[300px]"
          >
            <p className="font-semibold text-xl">Order ID: {history.orderId}</p>
            <p className="font-medium text-lg">Activity: {history.activity}</p>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center col-span-full h-64">

          <p className="text-gray-500">No history available for this driver.</p>
        </div>
      )}
    </div>
  );
}
