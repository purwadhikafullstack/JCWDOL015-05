'use client';

import { BASEURL } from '@/services/api/address/address';
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
                const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
                    }
                }); 
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
        <div className="min-h-screen flex flex-col items-center justify-center">
            {loading ? (
                <p className="text-blue-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : attendanceLogs.length === 0 ? (
                <p className="text-gray-500">No attendance records found.</p>
            ) : (
                <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-[#1678F3] text-white font-semibold text-left text-xl">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Employee ID</th>
                                <th className="px-4 py-2">Clock In</th>
                                <th className="px-4 py-2">Clock Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceLogs.map((log: any) => (
                                <tr key={log.id} className="border-t text-black font-medium text-lg">
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
