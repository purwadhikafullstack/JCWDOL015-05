'use client'
import { useEffect, useState } from "react";

interface Request {
    requestId: number;
    customerId: number;
    customerAddress: string;
    status: string;
    driverId?: number;  
}

export default function Request() {
    const [requests, setRequests] = useState<Request[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/request/order');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: Request[] = await response.json();
                setRequests(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchRequest();
    }, []);

    // Function to confirm the request
    const confirmRequest = async (requestId: number, driverId: number) => {
        try {
            const response = await fetch('http://localhost:8000/api/request/order/confirm', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    requestId,
                    driverId
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to confirm request');
            }

            const updatedRequest = await response.json();

            // Update the request status locally to reflect the change
            setRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request.requestId === requestId
                        ? { ...request, status: "laundryMenujuOutlet", driverId }
                        : request
                )
            );
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    if (loading) { 
        return <h1>Loading . . .</h1>;
    }
    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return ( 
        <div>
            <h1>Requests</h1>
            <ul>
                {requests.map((request) => (
                    <li key={request.requestId}>
                        <div className="flex gap-2">

                        <h2>Request ID: {request.requestId}</h2>
                        <p>Customer ID: {request.customerId}</p>
                        <p>Customer Address: {request.customerAddress}</p>
                        <p>Status: {request.status}</p>
                        <p>Driver ID: {request.driverId || "Not Assigned"}</p>
                        {request.status !== "laundryMenujuOutlet" && (
                            <button className="bg-white" onClick={() => confirmRequest(request.requestId, 1)}> {/* 123 is the example driver ID */}
                                Confirm
                            </button>
                        )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
