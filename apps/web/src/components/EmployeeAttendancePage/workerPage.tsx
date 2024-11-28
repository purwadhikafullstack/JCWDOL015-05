'use client';

import { useEffect, useState, useMemo } from "react";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "react-toastify";
import { BASEURL } from "@/services/api/address/address";
import { IAttendance } from "@/type/employee";
import { useDispatch } from "react-redux";
import { attendanceLoginAction, attendanceLogoutAction } from "@/redux/slice/attendanceSlice";

const WorkerPage = () => {
    const dispatch = useDispatch()
    const worker = useAppSelector((state) => state.worker);
    const [attendanceHistory, setAttendanceHistory] = useState<IAttendance[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAttendanceHistory = async () => {
        setLoading(true);
        setError(null);

        try {
            if (!worker?.employeeId) {
                throw new Error("worker ID is not available.");
            }

            const response = await fetch(`${BASEURL}/api/submit/attendance/${worker.employeeId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch attendance history.');
            }

            const data = await response.json();
            setAttendanceHistory(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleClockIn = async () => {
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ employeeId: worker.employeeId }),
            });

            if (!response.ok) {
                throw new Error("Failed to record Clock In");
            }
            const data = await response.json()
            if (response.ok) {

                dispatch(attendanceLoginAction({
                    attendanceId: data.attendanceId,
                    employeeId: data.employeeId,
                    clockIn: data.clockIn,
                    clockOut: '',
                }))
                toast.success("Clock In recorded successfully");
            }
            fetchAttendanceHistory(); 
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Unknown error occurred");
        }
    };

    const handleClockOut = async () => {
        try {
            const response = await fetch(`${BASEURL}/api/submit/attendance`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ employeeId: worker.employeeId }),
            });

            if (!response.ok) {
                throw new Error("Failed to record Clock Out");
            }
            dispatch(attendanceLogoutAction())
            toast.success("Clock Out recorded successfully");
            fetchAttendanceHistory();
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Unknown error occurred");
        }
    };

    useEffect(() => {
        if (worker?.employeeId) {
            fetchAttendanceHistory();
        }
    }, [worker?.employeeId]);

    const formatTime = useMemo(() => (isoString: string | null) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        return date.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
    }, []);

   
    const canClockIn = useMemo(() => {
        if (attendanceHistory.length === 0) return true; 

        const latestAttendance = attendanceHistory[0]; 
        const clockInDate = latestAttendance.clockIn ? new Date(latestAttendance.clockIn) : null;
        const clockOutDate = latestAttendance.clockOut ? new Date(latestAttendance.clockOut) : null;
        const today = new Date();

     
        if (!clockOutDate) return false;

      
        const isNextDay =
            clockInDate &&
            today.toDateString() !== clockInDate.toDateString() &&
            today > clockInDate;

        return isNextDay;
    }, [attendanceHistory]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">worker Attendance History</h1>
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={handleClockIn}
                        disabled={!canClockIn} 
                        className={`px-4 py-2 rounded text-white ${
                            !canClockIn ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        Clock In
                    </button>
                    <button
                        onClick={handleClockOut}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Clock Out
                    </button>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader"></div>
                        <p className="text-blue-500 ml-2">Loading...</p>
                    </div>
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
    );
};

export default WorkerPage;
