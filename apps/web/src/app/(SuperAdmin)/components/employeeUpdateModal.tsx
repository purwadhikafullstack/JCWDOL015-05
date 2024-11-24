import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (values: {
    email: string;
    password: string;
    fullName: string;
    role: string;
    outletId: number | null;
    station: string | null;
  }) => void;
  initialEmail: string;
  initialPassword: string;
  initialFullName: string;
  initialRole: string;
  initialOutletId: number | null;
  InitialStation: string | 'washing';
}

const EmployeeUpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  initialEmail,
  initialPassword,
  initialFullName,
  initialRole,
  initialOutletId,
  InitialStation,
}) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    fullName: Yup.string().required('Full name is required'),
    role: Yup.string().required('Role is required'),
    outletId: Yup.number()
      .nullable()
      .transform((_, val) => (val === '' ? null : val))
      .positive('Outlet ID must be a positive number')
      .integer('Outlet ID must be an integer'),
    station: Yup.string().nullable(),
  });

  const formik = useFormik({
    initialValues: {
      email: initialEmail || '',
      password: initialPassword || '',
      fullName: initialFullName || '',
      role: initialRole || '',
      outletId: initialOutletId || null,
      station: InitialStation || 'washing',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      onConfirm(values);
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Update Employee</h2>

        <form onSubmit={formik.handleSubmit}>
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
          <label className="block text-left text-sm font-medium mb-1">
            Role
          </label>
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          >
            <option value="outletAdmin">Outlet Admin</option>
            <option value="worker">Worker</option>
            <option value="driver">Driver</option>
          </select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-red-500 text-sm">{formik.errors.role}</p>
          )}
          {formik.values.role === 'worker' && (
            <>
              <label className="block text-left text-sm font-medium mb-1">
                Station
              </label>
              <select
                name="station"
                value={formik.values.station || ''}
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
          <label className="block text-left text-sm font-medium mb-1">
            Outlet ID
          </label>
          <input
            type="number"
            name="outletId"
            value={formik.values.outletId || ''}
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
              Save
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

export default EmployeeUpdateModal;
