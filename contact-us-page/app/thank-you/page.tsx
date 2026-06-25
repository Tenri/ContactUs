'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThankYou() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Thank you, {firstName}!</h1>
      <p>We'll be in touch soon.</p>
        <p className="opacity-75">Redirecting to home page in 5 seconds...</p>
    </div>
  )
}