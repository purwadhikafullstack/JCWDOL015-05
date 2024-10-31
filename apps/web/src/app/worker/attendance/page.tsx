'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Attendance {
    attendanceId: number;
    employeeId: number;
    clockIn: string | null;
    clockOut: string | null;
}

export default function AttendancePage() {
    const [employeeId, setEmployeeId] = useState<number>(3);
    const [attendanceLog, setAttendanceLog] = useState<Attendance[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isClockedIn, setIsClockedIn] = useState<boolean>(false);
    const [hasCompletedAttendance, setHasCompletedAttendance] = useState<boolean>(false);
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    // Fetch Attendance Log for Employee
    const fetchAttendanceLog = async () => {
        setLoading(true);
        setError(null); // Reset error before fetch
        try {
            const response = await fetch(`${API_URL}/api/submit/attendance/${employeeId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch attendance log');
            }
            const data = await response.json();
            setAttendanceLog(data);

            // Check if the last log entry has a null clockOut to determine if the employee is clocked in
            const lastEntry = data[data.length - 1];
            if (lastEntry) {
                setIsClockedIn(!lastEntry.clockOut);
                setHasCompletedAttendance(lastEntry.clockIn && lastEntry.clockOut);
            }
        } catch (error) {
            console.error('Failed to fetch attendance log:', error);
            setError(error instanceof Error ? error.message : 'Unknown error'); // Set error message
        } finally {
            setLoading(false);
        }
    };

    // Clock-In Function
    const handleClockIn = async () => {
        try {
            const response = await fetch(`${API_URL}/api/submit/attendance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Clocked in successfully!');
                fetchAttendanceLog(); // Refresh log
            } else {
                alert(data.error || 'Failed to clock in');
            }
        } catch (error) {
            console.error('Clock-in failed:', error);
        }
    };

    // Clock-Out Function
    const handleClockOut = async () => {
        try {
            const response = await fetch(`${API_URL}/api/submit/attendance`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Clocked out successfully!');
                fetchAttendanceLog(); // Refresh log
            } else {
                alert(data.error || 'Failed to clock out');
            }
        } catch (error) {
            console.error('Clock-out failed:', error);
        }
    };

    // Fetch attendance log on component mount
    useEffect(() => {
        fetchAttendanceLog();
    }, [employeeId]);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-4">Attendance</h1>
                <p>Employee ID: {employeeId}</p>
                <div className="flex gap-4 mb-6">
                    {!hasCompletedAttendance ? (
                        isClockedIn ? (
                            <button
                                onClick={handleClockOut}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                            >
                                Clock Out
                            </button>
                        ) : (
                            <button
                                onClick={handleClockIn}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                Clock In
                            </button>
                        )
                    ) : (
                        <p className="text-green-500">Attendance completed for today.</p>
                    )}
                </div>
                <Link href={'/worker/attendance/history'}>
                    <button className='bg-blue-500 px-4 py-2 text-white rounded-md'>
                        History
                    </button>
                </Link>
            </div>
        </div>
    );
}
