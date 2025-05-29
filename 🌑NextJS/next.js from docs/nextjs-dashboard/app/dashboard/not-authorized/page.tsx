'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';

export default function NotAuthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-md max-w-md text-center"
      >
        <div className="text-red-500 mb-4">
          <FaLock size={48} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Access Denied
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          You don’t have permission to view this page. If you think this is a mistake, contact your administrator.
        </p>

        <Link href="/dashboard/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
            Return to Login
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
