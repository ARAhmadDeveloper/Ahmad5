"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Customer = {
  id: number;
  name: string;
  email: string;
  company: string;
  status: "Active" | "Inactive" | "Pending";
  avatar: string;
};

const customers: Customer[] = [
  {
    id: 1,
    name: "Sarah Lin",
    email: "sarah@stellar.io",
    company: "Stellar Inc.",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Jake Morrison",
    email: "jake@cloudnova.com",
    company: "CloudNova",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 3,
    name: "Eliza Gordon",
    email: "eliza@moonlight.io",
    company: "Moonlight",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    name: "Travis Cole",
    email: "travis@ironbyte.dev",
    company: "IronByte",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: 5,
    name: "Nina Hart",
    email: "nina@nova.net",
    company: "Nova Network",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 6,
    name: "Daniel Wu",
    email: "daniel@cybersync.io",
    company: "CyberSync",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=29",
  },
];

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Customer Directory
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
                <th className="p-4 font-semibold text-gray-700">Customer</th>
                <th className="p-4 font-semibold text-gray-700">Email</th>
                <th className="p-4 font-semibold text-gray-700">Company</th>
                <th className="p-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <motion.tr
                  key={customer.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-4 flex items-center space-x-3">
                    <Image
                      src={customer.avatar}
                      alt={customer.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <span className="font-medium text-gray-800">
                      {customer.name}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{customer.email}</td>
                  <td className="p-4 text-gray-500">{customer.company}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : customer.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {customer.status}
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
