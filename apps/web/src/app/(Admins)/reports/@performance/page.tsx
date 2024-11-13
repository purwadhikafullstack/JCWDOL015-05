'use client';

import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <p>Loading chart...</p>,
});

interface OrderCountData {
  employeeId: number;
  counts: {
    date: string;
    count: number;
  }[];
}

const EmployeePerformanceReport = () => {
  const [chartData, setChartData] = useState<OrderCountData[]>([]);
  const [uniqueDates, setUniqueDates] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [rangeType, setRangeType] = useState<string>('daily');
  const [outletId, setOutletId] = useState<string>('');
  const [outlets, setOutlets] = useState<Outlets[]>([]);

  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

  const fetchOutlets = useCallback(async () => {
    try {
      const response = await fetch(`${BASEURL}/api/outlet`);
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

      const response = await fetch(`${BASEURL}/api/report/workers?${query}`);
      if (!response.ok) throw new Error('Failed to fetch data');

      const data: OrderCountData[] = await response.json();
      setChartData(data);

      // Collect unique dates across all employee data
      const allDates = Array.from(
        new Set(data.flatMap((employee) => employee.counts.map((c) => c.date))),
      ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

      setUniqueDates(allDates);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [startDate, endDate, rangeType, outletId, BASEURL]);

  useEffect(() => {
    fetchData();
    fetchOutlets();
  }, [fetchData, fetchOutlets]);

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
    name: `Employee ${data.employeeId}`,
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

      <div className="flex space-x-4 mb-4">
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

        <select className="border p-2 rounded bg-white">
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

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded bg-white"
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded bg-white"
          placeholder="End Date"
        />
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
