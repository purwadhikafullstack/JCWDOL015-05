'use client';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import home from '@/assets/home.png';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Use this instead of useRouter for Next 13+
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks';
import { deleteToken, getToken } from '@/lib/server';
import { logoutAction } from '@/redux/slice/customerSlice';
import defaultProfile from '@/assets/images.webp';
import { toast } from 'react-toastify';

export const CustomerNavbar = () => {
  const [token, setToken] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch();
  const pathname = usePathname(); 
  const customer = useAppSelector((state) => state.customer);
  const navbarProfileImg = customer.avatar || defaultProfile
  const getTokenData = async () => {
    const res = await getToken();
    setToken(res as string);
  };
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(logoutAction())
    deleteToken()
    toast.success('Logout Success')
    router.push('/login')
  };
  useEffect(() => {
    getTokenData();
  }, []);

  return (
    <div className="relative flex items-center h-[55px] px-[45px] bg-[#fffaf0]">
      {/* Logo */}
      <div className="absolute left-[45px]">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={45} />
        </Link>
      </div>
      {/* Navbar items */}
      <div className="flex-grow flex justify-center items-center gap-[45px] font-semibold text-[16px] text-black">
        {token ? (
          <>
            <Link href={'/'}>
              <div
                className={`relative cursor-pointer ${pathname === '/' ? 'border-b-2 py-1 border-black' : ''}`}
              >
                <Image src={home} alt="home" width={22} height={22} />
              </div>
            </Link>

            <Link href={'/service'}>
              <h1
                className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/service' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}
              >
                Add Address
              </h1>
            </Link>
            <Link href={'/customers/pickup'}>
              <h1
                className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/service' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}
              >
                Order Pickup
              </h1>
            </Link>
            <Link href={'/customers/profile'}>
              <h1
                className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/my-order' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}
              >
                Profile
              </h1>
            </Link>
          </>
        ) : (
          ''
        )}
      </div>

      {/* Login / Signup buttons */}
      <div className="absolute right-[45px] flex font-bold text-[16px] text-white gap-[24px]">
        {token ? (
          <>
            <div
              className="rounded-full cursor-pointer h-11 w-11"
              onClick={handleIsOpen}
            >
              <Image
                className="object-cover overflow-hidden rounded-full cursor-pointer h-11 w-11"
                src={navbarProfileImg}
                alt=""
                width={44} // specify the width
                height={44} // specify the height
              />
            </div>
            <div
              className={`absolute overflow-x-hidden p-3 space-y-3 bg-blue-500 rounded-md top-20 right-5 z-30 ${isOpen ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-row items-center gap-3">
                <div className="">
                  <Image
                    className="object-cover overflow-hidden rounded-full cursor-pointer h-11 w-11"
                    src={navbarProfileImg}
                    alt=""
                    width={44} // specify the width
                    height={44} // specify the height
                  />
                </div>
                <div>
                  <p className="text-xl">{customer.fullName}</p>
                  <p>{customer.role}</p>
                  <p>{customer.email}</p>
                </div>
              </div>
              <div className="border border-gray-200 border-b-1"></div>
              <p className="p-2 cursor-pointer hover:bg-white hover:text-black hover:rounded-md">
                <Link href={'/customers/profile/edit'}>Setting</Link>
              </p>
              <p className="p-2 cursor-pointer hover:bg-white hover:text-black hover:rounded-md">
                <Link href={'/profile'}>Profile</Link>
              </p>
              <div className="border border-gray-200 border-b-1"></div>
              <p
                className="p-2 cursor-pointer hover:bg-white hover:text-black hover:rounded-md"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          </>
        ) : (
          <>
            <Link href={'/login'}>
              <button className="bg-[#4682B4] py-[3px] px-[15px] rounded-[8px]">
                LOGIN
              </button>
            </Link>
            <Link href={'/register'}>
              <button className="bg-[#4682B4] py-[3px] px-[15px] rounded-[8px]">
                SIGN UP
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
