'use client'
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface history {
  orderId: number,
  workerId: number,
  activity?: string,
}

export default function WorkstationLayout({
  orderConfirmation,
  itemInput,
  bypassRequest,
  getPickup,
  getDelivery,
  onPickup,
  workerTask,
  driverHistory,
  outletAdminHistory,
  workerHistory,
  attendance
}: {
  orderConfirmation: React.ReactNode;
  itemInput: React.ReactNode;
  bypassRequest: React.ReactNode;
  getPickup: React.ReactNode;
  getDelivery: React.ReactNode;
  onPickup: React.ReactNode;
  workerTask: React.ReactNode;
  driverHistory: React.ReactNode;
  outletAdminHistory: React.ReactNode;
  workerHistory: React.ReactNode;
  attendance: React.ReactNode

}) {

  const worker = useAppSelector((state) => state.worker)
  const driver = useAppSelector((state) => state.driver)
  const outletAdmin = useAppSelector((state) => state.outletAdmin)

  


  if (outletAdmin.employee?.role === 'outletAdmin') {
    return (
      <div className="flex flex-col bg-white gap-4 p-5 min-h-screen text-gray-800">
        <h1 className="text-center font-bold text-2xl mb-12">Workstation OutletAdmin</h1>
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
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">History</h1>
          {outletAdminHistory}
        </div>
      </div>
    );
  } else if (driver.employee?.role === 'driver') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800">
        <h1 className="text-center font-bold text-2xl mb-12">Workstation Driver</h1>
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
        <div className="border-y-2 border-gray-400 p-4">
          <h1 className="text-center font-bold text-xl mb-8">History</h1>
          <div className='flex justify-center items-center'>
          {driverHistory}
          </div>
        </div>
      </div>
    );
  } else if (worker.employee?.role === 'worker') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-white min-h-screen text-gray-800">
        <h1 className="text-center font-bold text-2xl mb-12">Workstation Worker <br /> {worker.station}</h1>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center">
          <h1 className="text-center font-bold text-xl mb-8">Worker Task</h1>
          {workerTask}
        </div>
        <div className="border-y-2 border-gray-400 p-4 flex flex-col items-center">
          <h1 className="text-center font-bold text-xl mb-8">History</h1>
          {workerHistory}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
