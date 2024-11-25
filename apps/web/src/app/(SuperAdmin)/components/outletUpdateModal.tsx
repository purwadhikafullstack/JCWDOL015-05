import React from 'react';
import UpdateMap from './updateMap';

interface UpdateModalProps {
  isOpen: boolean;
  outletId: number;
  onClose: () => void;
  initialName: string;
  initialProvinsi: string;
  initialKota: string;
  initialKecamatan: string;
  initialLongitude: number;
  initialLatitude: number;
}

const OutletUpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  outletId,
  onClose,
  initialName,
  initialProvinsi,
  initialKota,
  initialKecamatan,
  initialLongitude,
  initialLatitude,
}) => {
  const handleCancel = () => {
    onClose();
  };

  console.log('OUTLET DISPLAY:', outletId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-3/4 text-center max-h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Update Outlet</h2>

        <>
          <div>
            <UpdateMap
              outletId={outletId}
              initialName={initialName}
              initialProvinsi={initialProvinsi}
              initialKota={initialKota}
              initialKecamatan={initialKecamatan}
              initialLongitude={initialLongitude}
              initialLatitude={initialLatitude}
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default OutletUpdateModal;
