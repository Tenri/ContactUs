'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function ThankYouContent() {
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
    <div className="min-h-screen bg-white font-sans">
      <main className="w-full max-w-6xl mx-auto px-16 py-8">
        <h1 className="text-3xl font-bold mb-4">Thank you, {firstName}!</h1>
        <p >We'll be in touch soon.</p>
        <p className="text-sm text-gray-400">Redirecting to home page in 5 seconds...</p>
      </main>
    </div>
  )
}

export default function ThankYou() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  )
}