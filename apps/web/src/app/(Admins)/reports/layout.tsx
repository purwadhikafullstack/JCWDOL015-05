'use client';
import { useAppSelector } from '@/redux/hooks';

const ReportsLayout = ({
  income,
  performance,
}: {
  income: React.ReactNode;
  performance: React.ReactNode;
}) => {
  const superAdmin = useAppSelector((state) => state.superAdmin);
  const outletAdmin = useAppSelector((state) => state.outletAdmin);
  if (
    outletAdmin.employee?.role === 'outletAdmin' ||
    superAdmin.role === 'superAdmin'
  ) {
    return (
      <div className="flex flex-col gap-4 p-5 bg-blue-300 min-h-screen">
        <div className="mb-8">{income}</div>
        <div>{performance}</div>
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

export default ReportsLayout;
