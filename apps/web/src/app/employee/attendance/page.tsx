'use client'

import { useAppSelector } from "@/redux/hooks"
import { Role } from "@/type/role"
import { IAttendance } from "@/type/employee"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { BASEURL } from "@/services/api/address/address"

export default function Attendance() {
    const driver = useAppSelector((state) => state.driver)
    const worker = useAppSelector((state) => state.worker)

    const [employeeId, setEmployeeId] = useState<number | null>(null);
    useEffect(() => {
        if (driver) {
            setEmployeeId(driver.employeeId);
        } else if (worker) {
            setEmployeeId(worker.employeeId);
        }
    }, [driver, worker])
    const [attendanceLog, setAttendanceLog] = useState<IAttendance[]>([]);
    const [isClockedIn, setIsClockedIn] = useState<boolean>(false)
    const [completedAttendance, setCompletedAttendance] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAttendance = async () => {
        setLoading(true);
        setError(null);
        if (!employeeId) {
            toast.error("Employee ID is not available.");
            setLoading(false);
            return;
        }
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance/${employeeId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch attendance log');
            }
            const data = await response.json();
            setAttendanceLog(data);
            const lastEntry = data[data.length - 1];
            if (lastEntry) {
                setIsClockedIn(!lastEntry.clockOut);
                setCompletedAttendance(lastEntry.clockIn && lastEntry.clockOut);
            }
        } catch (error) {
            console.error('Failed to fetch attendance log:', error);
            setError(error instanceof Error ? error.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }

    const handleClockIn = async () => {
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId })
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(data.msg);
                fetchAttendance(); // Refresh attendance after clocking in
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Clock-in Failed:', error);
        }
    }

    const handleClockOut = async () => {
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId })
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(data.msg);
                fetchAttendance(); // Refresh attendance after clocking out
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Clock-out Failed:', error);
        }
    }

    useEffect(() => {
        fetchAttendance();
    }, [employeeId]);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-4">Attendance</h1>
                <p>Employee ID: {employeeId}</p>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex gap-4 mb-6">
                    {!completedAttendance ? (
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
                <Link href={'/employee/attendance/history'}>
                    <button className='bg-blue-500 px-4 py-2 text-white rounded-md'>
                        History
                    </button>
                </Link>
            </div>
        </div>
    )
}
