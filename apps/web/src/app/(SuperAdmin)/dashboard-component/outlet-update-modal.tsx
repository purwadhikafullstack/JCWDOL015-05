// import React, { ReactNode } from 'react';

// interface UpdateModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: () => void;
//   name: string;
//   setName: (value: string) => void;
//   provinsi: string;
//   setProvinsi: (value: string) => void;
//   kota: string;
//   setKota: (value: string) => void;
//   kecamatan: string;
//   setKecamatan: (value: string) => void;
//   longitude: number;
//   setLongitude: (value: number) => void;
//   latitude: number;
//   setLatitude: (value: number) => void;
// }

// const OutletUpdateModal: React.FC<UpdateModalProps> = ({
//   isOpen,
//   onClose,
//   onConfirm,
//   name,
//   setName,
//   provinsi,
//   setProvinsi,
//   kota,
//   setKota,
//   kecamatan,
//   setKecamatan,
//   longitude,
//   setLongitude,
//   latitude,
//   setLatitude,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
//         <h2 className="text-xl font-semibold mb-4">Update</h2>

//         <div>
//           <label className="block text-left text-sm font-medium mb-1">
//             Outlet Name
//           </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border rounded p-2 mb-4 bg-gray-200"
//           />
//           <label className="block text-left text-sm font-medium mb-1">
//             Provinsi
//           </label>
//           <input
//             type="text"
//             value={provinsi}
//             onChange={(e) => setProvinsi(e.target.value)}
//             className="w-full border rounded p-2 mb-4 bg-gray-200"
//           />
//           <label className="block text-left text-sm font-medium mb-1">
//             Kota
//           </label>
//           <input
//             type="text"
//             value={kota}
//             onChange={(e) => setKota(e.target.value)}
//             className="w-full border rounded p-2 mb-4 bg-gray-200"
//           />
//           <label className="block text-left text-sm font-medium mb-1">
//             Kecamatan
//           </label>
//           <input
//             type="text"
//             value={kecamatan}
//             onChange={(e) => setKecamatan(e.target.value)}
//             className="w-full border rounded p-2 mb-4 bg-gray-200"
//           />
//           <label className="block text-left text-sm font-medium mb-1">
//             Longitude
//           </label>
//           <input
//             type="number"
//             value={longitude}
//             onChange={(e) => setLongitude(Number(e.target.value))}
//             className="w-full border rounded p-2 mb-4 bg-gray-200"
//           ></input>
//           <label className="block text-left text-sm font-medium mb-1">
//             Longitude
//           </label>
//           <input
//             type="number"
//             value={latitude}
//             onChange={(e) => setLatitude(Number(e.target.value))}
//             className="w-full border rounded p-2 mb-4 bg-gray-200"
//           ></input>
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             onClick={onConfirm}
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//           >
//             Save
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OutletUpdateModal;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface UpdateModalProps {
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
  initialName: string;
  initialProvinsi: string;
  initialKota: string;
  initialKecamatan: string;
  initialLongitude: number;
  initialLatitude: number;
}

const OutletUpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  initialName,
  initialProvinsi,
  initialKota,
  initialKecamatan,
  initialLongitude,
  initialLatitude,
}) => {
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Outlet name is required'),
    provinsi: Yup.string().required('Provinsi is required'),
    kota: Yup.string().required('Kota is required'),
    kecamatan: Yup.string().required('Kecamatan is required'),
    longitude: Yup.number().required('Longitude is required').nullable(),
    latitude: Yup.number().required('Latitude is required').nullable(),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: initialName || '',
      provinsi: initialProvinsi || '',
      kota: initialKota || '',
      kecamatan: initialKecamatan || '',
      longitude: initialLongitude || 0,
      latitude: initialLatitude || 0,
    },
    enableReinitialize: true, // Reinitialize Formik values when props change
    validationSchema,
    onSubmit: (values) => {
      onConfirm(values); // Pass updated data to parent
      onClose(); // Close modal after submission
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Update Outlet</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Outlet Name Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Outlet Name
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}

          {/* Provinsi Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Provinsi
          </label>
          <input
            type="text"
            name="provinsi"
            value={formik.values.provinsi}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.provinsi && formik.errors.provinsi && (
            <p className="text-red-500 text-sm">{formik.errors.provinsi}</p>
          )}

          {/* Kota Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Kota
          </label>
          <input
            type="text"
            name="kota"
            value={formik.values.kota}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.kota && formik.errors.kota && (
            <p className="text-red-500 text-sm">{formik.errors.kota}</p>
          )}

          {/* Kecamatan Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Kecamatan
          </label>
          <input
            type="text"
            name="kecamatan"
            value={formik.values.kecamatan}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.kecamatan && formik.errors.kecamatan && (
            <p className="text-red-500 text-sm">{formik.errors.kecamatan}</p>
          )}

          {/* Longitude Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Longitude
          </label>
          <input
            type="number"
            name="longitude"
            value={formik.values.longitude}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.longitude && formik.errors.longitude && (
            <p className="text-red-500 text-sm">{formik.errors.longitude}</p>
          )}

          {/* Latitude Input */}
          <label className="block text-left text-sm font-medium mb-1">
            Latitude
          </label>
          <input
            type="number"
            name="latitude"
            value={formik.values.latitude}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.latitude && formik.errors.latitude && (
            <p className="text-red-500 text-sm">{formik.errors.latitude}</p>
          )}

          {/* Action Buttons */}
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

export default OutletUpdateModal;
