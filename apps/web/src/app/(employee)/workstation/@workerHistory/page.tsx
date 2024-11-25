'use client'

import { useAppSelector } from "@/redux/hooks";
import { BASEURL } from "@/services/api/address/address";
import { useEffect, useState } from "react";

interface WorkerHistory {
    workerId: number,
    orderId: number,
    createdAt : string,
    worker: {
        station: string
    }
}

export default function WorkerHistoryPage() {
    const [historys, setHistorys] = useState<WorkerHistory[]>([]);
    const worker = useAppSelector((state) => state.worker)
    const [workerId, setWorkerId] = useState<number | null>(worker.workerId)

    useEffect(() => {
        if (workerId !== null) {
            const fetchHistory = async () => {
                try {
                    const response = await fetch(`${BASEURL}/api/assignment/worker/history/${workerId}`)
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
    }, [workerId])
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {historys.length > 0 ? (
                historys.map((history) => (
                    <div 
                    key={history.workerId} 
                    className="border p-4 mb-2 rounded-lg bg-gray-100 shadow-md m-w-[300px]"
                    >
                        <p className="font-semibold text-xl">Order ID :{history.orderId}</p>
                        <p className="font-medium text-lg">{new Date(history.createdAt).toLocaleString()}</p>
                        <p className="font-medium text-lg">Station : {history.worker.station}</p>
                        
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