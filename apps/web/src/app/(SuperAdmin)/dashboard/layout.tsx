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
      <div className="flex flex-col items-center gap-4 px-4 bg-blue-300 min-h-screen w-auto">
        <h1 className="font-bold text-2xl mb-4 pt-4 text-center text-white">
          Super Admin Management Dashboard
        </h1>
        <div className="w-full">{employees}</div>
        <div className="w-full">{outlets}</div>
        <div className="w-full pb-28 md:pb-10">{items}</div>
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
