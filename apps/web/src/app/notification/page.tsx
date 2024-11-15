'use client'
import { useEffect, useState } from "react";

interface Notification {
    id: number;
    message: string;
    isRead: boolean;
}

export default function NotificationPage() {
    const [notification, setNotification] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchNotifications = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/notifications/worker/1');
            const data = await res.json();
            setNotification(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (notificationId: number) => {
        try {
            await fetch(`http://localhost:8000/notifications/${notificationId}/read`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });
            setNotification((prevNotification) =>
                prevNotification.map((notification) =>
                    notification.id === notificationId
                        ? { ...notification, isRead: true }
                        : notification
                )
            );
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    if (loading) {
        return <p>Loading notifications...</p>;
    }

    return (
        <div>
            <h1>Notifikasi Worker</h1>
            <ul>
                {notification.map((notification) => (
                    <li
                        key={notification.id}
                        style={{
                            marginBottom: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            backgroundColor: notification.isRead ? '#e0e0e0' : '#fff',
                        }}
                    >
                        <p>{notification.message}</p>
                        <p>
                            <strong>Status:</strong> {notification.isRead ? 'Sudah Dibaca' : 'Belum Dibaca'}
                        </p>
                        {!notification.isRead && (
                            <button
                                onClick={() => markAsRead(notification.id)}
                                style={{
                                    padding: '5px 10px',
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Tandai sebagai Sudah Dibaca
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
