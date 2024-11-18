import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface EmployeeCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (values: {
    email: string;
    password: string;
    fullName: string;
    role: string;
    outletId: number;
    station: string;
  }) => void;
}

const EmployeeCreateModal: React.FC<EmployeeCreateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    fullName: Yup.string().required('Full Name is required'),
    role: Yup.string().required('Role is required'),
    outletId: Yup.number().required('Outlet ID is required'),
    station: Yup.string().nullable(),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      fullName: '',
      role: 'outletAdmin',
      outletId: 1,
      station: '', // station will be handled based on the selected role
    },
    validationSchema,
    onSubmit: (values) => {
      onConfirm(values); // Pass data to parent
      onClose(); // Close modal after submission
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Create Data</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          {/* Password Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          {/* Full Name Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
          )}

          {/* Role Select */}
          <label className="block text-left text-sm font-medium mb-1">
            Role
          </label>
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          >
            <option value="outletAdmin">Outlet Admin</option>
            <option value="worker">Worker</option>
            <option value="driver">Driver</option>
          </select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-red-500 text-sm">{formik.errors.role}</p>
          )}

          {/* Station Select */}
          {formik.values.role === 'worker' && (
            <>
              <label className="block text-left text-sm font-medium mb-1">
                Station
              </label>
              <select
                name="station"
                value={formik.values.station}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border rounded p-2 mb-2 bg-gray-200"
              >
                <option value="washing">Washing</option>
                <option value="ironing">Ironing</option>
                <option value="packing">Packing</option>
              </select>
              {formik.touched.station && formik.errors.station && (
                <p className="text-red-500 text-sm">{formik.errors.station}</p>
              )}
            </>
          )}

          {/* Outlet ID Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Outlet ID
          </label>
          <input
            type="number"
            name="outletId"
            min={1}
            value={formik.values.outletId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.outletId && formik.errors.outletId && (
            <p className="text-red-500 text-sm">{formik.errors.outletId}</p>
          )}

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeCreateModal;
