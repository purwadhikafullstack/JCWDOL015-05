'use client';
import { useAppSelector } from '@/redux/hooks';
import RoleProtection from '@/services/Unauthorized';
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
  const isClockedIn = useAppSelector((state) => state.attendance.clockIn);

  if (!isClockedIn && (driver.employee?.role === 'driver' || worker.employee?.role === 'worker')) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-center text-2xl font-semibold text-red-500">
          You must clock in before accessing the workstation.
        </h1>
      </div>
    );
  }

  if (outletAdmin.employee?.role === 'outletAdmin') {
    return (
      <div className="flex flex-col gap-4 py-5 min-h-screen text-gray-800">
        <h1 className="text-center font-bold pb-5 text-3xl">
          Workstation <span className="text-[#1678F3]">Outlet Admin</span>
        </h1>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            Incoming Orders
          </h1>
          {orderConfirmation}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            Order Item Input
          </h1>
          {itemInput}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            Bypass Request
          </h1>
          {bypassRequest}
        </div>
      </div>
    );
  }

  if (driver.employee?.role === 'driver') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800">
        <h1 className="text-center font-bold pb-5 text-3xl">
          Workstation <span className="text-[#1678F3]">Driver</span>
        </h1>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            Pickup Request
          </h1>
          {getPickup}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            Delivery Request
          </h1>
          {getDelivery}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            On The Way
          </h1>
          {onPickup}
        </div>
        <div className="border-y-2 border-gray-400 p-4 shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">History</h1>
          <div className="flex justify-center items-center">{driverHistory}</div>
        </div>
      </div>
    );
  }

  if (worker.employee?.role === 'worker') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800">
        <h1 className="text-center font-bold pb-5 text-3xl">
          Workstation <span className="text-[#1678F3]">Worker</span>
          <br />
          <span className="text-2xl"> Station: {worker.station}</span>
        </h1>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center shadow-lg bg-blue-300">
          <h1 className="text-center font-bold text-2xl mb-8 text-white">
            Worker Task
          </h1>
          {workerTask}
        </div>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-8">History</h1>
          {workerHistory}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <h1>Not authorized to access</h1>
    </div>
  );
};

export default RoleProtection(WorkstationLayout, ['outletAdmin', 'driver', 'worker']);
