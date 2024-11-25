'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { sendEmailVerification } from '@/services/api/customers/customers';
import { ISendEmailVerification } from '@/type/customers';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function SendEmailVerification() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, action) => {
      sendEmailMutation.mutate(values);
    },
  });
  const sendEmailMutation = useMutation({
    mutationFn: async (data: ISendEmailVerification) =>
      await sendEmailVerification(data),
    onSuccess: (data) => {
      toast.success('Success Send Email Verification to Your Email');
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Card className='w-1/4 p-3'>
        <form onSubmit={formik.handleSubmit} className="space-y-3">
            <h1 className='text-xl'>Resend Email Verification</h1>
          <Input
            name="email"
            type="text"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer"
          >
            {sendEmailMutation.isPending
              ? 'Loading... '
              : 'Send Email Verification'}
          </Button>
        </form>
      </Card>
    </section>
  );
}
