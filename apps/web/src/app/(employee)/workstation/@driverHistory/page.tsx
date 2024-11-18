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
    <div className="p-4">
      {historys.length > 0 ? (
        historys.map((history) => (
          <div
            key={`${history.driverId}-${history.activity}`}
            className="border p-4 mb-2 rounded-lg shadow-md bg-gray-100 w-[250px]"
          >
            <p className="font-semibold">Order ID: {history.orderId}</p>
            <p>Activity: {history.activity}</p>
          </div>
        ))
      ) : (
        <p>No history available for this driver.</p>
      )}
    </div>
  );
}
