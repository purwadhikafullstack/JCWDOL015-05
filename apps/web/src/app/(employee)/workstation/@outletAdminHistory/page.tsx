'use client'
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

interface OutletAdminHistory {
    outletAdminId: number,
    orderId: number,
    status: string
}

export default function OutletAdminHistoryPage() {
    const [historys, setHistorys] = useState<OutletAdminHistory[]>([]);
    const outletAdmin = useAppSelector((state) => state.outletAdmin)
    const [outletAdminId, setOutletAdminId] = useState<number | null>(outletAdmin.outletAdminId)


    useEffect(() => {
        if (outletAdminId !== null) {
            const fetchHistory = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/assignment/outletadmin/history/${outletAdminId}`)
                    if (response.ok) {
                        const data = await response.json()
                        setHistorys(data)
                    } else {
                        console.error("Failed to fetch history:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error fetching driver history:", error);
                }
            }
            fetchHistory()
        }
    }, [outletAdminId])

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {historys.length > 0 ? (
          historys.map((history) => (
            <div
              key={history.outletAdminId}
              className="border p-4 mb-2 rounded-lg bg-gray-100 shadow-md"
            >
              <p className="font-semibold text-xl">Order ID : {history.orderId}</p>
              <p className="font-medium text-lg">Status : {history.status}</p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center col-span-full h-64">
            <p className="text-gray-500">No history</p>
          </div>
        )}
      </div>
      
    )
}