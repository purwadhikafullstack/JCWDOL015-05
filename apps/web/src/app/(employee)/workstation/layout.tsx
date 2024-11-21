'use client';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const WorkstationLayout = ({
  orderConfirmation,
  itemInput,
  bypassRequest,
  getPickup,
  getDelivery,
  onPickup,
  workerTask,
  driverHistory,
  workerHistory,
}: {
  orderConfirmation: React.ReactNode;
  itemInput: React.ReactNode;
  bypassRequest: React.ReactNode;
  getPickup: React.ReactNode;
  getDelivery: React.ReactNode;
  onPickup: React.ReactNode;
  workerTask: React.ReactNode;
  driverHistory: React.ReactNode;
  workerHistory: React.ReactNode;
}) => {
  const worker = useAppSelector((state) => state.worker);
  const driver = useAppSelector((state) => state.driver);
  const outletAdmin = useAppSelector((state) => state.outletAdmin);
  if (outletAdmin.employee?.role === 'outletAdmin') {
    return (
      <div className="flex flex-col gap-4 py-5 min-h-screen text-gray-800 ">
        <h1 className="text-center font-bold pb-5 text-3xl">
          Workstation <span className="text-[#1678F3]">Outlet Admin</span>
        </h1>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">
            Incoming Orders
          </h1>
          {orderConfirmation}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">
            Order Item Input
          </h1>
          {itemInput}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">
            Bypass Request
          </h1>
          {bypassRequest}
        </div>
      </div>
    );
  } else if (driver.employee?.role === 'driver') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800 ">
        <h1 className="text-center font-bold pb-5 text-3xl">
          Workstation <span className="text-[#1678F3]">Driver</span>
        </h1>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">
            Pickup Request
          </h1>
          {getPickup}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">
            Delivery Request
          </h1>
          {getDelivery}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">On The Way</h1>
          {onPickup}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">History</h1>
          <div className="flex justify-center items-center">
            {driverHistory}
          </div>
        </div>
      </div>
    );
  } else if (worker.employee?.role === 'worker') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800 ">
        <h1 className="text-center font-bold pb-5 text-3xl">
          Workstation <span className="text-[#1678F3]">Worker</span>
          <br />
          <span className="text-2xl"> Station: {worker.station}</span>
        </h1>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">Worker Task</h1>
          {workerTask}
        </div>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">History</h1>
          {workerHistory}
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <h1>Not authorized to access</h1>
      </div>
    );
  }
};

export default WorkstationLayout;
