'use client'

import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

interface WorkerHistory {
    workerId: number,
    orderId: number,
    createdAt : number,
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
                    const response = await fetch(`http://localhost:8000/api/assignment/worker/history/${workerId}`)
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
        <div className="p-4">
            {historys.length > 0 ? (
                historys.map((history) => (
                    <div 
                    key={history.workerId} 
                    className="border p-4 mb-2 rounded-lg bg-gray-100"
                    >
                        <p>Order ID :{history.orderId}</p>
                        <p>{history.createdAt}</p>
                        <p>Station : {history.worker.station}</p>
                        
                    </div>
                ))
            ) : (
                <p>No history</p>
            )}
        </div>
    )
}