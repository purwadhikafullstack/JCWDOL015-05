'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/action-button';
import { useCallback, useEffect, useState } from 'react';
import { createEmployee, UpdateEmployee } from '../lib/employee-services';
import EmployeeUpdateModal from '../../dashboard-component/employee-update-modal';
import DeleteModal from '../../dashboard-component/delete-modal';
import EmployeeCreateModal from '../../dashboard-component/employee-create-modal';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

type Employee = {
  employeeId: number;
  email: string;
  password: string;
  fullName: string;
  role: string;
  outletId: number;
  outlet?: { name: string }; // To include outlet's name for display
  worker?: { station: string }; // Assuming employee has a worker relation
};

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [employeeId, setEmployeeId] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [outletId, setOutletId] = useState<number | null>(null);
  const [station, setStation] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [outletFilter, setOutletFilter] = useState<string>('');

  const limit = 5;

  // Fetch employees
  const fetchEmployees = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        role: roleFilter,
        outletId: outletFilter,
      });
      const response = await fetch(`${BASEURL}/api/employee?${query}`);
      const data = await response.json();
      setEmployees(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  }, [page, limit, roleFilter, outletFilter]);

  const openCreateModal = () => {
    setRole('outletAdmin');
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setEmail(null);
    setPassword(null);
    setFullName(null);
    setRole(null);
    setOutletId(null);
    setStation(null);
    setIsCreateModalOpen(false);
  };

  const handleCreateEmployee = async () => {
    try {
      const newEmployee = await createEmployee(
        email!,
        password!,
        fullName!,
        role!,
        outletId!,
        station!,
      );
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
      await fetchEmployees();
      closeCreateModal();
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  const openDeleteModal = (id: number, name: string) => {
    setEmployeeId(id);
    setFullName(name);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setEmployeeId(null);
    setFullName(null);
    setIsDeleteModalOpen(false);
  };

  const deleteEmployee = async () => {
    try {
      await fetch(`${BASEURL}/api/employee/${employeeId}`, {
        method: 'DELETE',
      });
      setEmployees((prevEmployees) =>
        prevEmployees.filter(
          (employee: Employee) => employee.employeeId !== employeeId,
        ),
      );
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const openUpdateModal = (
    employeeId: number,
    email: string,
    password: string,
    fullName: string,
    role: string,
    outletId: number,
    station: string | null,
  ) => {
    setEmployeeId(employeeId);
    setEmail(email);
    setPassword(password);
    setFullName(fullName);
    setRole(role);
    setOutletId(outletId);
    setStation(station);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setEmployeeId(null);
    setEmail(null);
    setPassword(null);
    setFullName(null);
    setRole(null);
    setOutletId(null);
    setStation(null);
    setIsUpdateModalOpen(false);
  };

  const handleUpdateEmployee = async () => {
    try {
      const updatedEmployee = await UpdateEmployee(
        employeeId!,
        email,
        password,
        fullName,
        role,
        outletId,
        station,
      );
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee: Employee) =>
          employee.employeeId === updatedEmployee.employeeId
            ? { ...employee, ...updatedEmployee }
            : employee,
        ),
      );
      await fetchEmployees();
      closeUpdateModal();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4">
      <h1>EMPLOYEE MANAGEMENT</h1>
      <div className="flex space-x-4">
        <CreateButton onClick={openCreateModal} />
        <select
          onChange={(e) => setRoleFilter(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <option value="">All Roles</option>
          <option value="outletAdmin">Outlet Admin</option>
          <option value="worker">Worker</option>
          <option value="driver">Driver</option>
        </select>
        <input
          type="text"
          placeholder="Filter by outlet"
          value={outletFilter}
          onChange={(e) => setOutletFilter(e.target.value)}
          className="border border-gray-300 rounded p-1 bg-white h-10"
        />
      </div>
      <table className="w-4/5 border-slate-700">
        <thead className="bg-blue-300 border-b">
          <tr>
            <th className="py-3 px-1 border-slate-700">ID</th>
            <th className="py-3 px-1 border-slate-700">Name</th>
            <th className="py-3 px-1 border-slate-700">Email</th>
            <th className="py-3 px-1 border-slate-700">Role</th>
            <th className="py-3 px-1 border-slate-700">Outlet</th>
            <th className="py-3 px-1 border-slate-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId} className="text-center border-b">
              <td className="py-3 px-1 border-slate-700">
                {employee.employeeId}
              </td>
              <td className="py-3 px-1 border-slate-700">
                {employee.fullName}
              </td>
              <td className="py-3 px-1 border-slate-700">{employee.email}</td>
              <td className="py-3 px-1 border-slate-700">{employee.role}</td>
              <td className="py-3 px-1 border-slate-700">
                {employee.outlet?.name || 'Not Assigned'}
              </td>
              <td>
                <UpdateButton
                  onClick={() =>
                    openUpdateModal(
                      employee.employeeId,
                      employee.email,
                      employee.password,
                      employee.fullName,
                      employee.role,
                      employee.outletId,
                      employee.worker?.station || null,
                    )
                  }
                />
                <DeleteButton
                  onClick={() =>
                    openDeleteModal(employee.employeeId, employee.fullName)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Next
        </button>
      </div>

      <EmployeeCreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onConfirm={handleCreateEmployee}
        email={email!}
        setEmail={setEmail}
        password={password!}
        setPassword={setPassword}
        fullName={fullName!}
        setFullName={setFullName}
        role={role!}
        setRole={setRole}
        outletId={outletId!}
        setOutletId={setOutletId}
        station={station!}
        setStation={setStation}
      />

      <EmployeeUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onConfirm={handleUpdateEmployee}
        email={email!}
        setEmail={setEmail}
        password={password!}
        setPassword={setPassword}
        fullName={fullName!}
        setFullName={setFullName}
        role={role!}
        setRole={setRole}
        outletId={outletId!}
        setOutletId={setOutletId}
        station={station!}
        setStation={setStation}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={deleteEmployee}
      >
        <p>
          Are you sure you want to delete employee{' '}
          <span className="font-bold">{fullName}</span>?
        </p>
      </DeleteModal>
    </div>
  );
}
