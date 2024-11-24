import React from 'react';
import MapGenerator from './mapGenerator';

interface OutletCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OutletCreateModal: React.FC<OutletCreateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-3/4 text-center max-h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Create Data</h2>

        <>
          <div>
            <MapGenerator />
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

export default OutletCreateModal;
