import React, { ReactNode } from 'react';

interface OutletCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name: string;
  setName: (value: string) => void;
  provinsi: string;
  setProvinsi: (value: string) => void;
  kota: string;
  setKota: (value: string) => void;
  kecamatan: string;
  setKecamatan: (value: string) => void;
  longitude: number;
  setLongitude: (value: number) => void;
  latitude: number;
  setLatitude: (value: number) => void;
}

const OutletCreateModal: React.FC<OutletCreateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  name,
  setName,
  provinsi,
  setProvinsi,
  kota,
  setKota,
  kecamatan,
  setKecamatan,
  longitude,
  setLongitude,
  latitude,
  setLatitude,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Create Data</h2>

        <div>
          <label className="block text-left text-sm font-medium mb-1">
            Outlet Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Provinsi
          </label>
          <input
            type="text"
            value={provinsi}
            onChange={(e) => setProvinsi(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Kota
          </label>
          <input
            type="text"
            value={kota}
            onChange={(e) => setKota(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Kecamatan
          </label>
          <input
            type="text"
            value={kecamatan}
            onChange={(e) => setKecamatan(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />
          <label className="block text-left text-sm font-medium mb-1">
            Longitude
          </label>
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(Number(e.target.value))}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          ></input>
          <label className="block text-left text-sm font-medium mb-1">
            Longitude
          </label>
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(Number(e.target.value))}
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

export default OutletCreateModal;
