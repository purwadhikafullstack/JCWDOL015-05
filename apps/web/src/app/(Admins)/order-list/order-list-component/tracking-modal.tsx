import React, { ReactNode } from 'react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: number | null;
}

const OrderTrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  orderId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Order #{orderId}</h2>
        <div className="flex flex-col items-start">
          <div>Customer Name</div>
          <div>Address</div>
          <div>Weight</div>
          <div>Workers</div>
          <div>Drivers</div>
          <div>Status</div>
          <div>Last Update</div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingModal;
