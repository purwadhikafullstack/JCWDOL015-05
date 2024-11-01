'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/action-button';
import { useEffect, useState } from 'react';

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/laundry/employee`)
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4">
      <h1>EMPLOYEE MANAGEMENT</h1>
      <CreateButton />
      <table className="w-4/5 border-slate-700">
        <thead className="bg-blue-300 border-b">
          <tr>
            <th className="py-3 px-1 border-slate-700">ID</th>
            <th className="py-3 px-1 border-slate-700">Name</th>
            <th className="py-3 px-1 border-slate-700">Email</th>
            <th className="py-3 px-1 border-slate-700">Password</th>
            <th className="py-3 px-1 border-slate-700">Role</th>
            <th className="py-3 px-1 border-slate-700">Outlet ID</th>
            <th className="py-3 px-1 border-slate-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 &&
            employees.map((employee: any) => (
              <tr key={employee.employeeId} className="text-center border-b">
                <td className="py-3 px-1 border-slate-700">
                  {employee.employeeId}
                </td>
                <td className="py-3 px-1 border-slate-700">
                  {employee.fullName}
                </td>
                <td className="py-3 px-1 border-slate-700">{employee.email}</td>
                <td className="py-3 px-1 border-slate-700">
                  {employee.password}
                </td>
                <td className="py-3 px-1 border-slate-700">{employee.role}</td>
                <td className="py-3 px-1 border-slate-700">
                  {employee.outletId}
                </td>
                <td>
                  <UpdateButton />
                  <DeleteButton />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
