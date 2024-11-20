'use client';
import DriverPage from '@/components/EmployeePage/driverPage';
import WorkerPage from '@/components/EmployeePage/workerPage';
import { useAppSelector } from '@/redux/hooks';
import { driverLogoutAction } from '@/redux/slice/driverSlice';
import { workerLogoutAction } from '@/redux/slice/workerSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import ListAttendance from '../list-attendance/page';

export default function Employee() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { worker, driver, outletAdmin } = useAppSelector((state) => ({
    worker: state.worker,
    driver: state.driver,
    outletAdmin: state.outletAdmin,
  }));

  const handleLogout = () => {
    if (worker) {
      dispatch(workerLogoutAction());
    } else if (driver) {
      dispatch(driverLogoutAction());
    }
    router.push('/');
  };

  const role =
    worker?.employee?.role ||
    driver?.employee?.role ||
    outletAdmin?.employee?.role;

  const renderPage = () => {
    switch (role) {
      case 'worker':
        return <WorkerPage />;
      case 'driver':
        return <DriverPage />;
      case 'outletAdmin':
        return <ListAttendance />;
      default:
        return <div>Role not found</div>;
    }
  };

  return <div>{renderPage()}</div>;
}
