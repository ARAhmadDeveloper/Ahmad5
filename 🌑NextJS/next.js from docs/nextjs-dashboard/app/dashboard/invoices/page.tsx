'use client';

import { motion } from 'framer-motion';

type Invoice = {
  id: string;
  client: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
};

const invoices: Invoice[] = [
  {
    id: 'INV-00123',
    client: 'Stellar Inc.',
    amount: 1345.0,
    dueDate: '2025-06-15',
    status: 'Paid',
  },
  {
    id: 'INV-00124',
    client: 'CloudNova',
    amount: 980.5,
    dueDate: '2025-06-20',
    status: 'Pending',
  },
  {
    id: 'INV-00125',
    client: 'Moonlight',
    amount: 720.0,
    dueDate: '2025-06-10',
    status: 'Overdue',
  },
  {
    id: 'INV-00126',
    client: 'IronByte',
    amount: 1890.25,
    dueDate: '2025-07-01',
    status: 'Paid',
  },
  {
    id: 'INV-00127',
    client: 'Nova Network',
    amount: 450.75,
    dueDate: '2025-06-25',
    status: 'Pending',
  },
  {
    id: 'INV-00128',
    client: 'CyberSync',
    amount: 1120.0,
    dueDate: '2025-07-05',
    status: 'Pending',
  },
  {
    id: 'INV-00129',
    client: 'BrightLabs',
    amount: 2300.0,
    dueDate: '2025-06-12',
    status: 'Overdue',
  },
  {
    id: 'INV-00130',
    client: 'DataHive',
    amount: 1500.0,
    dueDate: '2025-07-10',
    status: 'Paid',
  },
];

export default function InvoicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Invoices Overview
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto bg-white rounded-xl shadow border border-gray-200"
        >
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Invoice ID</th>
                <th className="p-4 font-semibold text-gray-700">Client</th>
                <th className="p-4 font-semibold text-gray-700">Amount</th>
                <th className="p-4 font-semibold text-gray-700">Due Date</th>
                <th className="p-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <motion.tr
                  key={invoice.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="p-4 font-mono text-gray-800">{invoice.id}</td>
                  <td className="p-4 text-gray-700">{invoice.client}</td>
                  <td className="p-4 font-semibold text-gray-900">${invoice.amount.toFixed(2)}</td>
                  <td className="p-4 text-gray-600">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        invoice.status === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : invoice.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </main>
  );
}
