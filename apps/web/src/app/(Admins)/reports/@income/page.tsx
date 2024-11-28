'use client';
import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Select, Option } from '@/components/ui/select-report';
import { ApexOptions } from 'apexcharts';
import { useAppSelector } from '@/redux/hooks';
import { Label } from '@/components/ui/label';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IncomeData {
  date: string;
  totalIncome: number;
}

const IncomeChartPage = () => {
  const superAdmin = useAppSelector((state) => state.superAdmin);
  const outletAdmin = useAppSelector((state) => state.outletAdmin);
  const loggedInOutletId = outletAdmin.employee?.outletId;

  const [incomeData, setIncomeData] = useState<IncomeData[]>([]);
  const [rangeType, setRangeType] = useState<string>('daily');
  const [outletId, setOutletId] = useState<string>(
    outletAdmin.employee?.role === 'outletAdmin' && loggedInOutletId
      ? loggedInOutletId.toString()
      : '',
  );
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [outlets, setOutlets] = useState<Outlets[]>([]);

  useEffect(() => {
    if (outletAdmin && loggedInOutletId) {
      setOutletId(loggedInOutletId.toString());
    }
  }, [outletAdmin, loggedInOutletId]);

  const fetchOulets = async () => {
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
  };

  const fetchIncomeData = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        rangeType,
        outletId,
        startDate,
        endDate,
      });

      const response = await fetch(`${BASEURL}/api/report?${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        }
      });
      const data = await response.json();
      console.log('Fetched Orders:', data.data);
      setIncomeData(data.data);
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  }, [rangeType, outletId, startDate, endDate]);

  useEffect(() => {
    fetchIncomeData();
    fetchOulets();
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
          if (incomeData.length === 0) return 'N/A';
          const date = new Date(value);

          let options: Intl.DateTimeFormatOptions;
          if (rangeType === 'daily') {
            options = { year: 'numeric', month: 'short', day: '2-digit' };
          } else if (rangeType === 'monthly') {
            options = { month: 'short' };
          } else if (rangeType === 'annual') {
            options = { year: 'numeric' };
          } else {
            options = {};
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
        formatter: (val: number) => `Rp ${val.toLocaleString()}`,
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
    <div className="w-full max-w-3xl mx-auto text-slate-700">
      <h1 className="text-center text-2xl font-bold mb-4 text-white">
        Income Report
      </h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {superAdmin.role === 'superAdmin' && (
          <Select
            value={outletId}
            onChange={(e) => setOutletId(e.target.value)}
            className="border p-2 rounded bg-white"
          >
            <Option value="">All Outlets</Option>
            {outlets.map((outlet) => (
              <option key={outlet.outletId} value={outlet.outletId}>
                {outlet.name}
              </option>
            ))}
          </Select>
        )}
        <Select
          value={rangeType}
          onChange={(e) => setRangeType(e.target.value)}
          className="border p-2 rounded bg-white"
        >
          <Option value="daily">Daily</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="annual">Annual</Option>
        </Select>

        {rangeType === 'daily' && (
          <>
            <div className=" flex flex-col">
              <Label>from: </Label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border p-2 rounded bg-white"
              />
            </div>
            <div className="flex flex-col">
              <Label>to: </Label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-2 rounded bg-white"
              />
            </div>
          </>
        )}
      </div>
      <div className="bg-white p-4 rounded shadow">
        {ApexCharts && (
          <ApexCharts options={chartOptions} series={chartSeries} type="bar" />
        )}
      </div>
    </div>
  );
};

export default IncomeChartPage;
