'use client';

import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DriverPage() {
    const dispatch = useDispatch();
    const driver = useAppSelector((state) => state.driver);

    const [driverId, setDriverId] = useState(driver?.driverId);
    const [requests, setRequests] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        if (driverId) {
            const fetchRequest = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/driver/${driverId}/requests`);
                    if (response.ok) {
                        const data = await response.json();
                        setRequests(data);
                    } else {
                        console.error('Failed to fetch data');
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            const fetchHistory = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/driver/${driverId}/history`);
                    if (response.ok) {
                        const data = await response.json();
                        setHistory(data);
                    } else {
                        console.error('Failed to fetch history');
                    }
                } catch (error) {
                    console.error('Error fetching history:', error);
                }
            };

            fetchRequest();
            fetchHistory();
        }
    }, [driverId]);

    // WebSocket connection to listen for new requests
    useEffect(() => {
        if (driverId) {
            const ws = new WebSocket("ws://localhost:8080");

            ws.onopen = () => {
                console.log("WebSocket connection established");
            };

            ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log("Pesan diterima dari server:", message); // Tambahkan log ini
            
                if (message.type === 'new-request') {
                    toast.success(`Request baru diterima: ${message.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setRequests(prevRequests => [...prevRequests, message.request]);
                }
            };
            

            ws.onclose = () => {
                console.log("WebSocket connection closed");
            };

            return () => {
                ws.close();
            };
        }
    }, [driverId]);

    const acceptRequest = async (requestId: any) => {
        try {
            const response = await fetch(`http://localhost:8000/api/driver/${requestId}/accept`, {
                method: 'POST',
            });
            if (response.ok) {
                setRequests(prevRequests => prevRequests.map(request => 
                    request.orderId === requestId ? { ...request, status: 'Accepted' } : request
                ));
            } else {
                console.error('Failed to accept request');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const completeOrder = async (requestId: any) => {
        try {
            const response = await fetch(`http://localhost:8000/api/driver/${requestId}/complete`, {
                method: 'POST',
            });
            if (response.ok) {
                const updatedHistory = await fetch(`http://localhost:8000/api/driver/${driverId}/history`);
                const data = await updatedHistory.json();
                setHistory(data);
                setRequests(prevRequests => prevRequests.filter(request => request.orderId !== requestId));
            } else {
                console.error('Failed to complete the order');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <ToastContainer />
            
            {/* Requests Section */}
            <div className="mb-8 w-full">
                <h2 className="font-bold text-xl mb-4">Current Requests</h2>
                {requests.length === 0 ? (
                    <p>No Request</p>
                ) : (
                    requests.map((request: any) => (
                        <div key={request.orderId} className="mb-4 p-4 border-b">
                            <h3 className="font-bold">Order #{request.orderId}</h3>
                            <p>{request.order.customerId}</p>
                            <p>{request.order.address}</p>
                            <p>Items: {request.order.items && Array.isArray(request.order.items) ? request.order.items.join(", ") : "No items listed"}</p>
                            <div className="mt-2 flex justify-between">
                                <span>Status: {request.status}</span>
                                {request.status === 'Pending' && (
                                    <button
                                        onClick={() => acceptRequest(request.orderId)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Accept Request
                                    </button>
                                )}
                                {request.status === 'Accepted' && (
                                    <button
                                        onClick={() => completeOrder(request.orderId)}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Complete Order
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* History Section */}
            <div className="w-full">
                <h2 className="font-bold text-xl mb-4">Request History</h2>
                {history.length === 0 ? (
                    <p>No History</p>
                ) : (
                    history.map((entry: any) => (
                        <div key={entry.orderId} className="mb-4 p-4 border-b">
                            <h3 className="font-bold">Order #{entry.orderId}</h3>
                            <p>{entry.order.customerName}</p>
                            <p>{entry.order.address}</p>
                            <p>Items: {entry.order.items && Array.isArray(entry.order.items) ? entry.order.items.join(", ") : "No items listed"}</p>
                            <div className="mt-2 flex justify-between">
                                <span>Status: {entry.status}</span>
                                <span>Activity: {entry.activity}</span>
                                <span>Created At: {new Date(entry.createdAt).toLocaleString()}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
