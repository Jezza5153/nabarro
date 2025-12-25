"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AanmeldenRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contact');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <p>Redirecting to contact page...</p>
    </div>
  );
}
