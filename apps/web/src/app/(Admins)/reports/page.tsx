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
        // Formatter for custom date format
        formatter: (value: string) => {
          const date = new Date(value); // Convert the value to a Date object
          const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short', // Use 'long' for full month name, 'short' for abbreviation
            day: '2-digit',
          };
          return date.toLocaleDateString('en-GB', options); // Format as dd-mmm-yyyy
        },
      },
    },
    yaxis: {
      title: {
        text: 'Income',
      },
    },
    title: {
      text: `Income for ${rangeType.charAt(0).toUpperCase() + rangeType.slice(1)}`,
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
      <h1>Income Chart</h1>

      <Select value={rangeType} onChange={(e) => setRangeType(e.target.value)}>
        <Option value="daily">Daily</Option>
        <Option value="monthly">monthly</Option>
        <Option value="annual">Annual</Option>
      </Select>

      <Select value={outletId} onChange={(e) => setOutletId(e.target.value)}>
        <Option value="">All Outlets</Option>
        <Option value="1">Outlet 1</Option>
        <Option value="3">Outlet 3</Option>
        {/* Add more outlets as needed */}
      </Select>
      {rangeType === 'daily' && (
        <>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </>
      )}

      {/* Render ApexCharts dynamically */}
      {ApexCharts && (
        <ApexCharts options={chartOptions} series={chartSeries} type="bar" />
      )}
    </div>
  );
};

export default IncomeChartPage;
