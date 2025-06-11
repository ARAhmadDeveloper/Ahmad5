'use client';

import { useEffect, useState } from "react";

type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
  };
};

export default function UserCard({ user }: Props) {
  const [ready, setReady] = useState(false);

  // Simulate loading to mimic streaming
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), Math.random() * 1000 + 300);
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) return null; // Let Suspense show fallback

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out hover:shadow-indigo-500/20 animate-fade-in-up">
      <h2 className="text-xl font-semibold text-indigo-300 mb-2">
        {user.name}
      </h2>
      <p className="text-slate-300 mb-1">
        📧 <a href={`mailto:${user.email}`} className="text-indigo-400 hover:underline">
          {user.email}
        </a>
      </p>
      <p className="text-slate-300 mb-1">📞 {user.phone}</p>
      <p className="text-slate-300">
        🌐 <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-violet-400">
          {user.website}
        </a>
      </p>
    </div>
  );
}
