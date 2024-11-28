'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/actionButton';
import { useCallback, useEffect, useState } from 'react';
import { createEmployee, UpdateEmployee } from '../lib/employeeServices';
import EmployeeUpdateModal from '../../components/employeeUpdateModal';
import DeleteModal from '../../components/deleteModal';
import EmployeeCreateModal from '../../components/employeeCreateModal';
import { toast } from 'react-toastify';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

type Employee = {
  employeeId: number;
  email: string;
  password: string;
  fullName: string;
  role: string;
  outletId: number;
  outlet?: { name: string };
  worker?: { station: string };
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
  const [outlets, setOutlets] = useState<Outlets[]>([]);
  const [station, setStation] = useState<string>('washing');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [outletFilter, setOutletFilter] = useState<string>('');

  const limit = 5;

  const fetchOulets = async () => {
    try {
      const response = await fetch(`${BASEURL}/api/outlet`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        }
      });
      const data = await response.json();
      setOutlets(data.data);
    } catch (error) {
      console.error('Outlets fetching error:', error);
    }
  };

  const fetchEmployees = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        role: roleFilter,
        outletId: outletFilter,
      });
      const response = await fetch(`${BASEURL}/api/employee?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        }
      });
      const data = await response.json();
      setEmployees(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  }, [page, limit, roleFilter, outletFilter]);

  const openCreateModal = () => {
    setRole('outletAdmin');
    setStation('washing');
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setEmail(null);
    setPassword(null);
    setFullName(null);
    setRole(null);
    setOutletId(null);
    setStation('washing');
    setIsCreateModalOpen(false);
  };

  const handleCreateEmployee = async (values: {
    email: string;
    password: string;
    fullName: string;
    role: string;
    outletId: number;
    station: string;
  }) => {
    try {
      const newEmployee = await createEmployee(
        values.email,
        values.password,
        values.fullName,
        values.role,
        values.outletId,
        values.station,
      );
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
      await fetchEmployees();
      toast.success('Employee created');
      closeCreateModal();
    } catch (error) {
      toast.error('Failed to create employee');
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
      toast.success('Deletion success');
      setIsDeleteModalOpen(false);
    } catch (error) {
      toast.error('Deletion failed');
    }
  };

  const openUpdateModal = (
    employeeId: number,
    email: string,
    fullName: string,
    role: string,
    outletId: number,
    station: string,
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
    setStation('');
    setIsUpdateModalOpen(false);
  };

  const handleUpdateEmployee = async (values: {
    role: string;
    outletId: number | null;
    station: string | null;
  }) => {
    try {
      const updatedEmployee = await UpdateEmployee(
        employeeId!,
        values.role,
        values.outletId,
        values.station,
      );
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee: Employee) =>
          employee.employeeId === updatedEmployee.employeeId
            ? { ...employee, ...updatedEmployee }
            : employee,
        ),
      );
      await fetchEmployees();
      toast.success('Employee updated');
      closeUpdateModal();
    } catch (error) {
      toast.error('update failed');
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
    fetchOulets();
  }, [fetchEmployees]);

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 px-2 py-4 gap-4">
      <h1>EMPLOYEE MANAGEMENT</h1>
      <div className="flex flex-wrap gap-4 mt-4">
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
        <select
          onChange={(e) => setOutletFilter(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <option value="">All Outlets</option>
          {outlets.map((outlet: Outlets) => (
            <option key={outlet.outletId} value={outlet.outletId}>
              {outlet.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-blue-300 border-b">
            <tr>
              <th className="py-3 px-4 border-b text-center">ID</th>
              <th className="py-3 px-4 border-b text-center">Name</th>
              <th className="py-3 px-4 border-b text-center sm:table-cell">
                Email
              </th>
              <th className="py-3 px-4 border-b text-center">Role</th>
              <th className="py-3 px-4 border-b text-center md:table-cell">
                Outlet
              </th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeId} className="text-center border-b">
                <td className="py-2 px-4">{employee.employeeId}</td>
                <td className="py-2 px-4">{employee.fullName}</td>
                <td className="py-2 px-4 sm:table-cell">{employee.email}</td>
                <td className="py-2 px-4">{employee.role}</td>
                <td className="py-2 px-4 md:table-cell">
                  {employee.outlet?.name || 'Not Assigned'}
                </td>
                <td className="py-2 px-4">
                  <div className="flex gap-1 justify-center">
                    <UpdateButton
                      onClick={() =>
                        openUpdateModal(
                          employee.employeeId,
                          employee.email,
                          employee.fullName,
                          employee.role,
                          employee.outletId,
                          employee.worker?.station!,
                        )
                      }
                    />
                    <DeleteButton
                      onClick={() =>
                        openDeleteModal(employee.employeeId, employee.fullName)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Previous
        </button>
        <span className="text-sm">
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
        outlets={outlets}
      />

      <EmployeeUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onConfirm={handleUpdateEmployee}
        initialEmail={email!}
        initialFullName={fullName!}
        initialRole={role!}
        initialOutletId={outletId!}
        InitialStation={station}
        outlets={outlets}
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