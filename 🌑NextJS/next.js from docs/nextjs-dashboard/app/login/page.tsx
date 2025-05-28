'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.role === 'admin') {
        router.replace('/admin');
      } else {
        router.replace('/not-authorized'); // redirect logged-in but non-admins
      }
    }
  }, []);

  const handleLogin = (role: 'admin' | 'user') => {
    localStorage.setItem('user', JSON.stringify({ role }));
    router.push('/admin');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin('admin')} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login as Admin</button>
      <button onClick={() => handleLogin('user')} className="bg-green-500 text-white px-4 py-2 rounded-md">Login as Regular User</button>
    </div>
  );
};

export default Login;
