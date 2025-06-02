'use client';
import { useState } from 'react';

interface Props {
  onCreate: (user: { name: string; email: string; password: string }) => Promise<void>;
}

export default function CreateUserButton({ onCreate }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onCreate(form);
      setForm({ name: '', email: '', password: '' });
      setIsOpen(false);
    } catch (error) {
      alert('Failed to create user: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {/* Global animation style */}
    <style jsx global>{`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.4s ease forwards;
      }
    `}</style>
  
    {/* Floating button */}
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition cursor-pointer z-40"
    >
      + Create User
    </button>
  
    {/* Modal */}
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 transition-opacity duration-300">
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-8 w-full max-w-md shadow-2xl animate-fade-in-up transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New User</h2>
  
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition transform focus:scale-105"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition transform focus:scale-105"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition transform focus:scale-105"
            />
          </div>
  
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm bg-gray-300 cursor-pointer rounded hover:bg-gray-400 transition hover:animate-pulse"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 text-sm text-white cursor-pointer rounded transition hover:animate-pulse ${
                loading
                  ? 'bg-purple-300 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {loading ? 'Creating...' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    )}
  </>
  
  );
}
