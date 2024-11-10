'use client';
import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Select, Option } from '@/components/ui/select-report';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IncomeData {
  date: string;
  totalIncome: number;
}

const IncomeChartPage = () => {
  const [incomeData, setIncomeData] = useState<IncomeData[]>([]);
  const [rangeType, setRangeType] = useState<string>('daily');
  const [outletId, setOutletId] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const fetchIncomeData = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        rangeType,
        outletId,
        startDate,
        endDate,
      });

      const response = await fetch(
        `http://localhost:8000/api/laundry/report?${query}`,
      );
      const data = await response.json();
      console.log('Fetched Orders:', data.data);
      setIncomeData(data.data);
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  }, [rangeType, outletId, startDate, endDate]);

  useEffect(() => {
    fetchIncomeData();
  }, [fetchIncomeData]);

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: true,
      },
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: incomeData.map((item) => item.date),
      labels: {
        formatter: (value: string) => {
          if (incomeData.length === 0) return 'No Income';
          const date = new Date(value);

          // Set formatting options based on rangeType
          let options: Intl.DateTimeFormatOptions;
          if (rangeType === 'daily') {
            options = { year: 'numeric', month: 'short', day: '2-digit' }; // dd-MMM-yyyy
          } else if (rangeType === 'monthly') {
            options = { month: 'short' }; // MMM
          } else if (rangeType === 'annual') {
            options = { year: 'numeric' }; // yyyy
          } else {
            options = {}; // Default empty options if rangeType is not recognized
          }

          return date.toLocaleDateString('en-GB', options);
        },
      },
    },
    yaxis: {
      title: {
        text: 'Total Income',
      },
    },
    title: {
      text: `${rangeType.charAt(0).toUpperCase() + rangeType.slice(1)} Income`,
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
        formatter: (val: number) => `Rp ${val.toLocaleString()}`, // Customize currency display if needed
      },
    },
  };

  const chartSeries = [
    {
      name: 'Income',
      data: incomeData.map((item) => item.totalIncome),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4 text-blue-400">
        Income Report
      </h1>
      <div className="flex space-x-4">
        <Select
          value={outletId}
          onChange={(e) => setOutletId(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <Option value="">All Outlets</Option>
          <Option value="1">Outlet 1</Option>
          <Option value="3">Outlet 3</Option>
          <Option value="14">Outlet 14</Option>
          {/* Add more outlets as needed */}
        </Select>

        <Select
          value={rangeType}
          onChange={(e) => setRangeType(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <Option value="daily">Daily</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="annual">Annual</Option>
        </Select>

        {rangeType === 'daily' && (
          <>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mb-4 border p-2 rounded bg-white"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mb-4 border p-2 rounded bg-white"
            />
          </>
        )}
      </div>
      <div className="bg-white p-4 rounded shadow">
        {/* Render ApexCharts dynamically */}
        {ApexCharts && (
          <ApexCharts options={chartOptions} series={chartSeries} type="bar" />
        )}
      </div>
    </div>
  );
};

export default IncomeChartPage;
