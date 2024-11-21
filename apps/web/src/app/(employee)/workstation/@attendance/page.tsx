'use client'
import { useAppSelector } from "@/redux/hooks";
import { BASEURL } from "@/services/api/address/address";
import { IAttendance } from "@/type/employee";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

export default function Attendance() {
    const [attendanceLog, setAttendanceLog] = useState<IAttendance[]>([]);
    const [isClockedIn, setIsClockedIn] = useState<boolean>(false);
    const [completedAttendance, setCompletedAttendance] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const worker = useAppSelector((state) => state.worker);
    const driver = useAppSelector((state) => state.driver);

    const [employeeId, setEmployeeId] = useState<number | null>(null);

    useEffect(() => {
        if (driver) {
            setEmployeeId(driver.employeeId);
        } else if (worker) {
            setEmployeeId(worker.employeeId);
        }
    }, [driver, worker]);

    const fetchAttendance = useCallback(async () => {
        setLoading(true);
        setError(null);
        if (!employeeId) {
            setLoading(false);
            return;
        }
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance/${employeeId}`);
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
    }, [employeeId]); // Hanya akan berubah jika employeeId berubah

    const handleClockIn = async () => {
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId }),
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
    };

    const handleClockOut = async () => {
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employeeId }),
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
    };

    useEffect(() => {
        fetchAttendance();
    }, [fetchAttendance]); // Tetap stabil karena fetchAttendance dibungkus dengan useCallback

    return (
        <div className="h-screen flex items-center justify-center">
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
            </div>
        </div>
    );
}
