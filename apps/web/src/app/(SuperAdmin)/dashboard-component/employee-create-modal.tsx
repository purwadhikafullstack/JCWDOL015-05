import React, { ReactNode } from 'react';

interface EmployeeCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  fullName: string;
  setFullName: (value: string) => void | null;
  role: string;
  setRole: (value: string) => void;
  outletId: number;
  setOutletId: (value: number) => void;
  station: string;
  setStation: (value: string) => void | null;
}

const EmployeeCreateModal: React.FC<EmployeeCreateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  email,
  setEmail,
  password,
  setPassword,
  fullName,
  setFullName,
  role,
  setRole,
  outletId,
  setOutletId,
  station,
  setStation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Create Data</h2>

        <div>
          <label className="block text-left text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Full Namme
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          >
            <option value="outletAdmin">Outlet Admin</option>
            <option value="worker">Worker</option>
            <option value="driver">Driver</option>
          </select>
          {role === 'worker' && (
            <>
              <label className="block text-left text-sm font-medium mb-1">
                Station
              </label>
              <select
                className="w-full border rounded p-2 mb-4 bg-gray-200"
                value={station}
                onChange={(e) => setStation(e.target.value)}
                defaultValue="washing"
              >
                <option value="washing">Washing</option>
                <option value="ironing">Ironing</option>
                <option value="packing">Packing</option>
              </select>
            </>
          )}
          <label className="block text-left text-sm font-medium mb-1">
            Outlet ID
          </label>
          <input
            type="number"
            value={outletId}
            onChange={(e) => setOutletId(Number(e.target.value))}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          ></input>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onConfirm}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCreateModal;
