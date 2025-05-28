'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

type User = {
  role: string;
};

const Admin: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<'loading' | 'authorized' | 'unauthorized'>('loading');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      setStatus('unauthorized');
      return;
    }

    try {
      const user: User = JSON.parse(storedUser);

      if (user.role === 'admin') {
        setStatus('authorized');
      } else {
        setStatus('unauthorized');
      }
    } catch (error) {
      setStatus('unauthorized');
    }
  }, []);

  useEffect(() => {
    if (status === 'unauthorized') {
      router.replace('/not-authorized');
    }
  }, [status, router]);

  if (status === 'loading') return <p>Loading admin area... 🛡️</p>;
  if (status === 'unauthorized') return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, Admin! 👑</h1>
      <p className="text-sm text-gray-500">Current path: {pathname}</p>
    </div>
  );
};

export default Admin;
