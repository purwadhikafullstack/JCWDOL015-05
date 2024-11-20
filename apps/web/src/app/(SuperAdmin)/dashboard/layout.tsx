'use client';
import { useAppSelector } from '@/redux/hooks';
import RoleProtection from '@/services/Unauthorized';

const Layout = ({
  employees,
  outlets,
  items,
}: {
  employees: React.ReactNode;
  outlets: React.ReactNode;
  items: React.ReactNode;
}) => {
  const superAdmin = useAppSelector((state) => state.superAdmin);
  if (superAdmin.role === 'superAdmin') {
    return (
      <div className="flex flex-col gap-4 p-5 bg-blue-300 min-h-screen">
        <div>{employees}</div>
        <div>{outlets}</div>
        <div>{items}</div>
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

export default RoleProtection(Layout, ['superAdmin']);
