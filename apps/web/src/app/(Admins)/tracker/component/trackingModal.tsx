import React, { ReactNode } from 'react';
import { displayOrderStatus } from '../../lib/formatter';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: number | null;
  updatedAt: string;
  status: string;
  drivers: Drivers[];
  workers: Workers[];
}

const OrderTrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  orderId,
  updatedAt,
  status,
  drivers,
  workers,
}) => {
  if (!isOpen) return null;
  console.log(updatedAt);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-2 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Order #{orderId}</h2>
        <div className="flex flex-col items-start">
          <div className="flex gap-2">
            <p className="font-semibold">Workers:</p>
            <ul className="flex flex-col items-start">
              {workers.length === 0 ? (
                <p>not assigned</p>
              ) : (
                workers.map((workerOnOrder: any, index: number) => (
                  <li key={index}>
                    {index + 1}. {workerOnOrder.worker.employee.fullName}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Drivers:</p>
            <ul className="flex flex-col items-start">
              {drivers.length === 0 ? (
                <p>not assigned</p>
              ) : (
                drivers.map((driverOnOrder: any, index: number) => (
                  <li key={index}>
                    {index + 1}. {driverOnOrder.driver.employee.fullName}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Status:</p>
            <p>{displayOrderStatus(status)}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Last Update:</p>
            <p>{updatedAt}</p>
          </div>
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
