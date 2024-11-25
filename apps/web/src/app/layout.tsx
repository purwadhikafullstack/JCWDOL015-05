'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });
const disabledNavbar = [
  '/login',
  '/register',
  '/:token',
  '/employeeLogin',
  '/unauthorized',
];
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import StoreProvider from '@/components/StoreProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>
            {/* <SessionProvider> */}
            {!disabledNavbar.includes(pathName) && <Navbar />}
            {children}
            {/* </SessionProvider> */}
          </StoreProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            closeOnClick
            draggable
          />
        </QueryClientProvider>
      </body>
    </html>
  );
}
