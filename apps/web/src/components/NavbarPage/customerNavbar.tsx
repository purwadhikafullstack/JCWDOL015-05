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
import { MenuIcon } from 'lucide-react';

export const CustomerNavbar = () => {
  const [token, setToken] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false)
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
  const handleNavbarMenu = () => setNavbarOpen(!navbarOpen)
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
      <div className="absolute left-4 md:left-[45px]">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={45} />
        </Link>
      </div>
      {/* Navbar items */}
      <div className="flex-grow hidden justify-center items-center gap-[45px] font-semibold text-[16px] text-black md:flex lg:flex">
        {token ? (
          <>
            <Link href={'/'}>
              <div className={`relative cursor-pointer ${pathname === '/' ? 'border-b-2 py-1 border-black' : ''}`}>
                <Image src={home} alt="home" width={22} height={22} />
              </div>
            </Link>

            <Link href={'/service'}>
              <h1 className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/service' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}>
                Add Address
              </h1>
            </Link>
            <Link href={'/customers/pickup'}>
              <h1 className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/service' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`} >
                Order Pickup
              </h1>
            </Link>
            <Link href={'/customers/profile'}>
              <h1 className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/my-order' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`} >
                Profile
              </h1>
            </Link>
          </>
        ) : (
          ''
        )}
      </div>
      <div className='cursor-pointer md:hidden absolute right-4'>
        <button onClick={handleNavbarMenu}>
        <MenuIcon />
        </button>
      </div>
      {/* Login / Signup buttons */}
      <div className="hidden absolute right-[45px]  font-bold text-[16px] text-white gap-[24px] md:flex lg:flex">
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
            <div className={`absolute overflow-x-hidden p-3 space-y-3 bg-blue-500 rounded-md top-20 right-5 z-30 ${isOpen ? 'block' : 'hidden'}`} >
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
                <Link href={'/customers/profile'}>Profile</Link>
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
      {/* Navbar menu Mobile */}
      <div className={`fixed flex flex-col h-screen top-12 right-0 z-10 w-full bg-[#fffaf0] text-white transition-transform duration-300 transform ${navbarOpen ? '-translate-x-0' : 'translate-x-full'}`}>
      {token ? (
          <div className='w-full flex flex-col items-center text-black'>
            <Link className='w-3/4 border-b-2 bg-steel-blue text-center my-2 px-[15px] py-2 rounded-[8px] ' href={'/service'}>
              <h1 className={`relative text-white cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/service' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}>
                Add Address
              </h1>
            </Link>
            <Link className='w-3/4 border-b-2 bg-steel-blue text-center my-2 px-[15px] py-2 rounded-[8px] ' href={'/customers/pickup'}>
              <h1 className={`relative text-white cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/service' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`} >
                Order Pickup
              </h1>
            </Link>
            <Link className='w-3/4 border-b-2 bg-steel-blue text-center my-2 px-[15px] py-2 rounded-[8px] ' href={'/customers/profile'}>
              <h1 className={`relative text-white  cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/my-order' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`} >
                Profile
              </h1>
            </Link>
          <Link className='w-3/4 border-b-2 bg-steel-blue text-center my-2 px-[15px] py-2 rounded-[8px] ' href={'/register'}>
            <button onClick={handleLogout} className="  text-white ">
              Logout
            </button>
          </Link>
        </div>
        ) : (
          <div className='w-full flex flex-col items-center'>
            <Link className='w-3/4 border-b-2 bg-steel-blue text-center my-2 px-[15px] py-2 rounded-[8px] ' href={'/login'}>
              <button className=" text-white ">
                LOGIN
              </button>
            </Link>
            <Link className='w-3/4 border-b-2 bg-steel-blue text-center my-2 px-[15px] py-2 rounded-[8px] ' href={'/register'}>
              <button className="  text-white ">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
