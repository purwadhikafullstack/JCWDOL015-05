import React from 'react';

export default function WorkstationLayout({
  orderConfirmation,
  itemInput,
  bypassRequest,
  getPickup,
  getDelivery,
  onPickup,
  workerTask,
}: {
  orderConfirmation: React.ReactNode;
  itemInput: React.ReactNode;
  bypassRequest: React.ReactNode;
  getPickup: React.ReactNode;
  getDelivery: React.ReactNode;
  onPickup: React.ReactNode;
  workerTask: React.ReactNode;
}) {
  type Role = 'outletAdmin' | 'worker' | 'driver';
  const role: Role = 'driver' as Role;

  if (role === 'outletAdmin') {
    return (
      <div className="flex flex-col bg-white gap-4 p-5 min-h-screen text-gray-800">
        <h1 className="text-center font-bold text-2xl mb-12">Workstation</h1>
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">
            Incoming Orders
          </h1>
          {orderConfirmation}
        </div>
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">
            Order Item Input
          </h1>
          {itemInput}
        </div>
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">Bypass Request</h1>
          {bypassRequest}
        </div>
      </div>
    );
  } else if (role === 'driver') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800">
        <h1 className="text-center font-bold text-2xl mb-12">Workstation</h1>
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">Pickup Request</h1>
          {getPickup}
        </div>
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">
            Delivery Request
          </h1>
          {getDelivery}
        </div>
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">On The Way</h1>
          {onPickup}
        </div>
      </div>
    );
  } else if (role === 'worker') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800">
        <h1 className="text-center font-bold text-2xl mb-12">Workstation</h1>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center">
          <h1 className="text-center font-bold text-xl mb-8">Worker Task</h1>
          {workerTask}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
