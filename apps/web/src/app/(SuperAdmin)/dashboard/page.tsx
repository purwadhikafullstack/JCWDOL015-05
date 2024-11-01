'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Sales() {
  // Using useState to manage the chart options and series
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div className="bg-[#fffaf0]">
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {typeof window !== 'undefined' && (
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                width="500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
