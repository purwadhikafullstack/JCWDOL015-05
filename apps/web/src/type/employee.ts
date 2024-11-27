export type IAttendance = {
    attendanceId: number;
    employeeId: number;
    clockIn: string | null;
    clockOut: string | null;
}