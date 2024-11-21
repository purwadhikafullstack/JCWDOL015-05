// /pages/washing.tsx
import { BASEURL } from "@/services/api/address/address";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

interface Item {
    item: string;
}

interface Order {
    orderId: number;
    items: Item[];
    status: string;
}

interface WashingPageProps {
    orders: Order[];
}

const WashingPage: NextPage<WashingPageProps> = ({ orders }) => {
    const safeOrders = orders || [];

    const getDataWashing = async () => {
        
    }

    const handleProcessOrder = async (orderId: number) => {
        
        try {
            const response = await fetch(`${BASEURL}/api/process/process-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderId, workerId: 1, items: [] }),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error processing order", error);
            alert("Terjadi kesalahan dalam memproses order");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Washing Station</h1>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Order ID</th>
                        <th className="px-4 py-2">Items</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {safeOrders.length > 0 ? (
                        safeOrders.map((order) => (
                            <tr key={order.orderId}>
                                <td className="border px-4 py-2">{order.orderId}</td>
                                <td className="border px-4 py-2">{order.items.map((item) => item.item).join(", ")}</td>
                                <td className="border px-4 py-2">{order.status}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleProcessOrder(order.orderId)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                    >
                                        Process Order
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center px-4 py-2">No orders available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${BASEURL}/api/orders?status=pencucian`);
    const orders = await res.json();

    return {
        props: {
            orders: orders || [], // Ensuring orders is always an array
        },
    };
};

export default WashingPage;
