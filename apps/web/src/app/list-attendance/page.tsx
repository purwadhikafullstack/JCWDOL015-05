'use client';

import { useEffect, useState } from 'react';

interface ListAttendance {
    employeeId: number
    clockIn: number
    clockOut:number
    employee: {
        fullName: string
    }
}

export default function ListAttendance() {
    const [attendanceLogs, setAttendanceLogs] = useState<ListAttendance[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchAttendanceLogs() {
            try {
                const response = await fetch('http://localhost:8000/api/submit/attendance'); // Update with your actual API route
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch attendance logs');
                }

                const data = await response.json();
                setAttendanceLogs(data);
            } catch (err: any) {
                setError(err.message || 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchAttendanceLogs();
    }, []);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Attendance Logs</h1>
            {loading ? (
                <p className="text-blue-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : attendanceLogs.length === 0 ? (
                <p className="text-gray-500">No attendance records found.</p>
            ) : (
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Employee ID</th>
                                <th className="px-4 py-2">Clock In</th>
                                <th className="px-4 py-2">Clock Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceLogs.map((log: any) => (
                                <tr key={log.id} className="border-t">
                                    <td className="px-4 py-2">{log.employee.fullName}</td>
                                    <td className="px-4 py-2">{log.employeeId}</td>
                                    <td className="px-4 py-2">{new Date(log.clockIn).toLocaleString()}</td>
                                    <td className="px-4 py-2">
                                        {log.clockOut ? new Date(log.clockOut).toLocaleString() : 'Not clocked out'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
