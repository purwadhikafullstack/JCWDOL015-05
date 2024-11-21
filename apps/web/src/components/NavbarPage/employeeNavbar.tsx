import Link from 'next/link';
import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { workerLogoutAction } from '@/redux/slice/workerSlice';
import { useAppSelector } from '@/redux/hooks';
import { driverLogoutAction } from '@/redux/slice/driverSlice';
import { outletAdminLogoutAction } from '@/redux/slice/outletAdminSlice';
import { useRouter } from 'next/navigation';
import { superAdminLogoutAction } from '@/redux/slice/superAdminSlice';

export default function EmployeeNavbarPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { worker, outletAdmin, driver, superAdmin } = useAppSelector(
    (state) => ({
      worker: state.worker,
      driver: state.driver,
      outletAdmin: state.outletAdmin,
      superAdmin: state.superAdmin,
    }),
  );

  const handleLogout = () => {
    if (worker || driver || outletAdmin || superAdmin) {
      if (worker) dispatch(workerLogoutAction());
      if (driver) dispatch(driverLogoutAction());
      if (outletAdmin) dispatch(outletAdminLogoutAction());
      if (superAdmin) dispatch(superAdminLogoutAction());
    }
    router.push('/employeeLogin');
  };

  return (
    <div className="relative flex items-center h-[55px] px-[45px] bg-[#fffaf0] shadow-md">
      <div className="absolute left-[45px]">
        <Link href={'/employee'}>
          <Image src={logo} alt="logo" width={45} />
        </Link>
      </div>
      <div className="flex-grow flex justify-center items-center gap-[60px] font-semibold text-[16px] text-black">
        <Link href={'/employee'}>
          <div>
            <h1>Attendance</h1>
          </div>
        </Link>
        <Link href={'/workstation'}>
          <h1>WorkStation</h1>
        </Link>
      </div>
      <div className="absolute right-[45px] flex font-semibold text-[16px] text-black">
        <button
          className="bg-[#1678F3] rounded-md py-1 px-4 text-white"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
