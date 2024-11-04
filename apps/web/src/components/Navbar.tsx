'use client';
import Image from "next/image";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this instead of useRouter for Next 13+
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/lib/server";
import { logoutAction } from "@/redux/slice/customerSlice";

export const Navbar = () => {
  const [token, setToken] = useState('')
  const dispatch = useDispatch()

  const pathname = usePathname();  // usePathname is safe for server-side rendering
  const customer = useAppSelector((state) => state.customer)
  console.log(customer)
  console.log(token)
  const getTokenData = async () => {
    const res = await getToken()
    setToken(res as string)
  }

  useEffect(() => {


    getTokenData()
  }, [])
  // const storedData = queryClient.getQueryData(['customer'])
  // console.log("Stored customer data:", storedData)
  return (
    <div className="relative flex items-center h-[60px] px-[45px] bg-[#fffaf0]">
      {/* Logo */}
      <div className="absolute left-[45px]">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={45} />
        </Link>
      </div>
      {/* Navbar items */}
      <div className="flex-grow flex justify-center items-center gap-[45px] font-semibold text-[16px] text-black">
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
            Service
          </h1>
        </Link>

        <Link href={'/my-order'}>
          <h1
            className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/my-order' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}
          >
            My Order
          </h1>
        </Link>

        <Link href={'/contact'}>
          <h1
            className={`relative cursor-pointer transition-all duration-300 ease-in-out ${pathname === '/contact' ? 'border-b-2 border-black' : 'hover:translate-y-[-3px] hover:border-b-2 hover:border-black'}`}
          >
            Contact
          </h1>
        </Link>
      </div>

      {/* Login / Signup buttons */}
      <div className="absolute right-[45px] flex font-bold text-[16px] text-white gap-[24px]">
        {token ? (
          <Link href={'/login'}>
            <button className="bg-[#4682B4] py-[3px] px-[15px] rounded-[8px]">Profile</button>
          </Link>
        ) : (
          <>
            <Link href={'/login'}>
              <button className="bg-[#4682B4] py-[3px] px-[15px] rounded-[8px]">LOGIN</button>
            </Link>
            <Link href={'/register'}>
              <button className="bg-[#4682B4] py-[3px] px-[15px] rounded-[8px]">SIGN UP</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

