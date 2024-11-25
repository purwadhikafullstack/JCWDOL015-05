'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Role } from "@/type/role"
import { useDispatch } from "react-redux"
import { IAttendance } from "@/type/employee"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { BASEURL } from "@/services/api/address/address"
import { attendanceLoginAction, attendanceLogoutAction } from "@/redux/slice/attendanceSlice"

interface Attendance {
    attendanceId: number;
    employeeId: number;
    clockIn: string | null;
    clockOut: string | null;
}

export default function DriverPage() {
    const router = useRouter()
    const driver = useAppSelector((state) => state.driver)
    const [employeeId, setEmployeeId] = useState(driver.employeeId)
    const [attendanceLog, setAttendanceLog] = useState<IAttendance[]>([]);
    const [isClockedIn, setIsClockedIn] = useState<boolean>(false)
    const [completedAttendance, setCompletedAttendance] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [attendanceHistory, setAttendanceHistory] = useState<Attendance[]>([]);
    const dispatch = useDispatch()

    const fetchAttendance = async () => {
        setLoading(true);
        setError(null);
        if (!employeeId) {
            toast.error("Employee ID is not available.");
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
                dispatch(
                    attendanceLoginAction({
                        attendanceId: data.attendanceId,
                        employeeId: data.employeeId,
                        clockIn: data.clockIn,
                        clockOut: '', 
                    })
                );
                router.push('/workstation')
                fetchAttendance(); 
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
                dispatch(attendanceLogoutAction())
                fetchAttendance();
                router.push('/employeeLogin')
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Clock-out Failed:', error);
        }
    }

    const fetchAttendanceHistory = async () => {
        setLoading(true);
        setError(null); 
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance/${driver.employeeId}`);
            if (!response.ok) {
                throw new Error('');
            }
            const data = await response.json();
            setAttendanceHistory(data);
        } catch (error) {
            console.error('Failed to fetch attendance history:', error);
            setError(error instanceof Error ? error.message : 'Unknown error'); 
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (isoString: string | null) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        return date.toLocaleString('en-US', { 
            dateStyle: 'short', 
            timeStyle: 'short' 
        });
    };

    useEffect(() => {
        fetchAttendance();
    }, [employeeId]);

    useEffect(() => {
        fetchAttendanceHistory();
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg mb-10">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Attendance</h1>
                <div className="space-y-4 text-black font-medium">
                    <p className="text-lg"><strong>Name:</strong> {driver.employee.fullName}</p>
                    <p className="text-lg"><strong>Outlet ID:</strong> {driver.employee.outletId}</p>
                    <p className="text-lg"><strong>Employee ID:</strong> {employeeId}</p>
                </div>
                {loading && <p className="text-blue-500 mt-4">Loading...</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
                <div className="flex justify-center gap-4 mt-6">
                    {!completedAttendance ? (
                        isClockedIn ? (
                            <button
                                onClick={handleClockOut}
                                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
                            >
                                Clock Out
                            </button>
                        ) : (
                            <button
                                onClick={handleClockIn}
                                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                            >
                                Clock In
                            </button>
                        )
                    ) : (
                        <p className="text-green-500 font-medium">Attendance completed for today. See u Next Day</p>
                    )}
                </div>
            </div>

            <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Attendance History</h1>
                {loading ? (
                    <p className="text-blue-500">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {attendanceHistory.length === 0 ? (
                            <li className="py-4 text-center text-gray-500">No attendance records found.</li>
                        ) : (
                            attendanceHistory.map((record) => (
                                <li key={record.attendanceId} className="py-4">
                                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                                        <div>
                                            <p className="font-medium"><strong>Employee ID:</strong> {record.employeeId}</p>
                                            <p className="text-gray-600"><strong>Clock In:</strong> {formatTime(record.clockIn)}</p>
                                            <p className="text-gray-600"><strong>Clock Out:</strong> {formatTime(record.clockOut)}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}
