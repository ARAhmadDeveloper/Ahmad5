'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function AdminPage() {
  const controls = useAnimation();

  useEffect(() => {
    // Looping pulse animation for the stats cards
    controls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    });
  }, [controls]);

  const stats = [
    { label: 'Users', value: 1420, icon: '👥' },
    { label: 'Revenue', value: 98765, icon: '💰' },
    { label: 'Orders', value: 384, icon: '📦' },
    { label: 'Tickets', value: 27, icon: '🎫' },
  ];

  return (
    <main className="min-h-screen bg-white p-6 sm:p-10 text-gray-900">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          Welcome back, Admin. Here’s the pulse of your platform.
        </p>
      </header>

      <section className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon }, idx) => (
          <motion.div
            key={label}
            animate={controls}
            className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              className="text-3xl font-bold"
            >
              {value.toLocaleString()}
            </motion.div>
            <div className="text-gray-600 mt-2 text-sm uppercase tracking-wide">{label}</div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto mt-12 bg-gray-50 rounded-3xl p-6 shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-semibold mb-4"
        >
          Recent Activity
        </motion.h2>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-3 max-h-64 overflow-y-auto"
        >
          {[
            'User John Doe signed up',
            'New order #384 processed',
            'Ticket #27 resolved',
            'Revenue hit $98,765 milestone',
            'System maintenance completed',
          ].map((item, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white rounded-xl p-3 shadow-sm"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </main>
  );
}
