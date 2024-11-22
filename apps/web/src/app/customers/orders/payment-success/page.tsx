'use client'
import { Button } from '@/components/ui/button';
import RoleProtection from '@/services/Unauthorized';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { updateOrderStatus } from '@/services/api/customers/customers';
const PaymentSuccess = () => {
  const [status, setStatus] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  const order_id = searchParams.get('order_id')
  const transaction_status = searchParams.get('transaction_status')
  const status_code = searchParams.get('status_code')

  const updateOrder = useMutation({
    mutationFn: async () => await updateOrderStatus(order_id!, transaction_status!, status_code!),
    onSuccess: (result)=>{
      console.log(result)
      setStatus('Pembayaran Success Terimakasih Telah Melakukan Pembayaran')
    },
    onError: ()=>{
      setStatus('Pembayaran Gagal, Mohon Hubungi Admin')
    }
  })

  const handleButton = ()=>{
    router.push('/customers/profile')
  }
  useEffect(() => {
    // checkPayment();
    if(order_id && transaction_status && status_code){
      updateOrder.mutate()
    }
  },[])

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">{status}</h1>
      <Button onClick={handleButton}>Back to profile</Button>
    </section>
  );
};

export default RoleProtection(PaymentSuccess, ['customer']);
