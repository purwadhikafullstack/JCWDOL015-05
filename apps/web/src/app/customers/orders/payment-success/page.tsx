'use client'
import { Button } from '@/components/ui/button';
import RoleProtection from '@/services/Unauthorized';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PaymentSuccess = () => {
  const router = useRouter();
  
  // Define the function outside useEffect
  const checkPayment = async () => {
    // if result ok go to orders page
    router.push('/orders');
  };

  useEffect(() => {
    checkPayment();
  }, []); // Empty array is fine now, no need to include checkPayment

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center'>
      <h1>Pembayaran Sukses</h1>
      <Button>Back to profile</Button>
    </section>
  );
};

export default RoleProtection(PaymentSuccess, ['customer']);
