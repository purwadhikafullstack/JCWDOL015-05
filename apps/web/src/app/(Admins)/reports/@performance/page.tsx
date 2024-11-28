'use client';

import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { useAppSelector } from '@/redux/hooks';
import { Label } from '@/components/ui/label';

const ApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <p>Loading chart...</p>,
});

interface OrderCountData {
  employeeId: number;
  employeeName: string;
  counts: {
    date: string;
    count: number;
  }[];
}

const EmployeePerformanceReport = () => {
  const superAdmin = useAppSelector((state) => state.superAdmin);
  const outletAdmin = useAppSelector((state) => state.outletAdmin);
  const loggedInOutletId = outletAdmin.employee?.outletId;

  const [chartData, setChartData] = useState<OrderCountData[]>([]);
  const [uniqueDates, setUniqueDates] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [rangeType, setRangeType] = useState<string>('daily');
  const [outletId, setOutletId] = useState<string>(
    outletAdmin.employee?.role === 'outletAdmin' && loggedInOutletId
      ? loggedInOutletId.toString()
      : '',
  );
  const [outlets, setOutlets] = useState<Outlets[]>([]);
  const [employeeType, setEmployeeType] = useState<string>('worker');

  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

  const fetchOutlets = useCallback(async () => {
    try {
      const response = await fetch(`${BASEURL}/api/outlet`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        }
      });
      const data = await response.json();
      setOutlets(data.data);
    } catch (error) {
      console.error('Outlets fetching error:', error);
    }
  }, [BASEURL]);

  const fetchData = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        rangeType,
        ...(outletId && { outletId }),
      });

      const response = await fetch(
        `${BASEURL}/api/report/${employeeType === 'worker' ? 'workers' : 'drivers'}?${query}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': 'true',
          }
        },
      );
      if (!response.ok) throw new Error('Failed to fetch data');

      const data: OrderCountData[] = await response.json();
      console.log(data);

      setChartData(data);

      const allDates = Array.from(
        new Set(data.flatMap((employee) => employee.counts.map((c) => c.date))),
      ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

      setUniqueDates(allDates);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [startDate, endDate, rangeType, outletId, BASEURL, employeeType]);

  useEffect(() => {
    if (outletAdmin && loggedInOutletId) {
      setOutletId(loggedInOutletId.toString());
    }
    fetchOutlets();
  }, [outletAdmin, loggedInOutletId, fetchOutlets]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: true },
      height: 400,
    },
    xaxis: {
      categories: uniqueDates,
    },
    yaxis: {
      title: { text: 'Order Count' },
    },
    title: {
      text: `${rangeType.charAt(0).toUpperCase() + rangeType.slice(1)} Employee Performance`,
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} Orders`,
      },
    },
  };

  const chartSeries = chartData.map((data) => ({
    name: `${data.employeeName}`,
    data: uniqueDates.map((date) => {
      const countEntry = data.counts.find((count) => count.date === date);
      return countEntry ? countEntry.count : 0;
    }),
  }));

  return (
    <div className="w-full max-w-3xl mx-auto text-slate-700">
      <h1 className="text-center text-2xl font-bold mb-4 text-white">
        Employee Performance
      </h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="md: flex flex-wrap gap-4">
          {superAdmin.role === 'superAdmin' && (
            <select
              value={outletId}
              onChange={(e) => setOutletId(e.target.value)}
              className="border p-2 rounded bg-white"
            >
              <option value="">All Outlets</option>
              {outlets.map((outlet) => (
                <option key={outlet.outletId} value={outlet.outletId}>
                  {outlet.name}
                </option>
              ))}
            </select>
          )}
          <select
            className="border p-2 rounded bg-white"
            value={employeeType}
            onChange={(e) => setEmployeeType(e.target.value)}
          >
            <option value="worker">Worker</option>
            <option value="driver">Driver</option>
          </select>

          <select
            value={rangeType}
            onChange={(e) => setRangeType(e.target.value)}
            className="border p-2 rounded bg-white"
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </div>
        {rangeType === 'daily' && (
          <>
            <div className="flex gap-4">
              <div className=" flex flex-col">
                <Label>from: </Label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border p-2 rounded bg-white"
                  placeholder="Start Date"
                />
              </div>
              <div className=" flex flex-col">
                <Label>to: </Label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border p-2 rounded bg-white"
                  placeholder="End Date"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-white p-4 rounded shadow">
        {chartData.length > 0 && ApexCharts && (
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default EmployeePerformanceReport;