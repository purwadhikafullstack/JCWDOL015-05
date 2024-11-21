import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { workerLogoutAction } from "@/redux/slice/workerSlice";
import { useAppSelector } from "@/redux/hooks";
import { driverLogoutAction } from "@/redux/slice/driverSlice";
import { outletAdminLogoutAction } from "@/redux/slice/outletAdminSlice";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function EmployeeNavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { worker, outletAdmin, driver } = useAppSelector((state) => ({
    worker: state.worker,
    driver: state.driver,
    outletAdmin: state.outletAdmin,
  }));

  const handleLogout = () => {
    if (worker) {
      dispatch(workerLogoutAction());
    } else if (driver) {
      dispatch(driverLogoutAction());
    } else if (outletAdmin) {
      dispatch(outletAdminLogoutAction());
    }
    router.push("/employeeLogin");
  };

  return (
    <div className="relative flex items-center h-[55px] px-4 lg:px-[45px] bg-[#fffaf0] shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href={"/employee"}>
          <Image src={logo} alt="logo" width={45} />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-grow justify-center items-center gap-[30px] font-semibold text-[16px] text-black">
        <Link href={"/employee"}>
          <h1>Attendance</h1>
        </Link>
        <Link href={"/workstation"}>
          <h1>WorkStation</h1>
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden ml-auto">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[55px] right-0 w-full bg-[#fffaf0] shadow-md lg:hidden flex flex-col items-center py-4 gap-4">
          <Link href={"/employee"} onClick={() => setIsMenuOpen(false)}>
            <h1>Attendance</h1>
          </Link>
          <Link href={"/workstation"} onClick={() => setIsMenuOpen(false)}>
            <h1>WorkStation</h1>
          </Link>
          <button
            className="bg-[#1678F3] rounded-md py-1 px-4 text-white"
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
          >
            Log Out
          </button>
        </div>
      )}

      {/* Logout Button (Desktop Only) */}
      <div className="hidden lg:flex absolute right-[45px] font-semibold text-[16px] text-black">
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
