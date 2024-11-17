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
        <div>
            {historys.length > 0 ? (
                historys.map((history) => (
                    <div key={history.outletAdminId}>
                        <p>Order ID : {history.orderId}</p>
                        <p>Status : {history.status}</p>
                    </div>
                ))
            ) : (
                <p>no history</p>
            )}
        </div>
    )
}