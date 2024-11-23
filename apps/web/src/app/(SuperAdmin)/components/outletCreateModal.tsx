import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface OutletCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (values: {
    name: string;
    provinsi: string;
    kota: string;
    kecamatan: string;
    longitude: number;
    latitude: number;
  }) => void;
}

const OutletCreateModal: React.FC<OutletCreateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  // Initial form values
  const initialValues = {
    name: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    longitude: 0,
    latitude: 0,
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Outlet Name is required'),
    provinsi: Yup.string().required('Provinsi is required'),
    kota: Yup.string().required('Kota is required'),
    kecamatan: Yup.string().required('Kecamatan is required'),
    longitude: Yup.number()
      .required('Longitude is required')
      .typeError('Longitude must be a number'),
    latitude: Yup.number()
      .required('Latitude is required')
      .typeError('Latitude must be a number'),
  });

  // Formik hook for form handling
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // onConfirm(values);
      console.log(values)
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Create Data</h2>

        {/* <form onSubmit={formik.handleSubmit}> */}
          {/* Outlet Name */}
          {/* <div>
            <label className="block text-left text-sm font-medium mb-1">
              Outlet Name
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded p-2 mb-4 bg-gray-200"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div> */}

          {/* Provinsi */}
          {/* <div>
            <label className="block text-left text-sm font-medium mb-1">
              Provinsi
            </label>
            <input
              type="text"
              name="provinsi"
              value={formik.values.provinsi}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded p-2 mb-4 bg-gray-200"
            />
            {formik.touched.provinsi && formik.errors.provinsi && (
              <div className="text-red-500 text-sm">
                {formik.errors.provinsi}
              </div>
            )}
          </div> */}

          {/* Kota */}
          {/* <div>
            <label className="block text-left text-sm font-medium mb-1">
              Kota
            </label>
            <input
              type="text"
              name="kota"
              value={formik.values.kota}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded p-2 mb-4 bg-gray-200"
            />
            {formik.touched.kota && formik.errors.kota && (
              <div className="text-red-500 text-sm">{formik.errors.kota}</div>
            )}
          </div> */}

          {/* Kecamatan */}
          {/* <div>
            <label className="block text-left text-sm font-medium mb-1">
              Kecamatan
            </label>
            <input
              type="text"
              name="kecamatan"
              value={formik.values.kecamatan}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded p-2 mb-4 bg-gray-200"
            />
            {formik.touched.kecamatan && formik.errors.kecamatan && (
              <div className="text-red-500 text-sm">
                {formik.errors.kecamatan}
              </div>
            )}
          </div> */}

          {/* Longitude */}
          {/* <div>
            <label className="block text-left text-sm font-medium mb-1">
              Longitude
            </label>
            <input
              type="number"
              name="longitude"
              value={formik.values.longitude}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded p-2 mb-4 bg-gray-200"
            />
            {formik.touched.longitude && formik.errors.longitude && (
              <div className="text-red-500 text-sm">
                {formik.errors.longitude}
              </div>
            )}
          </div> */}

          {/* Latitude */}
          {/* <div>
            <label className="block text-left text-sm font-medium mb-1">
              Latitude
            </label>
            <input
              type="number"
              name="latitude"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded p-2 mb-4 bg-gray-200"
            />
            {formik.touched.latitude && formik.errors.latitude && (
              <div className="text-red-500 text-sm">
                {formik.errors.latitude}
              </div>
            )}
          </div> */}
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
        {/* </form> */}
      </div>
    </div>
  );
};

export default OutletCreateModal;
