'use client';
import { useEffect, useState } from 'react';

interface Attendance {
    attendanceId: number;
    employeeId: number;
    clockIn: string | null;
    clockOut: string | null;
}

export default function History() {
    const [attendanceHistory, setAttendanceHistory] = useState<Attendance[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    const formatTime = (isoString: string | null) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        return date.toLocaleString('en-US', { 
            dateStyle: 'short', 
            timeStyle: 'short' 
        });
    };

    // Fetch Attendance History
    const fetchAttendanceHistory = async () => {
        setLoading(true);
        setError(null); // Reset error before fetch
        try {
            const response = await fetch(`${API_URL}/api/submit/attendance/2`);
            console.log('Response:', response); // Log response
            if (!response.ok) {
                throw new Error('Failed to fetch attendance history');
            }
            const data = await response.json();
            console.log('Data:', data); // Log data received
            setAttendanceHistory(data);
        } catch (error) {
            console.error('Failed to fetch attendance history:', error);
            setError(error instanceof Error ? error.message : 'Unknown error'); // Set error message
        } finally {
            setLoading(false);
        }
    };

    // Fetch attendance history on component mount
    useEffect(() => {
        fetchAttendanceHistory();
    }, []);

    return (
        <div className='h-screen flex justify-center items-center'>

            <div className="bg-white shadow-md rounded-md text-black p-6">
                <h1 className="text-2xl font-semibold mb-4">Attendance History</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p> // Display error message if any
                ) : (
                    <ul className="space-y-2">
                        {attendanceHistory.length === 0 ? (
                            <li>No attendance records found.</li> // No records found
                        ) : (
                            attendanceHistory.map((record) => (
                                <li key={record.attendanceId} className="border p-4 rounded-md">
                                    <p><strong>Employee ID:</strong> {record.employeeId}</p>
                                    <p><strong>Clock In:</strong> {formatTime(record.clockIn)}</p>
                                    <p><strong>Clock Out:</strong> {formatTime(record.clockOut)}</p>
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}
